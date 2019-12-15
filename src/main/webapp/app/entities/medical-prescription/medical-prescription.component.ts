import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IMedicalPrescription } from 'app/shared/model/medical-prescription.model';
import { MedicalPrescriptionService } from './medical-prescription.service';
import { MedicalPrescriptionDeleteDialogComponent } from './medical-prescription-delete-dialog.component';

@Component({
  selector: 'jhi-medical-prescription',
  templateUrl: './medical-prescription.component.html'
})
export class MedicalPrescriptionComponent implements OnInit, OnDestroy {
  medicalPrescriptions: IMedicalPrescription[];
  eventSubscriber: Subscription;

  constructor(
    protected medicalPrescriptionService: MedicalPrescriptionService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.medicalPrescriptionService.query().subscribe((res: HttpResponse<IMedicalPrescription[]>) => {
      this.medicalPrescriptions = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInMedicalPrescriptions();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IMedicalPrescription) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  registerChangeInMedicalPrescriptions() {
    this.eventSubscriber = this.eventManager.subscribe('medicalPrescriptionListModification', () => this.loadAll());
  }

  delete(medicalPrescription: IMedicalPrescription) {
    const modalRef = this.modalService.open(MedicalPrescriptionDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.medicalPrescription = medicalPrescription;
  }
}
