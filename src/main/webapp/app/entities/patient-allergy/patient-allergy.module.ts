import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { PatientAllergyComponent } from './patient-allergy.component';
import { PatientAllergyDetailComponent } from './patient-allergy-detail.component';
import { PatientAllergyUpdateComponent } from './patient-allergy-update.component';
import { PatientAllergyDeleteDialogComponent } from './patient-allergy-delete-dialog.component';
import { patientAllergyRoute } from './patient-allergy.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(patientAllergyRoute)],
  declarations: [
    PatientAllergyComponent,
    PatientAllergyDetailComponent,
    PatientAllergyUpdateComponent,
    PatientAllergyDeleteDialogComponent
  ],
  entryComponents: [PatientAllergyDeleteDialogComponent]
})
export class YikondiAppliPatientAllergyModule {}
