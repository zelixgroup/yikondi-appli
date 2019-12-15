import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDoctorWorkingSlot } from 'app/shared/model/doctor-working-slot.model';
import { DoctorWorkingSlotService } from './doctor-working-slot.service';
import { DoctorWorkingSlotDeleteDialogComponent } from './doctor-working-slot-delete-dialog.component';

@Component({
  selector: 'jhi-doctor-working-slot',
  templateUrl: './doctor-working-slot.component.html'
})
export class DoctorWorkingSlotComponent implements OnInit, OnDestroy {
  doctorWorkingSlots: IDoctorWorkingSlot[];
  eventSubscriber: Subscription;

  constructor(
    protected doctorWorkingSlotService: DoctorWorkingSlotService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.doctorWorkingSlotService.query().subscribe((res: HttpResponse<IDoctorWorkingSlot[]>) => {
      this.doctorWorkingSlots = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDoctorWorkingSlots();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDoctorWorkingSlot) {
    return item.id;
  }

  registerChangeInDoctorWorkingSlots() {
    this.eventSubscriber = this.eventManager.subscribe('doctorWorkingSlotListModification', () => this.loadAll());
  }

  delete(doctorWorkingSlot: IDoctorWorkingSlot) {
    const modalRef = this.modalService.open(DoctorWorkingSlotDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.doctorWorkingSlot = doctorWorkingSlot;
  }
}
