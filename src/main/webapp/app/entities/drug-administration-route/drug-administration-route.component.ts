import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDrugAdministrationRoute } from 'app/shared/model/drug-administration-route.model';
import { DrugAdministrationRouteService } from './drug-administration-route.service';
import { DrugAdministrationRouteDeleteDialogComponent } from './drug-administration-route-delete-dialog.component';

@Component({
  selector: 'jhi-drug-administration-route',
  templateUrl: './drug-administration-route.component.html'
})
export class DrugAdministrationRouteComponent implements OnInit, OnDestroy {
  drugAdministrationRoutes: IDrugAdministrationRoute[];
  eventSubscriber: Subscription;

  constructor(
    protected drugAdministrationRouteService: DrugAdministrationRouteService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.drugAdministrationRouteService.query().subscribe((res: HttpResponse<IDrugAdministrationRoute[]>) => {
      this.drugAdministrationRoutes = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDrugAdministrationRoutes();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDrugAdministrationRoute) {
    return item.id;
  }

  registerChangeInDrugAdministrationRoutes() {
    this.eventSubscriber = this.eventManager.subscribe('drugAdministrationRouteListModification', () => this.loadAll());
  }

  delete(drugAdministrationRoute: IDrugAdministrationRoute) {
    const modalRef = this.modalService.open(DrugAdministrationRouteDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.drugAdministrationRoute = drugAdministrationRoute;
  }
}
