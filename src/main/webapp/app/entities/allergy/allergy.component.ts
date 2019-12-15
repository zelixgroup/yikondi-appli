import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IAllergy } from 'app/shared/model/allergy.model';
import { AllergyService } from './allergy.service';
import { AllergyDeleteDialogComponent } from './allergy-delete-dialog.component';

@Component({
  selector: 'jhi-allergy',
  templateUrl: './allergy.component.html'
})
export class AllergyComponent implements OnInit, OnDestroy {
  allergies: IAllergy[];
  eventSubscriber: Subscription;

  constructor(protected allergyService: AllergyService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.allergyService.query().subscribe((res: HttpResponse<IAllergy[]>) => {
      this.allergies = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInAllergies();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IAllergy) {
    return item.id;
  }

  registerChangeInAllergies() {
    this.eventSubscriber = this.eventManager.subscribe('allergyListModification', () => this.loadAll());
  }

  delete(allergy: IAllergy) {
    const modalRef = this.modalService.open(AllergyDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.allergy = allergy;
  }
}
