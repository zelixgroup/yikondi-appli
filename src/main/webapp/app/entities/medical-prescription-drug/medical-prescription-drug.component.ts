import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IMedicalPrescriptionDrug } from 'app/shared/model/medical-prescription-drug.model';
import { MedicalPrescriptionDrugService } from './medical-prescription-drug.service';
import { MedicalPrescriptionDrugDeleteDialogComponent } from './medical-prescription-drug-delete-dialog.component';

@Component({
  selector: 'jhi-medical-prescription-drug',
  templateUrl: './medical-prescription-drug.component.html'
})
export class MedicalPrescriptionDrugComponent implements OnInit, OnDestroy {
  medicalPrescriptionDrugs: IMedicalPrescriptionDrug[];
  eventSubscriber: Subscription;

  constructor(
    protected medicalPrescriptionDrugService: MedicalPrescriptionDrugService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.medicalPrescriptionDrugService.query().subscribe((res: HttpResponse<IMedicalPrescriptionDrug[]>) => {
      this.medicalPrescriptionDrugs = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInMedicalPrescriptionDrugs();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IMedicalPrescriptionDrug) {
    return item.id;
  }

  registerChangeInMedicalPrescriptionDrugs() {
    this.eventSubscriber = this.eventManager.subscribe('medicalPrescriptionDrugListModification', () => this.loadAll());
  }

  delete(medicalPrescriptionDrug: IMedicalPrescriptionDrug) {
    const modalRef = this.modalService.open(MedicalPrescriptionDrugDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.medicalPrescriptionDrug = medicalPrescriptionDrug;
  }
}
