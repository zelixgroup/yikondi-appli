import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPharmacy } from 'app/shared/model/pharmacy.model';
import { PharmacyService } from './pharmacy.service';
import { PharmacyDeleteDialogComponent } from './pharmacy-delete-dialog.component';

@Component({
  selector: 'jhi-pharmacy',
  templateUrl: './pharmacy.component.html'
})
export class PharmacyComponent implements OnInit, OnDestroy {
  pharmacies: IPharmacy[];
  eventSubscriber: Subscription;

  constructor(
    protected pharmacyService: PharmacyService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.pharmacyService.query().subscribe((res: HttpResponse<IPharmacy[]>) => {
      this.pharmacies = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPharmacies();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPharmacy) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  registerChangeInPharmacies() {
    this.eventSubscriber = this.eventManager.subscribe('pharmacyListModification', () => this.loadAll());
  }

  delete(pharmacy: IPharmacy) {
    const modalRef = this.modalService.open(PharmacyDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.pharmacy = pharmacy;
  }
}
