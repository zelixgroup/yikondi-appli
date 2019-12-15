import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDoctor } from 'app/shared/model/doctor.model';
import { DoctorService } from './doctor.service';
import { DoctorDeleteDialogComponent } from './doctor-delete-dialog.component';

@Component({
  selector: 'jhi-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorComponent implements OnInit, OnDestroy {
  doctors: IDoctor[];
  eventSubscriber: Subscription;

  constructor(protected doctorService: DoctorService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.doctorService.query().subscribe((res: HttpResponse<IDoctor[]>) => {
      this.doctors = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDoctors();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDoctor) {
    return item.id;
  }

  registerChangeInDoctors() {
    this.eventSubscriber = this.eventManager.subscribe('doctorListModification', () => this.loadAll());
  }

  delete(doctor: IDoctor) {
    const modalRef = this.modalService.open(DoctorDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.doctor = doctor;
  }
}
