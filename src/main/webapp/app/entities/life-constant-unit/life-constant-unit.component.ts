import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ILifeConstantUnit } from 'app/shared/model/life-constant-unit.model';
import { LifeConstantUnitService } from './life-constant-unit.service';
import { LifeConstantUnitDeleteDialogComponent } from './life-constant-unit-delete-dialog.component';

@Component({
  selector: 'jhi-life-constant-unit',
  templateUrl: './life-constant-unit.component.html'
})
export class LifeConstantUnitComponent implements OnInit, OnDestroy {
  lifeConstantUnits: ILifeConstantUnit[];
  eventSubscriber: Subscription;

  constructor(
    protected lifeConstantUnitService: LifeConstantUnitService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.lifeConstantUnitService.query().subscribe((res: HttpResponse<ILifeConstantUnit[]>) => {
      this.lifeConstantUnits = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInLifeConstantUnits();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ILifeConstantUnit) {
    return item.id;
  }

  registerChangeInLifeConstantUnits() {
    this.eventSubscriber = this.eventManager.subscribe('lifeConstantUnitListModification', () => this.loadAll());
  }

  delete(lifeConstantUnit: ILifeConstantUnit) {
    const modalRef = this.modalService.open(LifeConstantUnitDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.lifeConstantUnit = lifeConstantUnit;
  }
}
