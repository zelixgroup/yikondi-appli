import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPharmacyAllNightPlanning } from 'app/shared/model/pharmacy-all-night-planning.model';
import { PharmacyAllNightPlanningService } from './pharmacy-all-night-planning.service';
import { PharmacyAllNightPlanningDeleteDialogComponent } from './pharmacy-all-night-planning-delete-dialog.component';

@Component({
  selector: 'jhi-pharmacy-all-night-planning',
  templateUrl: './pharmacy-all-night-planning.component.html'
})
export class PharmacyAllNightPlanningComponent implements OnInit, OnDestroy {
  pharmacyAllNightPlannings: IPharmacyAllNightPlanning[];
  eventSubscriber: Subscription;

  constructor(
    protected pharmacyAllNightPlanningService: PharmacyAllNightPlanningService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.pharmacyAllNightPlanningService.query().subscribe((res: HttpResponse<IPharmacyAllNightPlanning[]>) => {
      this.pharmacyAllNightPlannings = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPharmacyAllNightPlannings();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPharmacyAllNightPlanning) {
    return item.id;
  }

  registerChangeInPharmacyAllNightPlannings() {
    this.eventSubscriber = this.eventManager.subscribe('pharmacyAllNightPlanningListModification', () => this.loadAll());
  }

  delete(pharmacyAllNightPlanning: IPharmacyAllNightPlanning) {
    const modalRef = this.modalService.open(PharmacyAllNightPlanningDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.pharmacyAllNightPlanning = pharmacyAllNightPlanning;
  }
}
