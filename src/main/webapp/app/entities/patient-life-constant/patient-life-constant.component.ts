import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPatientLifeConstant } from 'app/shared/model/patient-life-constant.model';
import { PatientLifeConstantService } from './patient-life-constant.service';
import { PatientLifeConstantDeleteDialogComponent } from './patient-life-constant-delete-dialog.component';

@Component({
  selector: 'jhi-patient-life-constant',
  templateUrl: './patient-life-constant.component.html'
})
export class PatientLifeConstantComponent implements OnInit, OnDestroy {
  patientLifeConstants: IPatientLifeConstant[];
  eventSubscriber: Subscription;

  constructor(
    protected patientLifeConstantService: PatientLifeConstantService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.patientLifeConstantService.query().subscribe((res: HttpResponse<IPatientLifeConstant[]>) => {
      this.patientLifeConstants = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPatientLifeConstants();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPatientLifeConstant) {
    return item.id;
  }

  registerChangeInPatientLifeConstants() {
    this.eventSubscriber = this.eventManager.subscribe('patientLifeConstantListModification', () => this.loadAll());
  }

  delete(patientLifeConstant: IPatientLifeConstant) {
    const modalRef = this.modalService.open(PatientLifeConstantDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.patientLifeConstant = patientLifeConstant;
  }
}
