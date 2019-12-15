import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDoctorSchedule } from 'app/shared/model/doctor-schedule.model';
import { DoctorScheduleService } from './doctor-schedule.service';
import { DoctorScheduleDeleteDialogComponent } from './doctor-schedule-delete-dialog.component';

@Component({
  selector: 'jhi-doctor-schedule',
  templateUrl: './doctor-schedule.component.html'
})
export class DoctorScheduleComponent implements OnInit, OnDestroy {
  doctorSchedules: IDoctorSchedule[];
  eventSubscriber: Subscription;

  constructor(
    protected doctorScheduleService: DoctorScheduleService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.doctorScheduleService.query().subscribe((res: HttpResponse<IDoctorSchedule[]>) => {
      this.doctorSchedules = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDoctorSchedules();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDoctorSchedule) {
    return item.id;
  }

  registerChangeInDoctorSchedules() {
    this.eventSubscriber = this.eventManager.subscribe('doctorScheduleListModification', () => this.loadAll());
  }

  delete(doctorSchedule: IDoctorSchedule) {
    const modalRef = this.modalService.open(DoctorScheduleDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.doctorSchedule = doctorSchedule;
  }
}
