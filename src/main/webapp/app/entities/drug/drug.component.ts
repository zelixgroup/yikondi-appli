import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDrug } from 'app/shared/model/drug.model';
import { DrugService } from './drug.service';
import { DrugDeleteDialogComponent } from './drug-delete-dialog.component';

@Component({
  selector: 'jhi-drug',
  templateUrl: './drug.component.html'
})
export class DrugComponent implements OnInit, OnDestroy {
  drugs: IDrug[];
  eventSubscriber: Subscription;

  constructor(protected drugService: DrugService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.drugService.query().subscribe((res: HttpResponse<IDrug[]>) => {
      this.drugs = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDrugs();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDrug) {
    return item.id;
  }

  registerChangeInDrugs() {
    this.eventSubscriber = this.eventManager.subscribe('drugListModification', () => this.loadAll());
  }

  delete(drug: IDrug) {
    const modalRef = this.modalService.open(DrugDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.drug = drug;
  }
}
