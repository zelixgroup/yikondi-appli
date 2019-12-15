import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { PatientPathologyComponent } from './patient-pathology.component';
import { PatientPathologyDetailComponent } from './patient-pathology-detail.component';
import { PatientPathologyUpdateComponent } from './patient-pathology-update.component';
import { PatientPathologyDeleteDialogComponent } from './patient-pathology-delete-dialog.component';
import { patientPathologyRoute } from './patient-pathology.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(patientPathologyRoute)],
  declarations: [
    PatientPathologyComponent,
    PatientPathologyDetailComponent,
    PatientPathologyUpdateComponent,
    PatientPathologyDeleteDialogComponent
  ],
  entryComponents: [PatientPathologyDeleteDialogComponent]
})
export class YikondiAppliPatientPathologyModule {}
