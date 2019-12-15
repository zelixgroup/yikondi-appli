import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFamilyMember } from 'app/shared/model/family-member.model';
import { FamilyMemberService } from './family-member.service';
import { FamilyMemberDeleteDialogComponent } from './family-member-delete-dialog.component';

@Component({
  selector: 'jhi-family-member',
  templateUrl: './family-member.component.html'
})
export class FamilyMemberComponent implements OnInit, OnDestroy {
  familyMembers: IFamilyMember[];
  eventSubscriber: Subscription;

  constructor(
    protected familyMemberService: FamilyMemberService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.familyMemberService.query().subscribe((res: HttpResponse<IFamilyMember[]>) => {
      this.familyMembers = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInFamilyMembers();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IFamilyMember) {
    return item.id;
  }

  registerChangeInFamilyMembers() {
    this.eventSubscriber = this.eventManager.subscribe('familyMemberListModification', () => this.loadAll());
  }

  delete(familyMember: IFamilyMember) {
    const modalRef = this.modalService.open(FamilyMemberDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.familyMember = familyMember;
  }
}
