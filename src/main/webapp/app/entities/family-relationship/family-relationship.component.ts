import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFamilyRelationship } from 'app/shared/model/family-relationship.model';
import { FamilyRelationshipService } from './family-relationship.service';
import { FamilyRelationshipDeleteDialogComponent } from './family-relationship-delete-dialog.component';

@Component({
  selector: 'jhi-family-relationship',
  templateUrl: './family-relationship.component.html'
})
export class FamilyRelationshipComponent implements OnInit, OnDestroy {
  familyRelationships: IFamilyRelationship[];
  eventSubscriber: Subscription;

  constructor(
    protected familyRelationshipService: FamilyRelationshipService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.familyRelationshipService.query().subscribe((res: HttpResponse<IFamilyRelationship[]>) => {
      this.familyRelationships = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInFamilyRelationships();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IFamilyRelationship) {
    return item.id;
  }

  registerChangeInFamilyRelationships() {
    this.eventSubscriber = this.eventManager.subscribe('familyRelationshipListModification', () => this.loadAll());
  }

  delete(familyRelationship: IFamilyRelationship) {
    const modalRef = this.modalService.open(FamilyRelationshipDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.familyRelationship = familyRelationship;
  }
}
