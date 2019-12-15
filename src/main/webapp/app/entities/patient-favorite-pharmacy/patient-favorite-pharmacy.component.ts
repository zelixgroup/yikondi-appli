import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPatientFavoritePharmacy } from 'app/shared/model/patient-favorite-pharmacy.model';
import { PatientFavoritePharmacyService } from './patient-favorite-pharmacy.service';
import { PatientFavoritePharmacyDeleteDialogComponent } from './patient-favorite-pharmacy-delete-dialog.component';

@Component({
  selector: 'jhi-patient-favorite-pharmacy',
  templateUrl: './patient-favorite-pharmacy.component.html'
})
export class PatientFavoritePharmacyComponent implements OnInit, OnDestroy {
  patientFavoritePharmacies: IPatientFavoritePharmacy[];
  eventSubscriber: Subscription;

  constructor(
    protected patientFavoritePharmacyService: PatientFavoritePharmacyService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.patientFavoritePharmacyService.query().subscribe((res: HttpResponse<IPatientFavoritePharmacy[]>) => {
      this.patientFavoritePharmacies = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPatientFavoritePharmacies();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPatientFavoritePharmacy) {
    return item.id;
  }

  registerChangeInPatientFavoritePharmacies() {
    this.eventSubscriber = this.eventManager.subscribe('patientFavoritePharmacyListModification', () => this.loadAll());
  }

  delete(patientFavoritePharmacy: IPatientFavoritePharmacy) {
    const modalRef = this.modalService.open(PatientFavoritePharmacyDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.patientFavoritePharmacy = patientFavoritePharmacy;
  }
}
