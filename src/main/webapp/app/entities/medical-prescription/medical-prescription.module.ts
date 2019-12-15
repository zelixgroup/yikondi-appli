import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { MedicalPrescriptionComponent } from './medical-prescription.component';
import { MedicalPrescriptionDetailComponent } from './medical-prescription-detail.component';
import { MedicalPrescriptionUpdateComponent } from './medical-prescription-update.component';
import { MedicalPrescriptionDeleteDialogComponent } from './medical-prescription-delete-dialog.component';
import { medicalPrescriptionRoute } from './medical-prescription.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(medicalPrescriptionRoute)],
  declarations: [
    MedicalPrescriptionComponent,
    MedicalPrescriptionDetailComponent,
    MedicalPrescriptionUpdateComponent,
    MedicalPrescriptionDeleteDialogComponent
  ],
  entryComponents: [MedicalPrescriptionDeleteDialogComponent]
})
export class YikondiAppliMedicalPrescriptionModule {}
