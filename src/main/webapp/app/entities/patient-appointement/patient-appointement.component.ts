import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPatientAppointement } from 'app/shared/model/patient-appointement.model';
import { PatientAppointementService } from './patient-appointement.service';
import { PatientAppointementDeleteDialogComponent } from './patient-appointement-delete-dialog.component';

@Component({
  selector: 'jhi-patient-appointement',
  templateUrl: './patient-appointement.component.html'
})
export class PatientAppointementComponent implements OnInit, OnDestroy {
  patientAppointements: IPatientAppointement[];
  eventSubscriber: Subscription;

  constructor(
    protected patientAppointementService: PatientAppointementService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.patientAppointementService.query().subscribe((res: HttpResponse<IPatientAppointement[]>) => {
      this.patientAppointements = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPatientAppointements();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPatientAppointement) {
    return item.id;
  }

  registerChangeInPatientAppointements() {
    this.eventSubscriber = this.eventManager.subscribe('patientAppointementListModification', () => this.loadAll());
  }

  delete(patientAppointement: IPatientAppointement) {
    const modalRef = this.modalService.open(PatientAppointementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.patientAppointement = patientAppointement;
  }
}
