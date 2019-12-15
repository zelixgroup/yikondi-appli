import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { PatientAppointementComponent } from './patient-appointement.component';
import { PatientAppointementDetailComponent } from './patient-appointement-detail.component';
import { PatientAppointementUpdateComponent } from './patient-appointement-update.component';
import { PatientAppointementDeleteDialogComponent } from './patient-appointement-delete-dialog.component';
import { patientAppointementRoute } from './patient-appointement.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(patientAppointementRoute)],
  declarations: [
    PatientAppointementComponent,
    PatientAppointementDetailComponent,
    PatientAppointementUpdateComponent,
    PatientAppointementDeleteDialogComponent
  ],
  entryComponents: [PatientAppointementDeleteDialogComponent]
})
export class YikondiAppliPatientAppointementModule {}
