import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ILifeConstant } from 'app/shared/model/life-constant.model';
import { LifeConstantService } from './life-constant.service';
import { LifeConstantDeleteDialogComponent } from './life-constant-delete-dialog.component';

@Component({
  selector: 'jhi-life-constant',
  templateUrl: './life-constant.component.html'
})
export class LifeConstantComponent implements OnInit, OnDestroy {
  lifeConstants: ILifeConstant[];
  eventSubscriber: Subscription;

  constructor(
    protected lifeConstantService: LifeConstantService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.lifeConstantService.query().subscribe((res: HttpResponse<ILifeConstant[]>) => {
      this.lifeConstants = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInLifeConstants();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ILifeConstant) {
    return item.id;
  }

  registerChangeInLifeConstants() {
    this.eventSubscriber = this.eventManager.subscribe('lifeConstantListModification', () => this.loadAll());
  }

  delete(lifeConstant: ILifeConstant) {
    const modalRef = this.modalService.open(LifeConstantDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.lifeConstant = lifeConstant;
  }
}
