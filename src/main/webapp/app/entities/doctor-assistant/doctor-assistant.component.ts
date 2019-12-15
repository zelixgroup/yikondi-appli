import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDoctorAssistant } from 'app/shared/model/doctor-assistant.model';
import { DoctorAssistantService } from './doctor-assistant.service';
import { DoctorAssistantDeleteDialogComponent } from './doctor-assistant-delete-dialog.component';

@Component({
  selector: 'jhi-doctor-assistant',
  templateUrl: './doctor-assistant.component.html'
})
export class DoctorAssistantComponent implements OnInit, OnDestroy {
  doctorAssistants: IDoctorAssistant[];
  eventSubscriber: Subscription;

  constructor(
    protected doctorAssistantService: DoctorAssistantService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.doctorAssistantService.query().subscribe((res: HttpResponse<IDoctorAssistant[]>) => {
      this.doctorAssistants = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDoctorAssistants();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDoctorAssistant) {
    return item.id;
  }

  registerChangeInDoctorAssistants() {
    this.eventSubscriber = this.eventManager.subscribe('doctorAssistantListModification', () => this.loadAll());
  }

  delete(doctorAssistant: IDoctorAssistant) {
    const modalRef = this.modalService.open(DoctorAssistantDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.doctorAssistant = doctorAssistant;
  }
}
