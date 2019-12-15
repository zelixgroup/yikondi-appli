import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IEmergencyAmbulance } from 'app/shared/model/emergency-ambulance.model';
import { EmergencyAmbulanceService } from './emergency-ambulance.service';
import { EmergencyAmbulanceDeleteDialogComponent } from './emergency-ambulance-delete-dialog.component';

@Component({
  selector: 'jhi-emergency-ambulance',
  templateUrl: './emergency-ambulance.component.html'
})
export class EmergencyAmbulanceComponent implements OnInit, OnDestroy {
  emergencyAmbulances: IEmergencyAmbulance[];
  eventSubscriber: Subscription;

  constructor(
    protected emergencyAmbulanceService: EmergencyAmbulanceService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.emergencyAmbulanceService.query().subscribe((res: HttpResponse<IEmergencyAmbulance[]>) => {
      this.emergencyAmbulances = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInEmergencyAmbulances();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IEmergencyAmbulance) {
    return item.id;
  }

  registerChangeInEmergencyAmbulances() {
    this.eventSubscriber = this.eventManager.subscribe('emergencyAmbulanceListModification', () => this.loadAll());
  }

  delete(emergencyAmbulance: IEmergencyAmbulance) {
    const modalRef = this.modalService.open(EmergencyAmbulanceDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.emergencyAmbulance = emergencyAmbulance;
  }
}
