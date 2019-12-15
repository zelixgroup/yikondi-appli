import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IMedicalPrescriptionAnalysis } from 'app/shared/model/medical-prescription-analysis.model';
import { MedicalPrescriptionAnalysisService } from './medical-prescription-analysis.service';
import { MedicalPrescriptionAnalysisDeleteDialogComponent } from './medical-prescription-analysis-delete-dialog.component';

@Component({
  selector: 'jhi-medical-prescription-analysis',
  templateUrl: './medical-prescription-analysis.component.html'
})
export class MedicalPrescriptionAnalysisComponent implements OnInit, OnDestroy {
  medicalPrescriptionAnalyses: IMedicalPrescriptionAnalysis[];
  eventSubscriber: Subscription;

  constructor(
    protected medicalPrescriptionAnalysisService: MedicalPrescriptionAnalysisService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.medicalPrescriptionAnalysisService.query().subscribe((res: HttpResponse<IMedicalPrescriptionAnalysis[]>) => {
      this.medicalPrescriptionAnalyses = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInMedicalPrescriptionAnalyses();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IMedicalPrescriptionAnalysis) {
    return item.id;
  }

  registerChangeInMedicalPrescriptionAnalyses() {
    this.eventSubscriber = this.eventManager.subscribe('medicalPrescriptionAnalysisListModification', () => this.loadAll());
  }

  delete(medicalPrescriptionAnalysis: IMedicalPrescriptionAnalysis) {
    const modalRef = this.modalService.open(MedicalPrescriptionAnalysisDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.medicalPrescriptionAnalysis = medicalPrescriptionAnalysis;
  }
}
