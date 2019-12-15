import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDrugDosageForm } from 'app/shared/model/drug-dosage-form.model';
import { DrugDosageFormService } from './drug-dosage-form.service';
import { DrugDosageFormDeleteDialogComponent } from './drug-dosage-form-delete-dialog.component';

@Component({
  selector: 'jhi-drug-dosage-form',
  templateUrl: './drug-dosage-form.component.html'
})
export class DrugDosageFormComponent implements OnInit, OnDestroy {
  drugDosageForms: IDrugDosageForm[];
  eventSubscriber: Subscription;

  constructor(
    protected drugDosageFormService: DrugDosageFormService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.drugDosageFormService.query().subscribe((res: HttpResponse<IDrugDosageForm[]>) => {
      this.drugDosageForms = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDrugDosageForms();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDrugDosageForm) {
    return item.id;
  }

  registerChangeInDrugDosageForms() {
    this.eventSubscriber = this.eventManager.subscribe('drugDosageFormListModification', () => this.loadAll());
  }

  delete(drugDosageForm: IDrugDosageForm) {
    const modalRef = this.modalService.open(DrugDosageFormDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.drugDosageForm = drugDosageForm;
  }
}
