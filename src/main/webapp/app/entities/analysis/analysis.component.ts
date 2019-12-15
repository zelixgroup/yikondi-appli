import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IAnalysis } from 'app/shared/model/analysis.model';
import { AnalysisService } from './analysis.service';
import { AnalysisDeleteDialogComponent } from './analysis-delete-dialog.component';

@Component({
  selector: 'jhi-analysis',
  templateUrl: './analysis.component.html'
})
export class AnalysisComponent implements OnInit, OnDestroy {
  analyses: IAnalysis[];
  eventSubscriber: Subscription;

  constructor(protected analysisService: AnalysisService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.analysisService.query().subscribe((res: HttpResponse<IAnalysis[]>) => {
      this.analyses = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInAnalyses();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IAnalysis) {
    return item.id;
  }

  registerChangeInAnalyses() {
    this.eventSubscriber = this.eventManager.subscribe('analysisListModification', () => this.loadAll());
  }

  delete(analysis: IAnalysis) {
    const modalRef = this.modalService.open(AnalysisDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.analysis = analysis;
  }
}
