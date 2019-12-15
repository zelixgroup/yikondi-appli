import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IHealthCentreCategory } from 'app/shared/model/health-centre-category.model';
import { HealthCentreCategoryService } from './health-centre-category.service';
import { HealthCentreCategoryDeleteDialogComponent } from './health-centre-category-delete-dialog.component';

@Component({
  selector: 'jhi-health-centre-category',
  templateUrl: './health-centre-category.component.html'
})
export class HealthCentreCategoryComponent implements OnInit, OnDestroy {
  healthCentreCategories: IHealthCentreCategory[];
  eventSubscriber: Subscription;

  constructor(
    protected healthCentreCategoryService: HealthCentreCategoryService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.healthCentreCategoryService.query().subscribe((res: HttpResponse<IHealthCentreCategory[]>) => {
      this.healthCentreCategories = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInHealthCentreCategories();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IHealthCentreCategory) {
    return item.id;
  }

  registerChangeInHealthCentreCategories() {
    this.eventSubscriber = this.eventManager.subscribe('healthCentreCategoryListModification', () => this.loadAll());
  }

  delete(healthCentreCategory: IHealthCentreCategory) {
    const modalRef = this.modalService.open(HealthCentreCategoryDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.healthCentreCategory = healthCentreCategory;
  }
}
