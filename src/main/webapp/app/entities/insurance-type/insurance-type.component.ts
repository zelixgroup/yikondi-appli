import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IInsuranceType } from 'app/shared/model/insurance-type.model';
import { InsuranceTypeService } from './insurance-type.service';
import { InsuranceTypeDeleteDialogComponent } from './insurance-type-delete-dialog.component';

@Component({
  selector: 'jhi-insurance-type',
  templateUrl: './insurance-type.component.html'
})
export class InsuranceTypeComponent implements OnInit, OnDestroy {
  insuranceTypes: IInsuranceType[];
  eventSubscriber: Subscription;

  constructor(
    protected insuranceTypeService: InsuranceTypeService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.insuranceTypeService.query().subscribe((res: HttpResponse<IInsuranceType[]>) => {
      this.insuranceTypes = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInInsuranceTypes();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IInsuranceType) {
    return item.id;
  }

  registerChangeInInsuranceTypes() {
    this.eventSubscriber = this.eventManager.subscribe('insuranceTypeListModification', () => this.loadAll());
  }

  delete(insuranceType: IInsuranceType) {
    const modalRef = this.modalService.open(InsuranceTypeDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.insuranceType = insuranceType;
  }
}
