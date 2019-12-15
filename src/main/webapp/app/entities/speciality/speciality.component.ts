import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ISpeciality } from 'app/shared/model/speciality.model';
import { SpecialityService } from './speciality.service';
import { SpecialityDeleteDialogComponent } from './speciality-delete-dialog.component';

@Component({
  selector: 'jhi-speciality',
  templateUrl: './speciality.component.html'
})
export class SpecialityComponent implements OnInit, OnDestroy {
  specialities: ISpeciality[];
  eventSubscriber: Subscription;

  constructor(protected specialityService: SpecialityService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.specialityService.query().subscribe((res: HttpResponse<ISpeciality[]>) => {
      this.specialities = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInSpecialities();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ISpeciality) {
    return item.id;
  }

  registerChangeInSpecialities() {
    this.eventSubscriber = this.eventManager.subscribe('specialityListModification', () => this.loadAll());
  }

  delete(speciality: ISpeciality) {
    const modalRef = this.modalService.open(SpecialityDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.speciality = speciality;
  }
}
