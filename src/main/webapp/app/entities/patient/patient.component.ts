import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPatient } from 'app/shared/model/patient.model';
import { PatientService } from './patient.service';
import { PatientDeleteDialogComponent } from './patient-delete-dialog.component';

@Component({
  selector: 'jhi-patient',
  templateUrl: './patient.component.html'
})
export class PatientComponent implements OnInit, OnDestroy {
  patients: IPatient[];
  eventSubscriber: Subscription;

  constructor(
    protected patientService: PatientService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.patientService.query().subscribe((res: HttpResponse<IPatient[]>) => {
      this.patients = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPatients();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPatient) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  registerChangeInPatients() {
    this.eventSubscriber = this.eventManager.subscribe('patientListModification', () => this.loadAll());
  }

  delete(patient: IPatient) {
    const modalRef = this.modalService.open(PatientDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.patient = patient;
  }
}
