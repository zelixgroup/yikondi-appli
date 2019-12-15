import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IHealthCentre } from 'app/shared/model/health-centre.model';
import { HealthCentreService } from './health-centre.service';
import { HealthCentreDeleteDialogComponent } from './health-centre-delete-dialog.component';

@Component({
  selector: 'jhi-health-centre',
  templateUrl: './health-centre.component.html'
})
export class HealthCentreComponent implements OnInit, OnDestroy {
  healthCentres: IHealthCentre[];
  eventSubscriber: Subscription;

  constructor(
    protected healthCentreService: HealthCentreService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.healthCentreService.query().subscribe((res: HttpResponse<IHealthCentre[]>) => {
      this.healthCentres = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInHealthCentres();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IHealthCentre) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  registerChangeInHealthCentres() {
    this.eventSubscriber = this.eventManager.subscribe('healthCentreListModification', () => this.loadAll());
  }

  delete(healthCentre: IHealthCentre) {
    const modalRef = this.modalService.open(HealthCentreDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.healthCentre = healthCentre;
  }
}
