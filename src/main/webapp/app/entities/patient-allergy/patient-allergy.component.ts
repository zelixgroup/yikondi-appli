import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPatientAllergy } from 'app/shared/model/patient-allergy.model';
import { PatientAllergyService } from './patient-allergy.service';
import { PatientAllergyDeleteDialogComponent } from './patient-allergy-delete-dialog.component';

@Component({
  selector: 'jhi-patient-allergy',
  templateUrl: './patient-allergy.component.html'
})
export class PatientAllergyComponent implements OnInit, OnDestroy {
  patientAllergies: IPatientAllergy[];
  eventSubscriber: Subscription;

  constructor(
    protected patientAllergyService: PatientAllergyService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.patientAllergyService.query().subscribe((res: HttpResponse<IPatientAllergy[]>) => {
      this.patientAllergies = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPatientAllergies();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPatientAllergy) {
    return item.id;
  }

  registerChangeInPatientAllergies() {
    this.eventSubscriber = this.eventManager.subscribe('patientAllergyListModification', () => this.loadAll());
  }

  delete(patientAllergy: IPatientAllergy) {
    const modalRef = this.modalService.open(PatientAllergyDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.patientAllergy = patientAllergy;
  }
}
