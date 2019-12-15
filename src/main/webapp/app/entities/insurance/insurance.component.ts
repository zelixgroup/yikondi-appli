import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IInsurance } from 'app/shared/model/insurance.model';
import { InsuranceService } from './insurance.service';
import { InsuranceDeleteDialogComponent } from './insurance-delete-dialog.component';

@Component({
  selector: 'jhi-insurance',
  templateUrl: './insurance.component.html'
})
export class InsuranceComponent implements OnInit, OnDestroy {
  insurances: IInsurance[];
  eventSubscriber: Subscription;

  constructor(
    protected insuranceService: InsuranceService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.insuranceService.query().subscribe((res: HttpResponse<IInsurance[]>) => {
      this.insurances = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInInsurances();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IInsurance) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  registerChangeInInsurances() {
    this.eventSubscriber = this.eventManager.subscribe('insuranceListModification', () => this.loadAll());
  }

  delete(insurance: IInsurance) {
    const modalRef = this.modalService.open(InsuranceDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.insurance = insurance;
  }
}
