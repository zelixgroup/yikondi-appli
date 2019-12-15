import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { EmergencyAmbulanceComponent } from './emergency-ambulance.component';
import { EmergencyAmbulanceDetailComponent } from './emergency-ambulance-detail.component';
import { EmergencyAmbulanceUpdateComponent } from './emergency-ambulance-update.component';
import { EmergencyAmbulanceDeleteDialogComponent } from './emergency-ambulance-delete-dialog.component';
import { emergencyAmbulanceRoute } from './emergency-ambulance.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(emergencyAmbulanceRoute)],
  declarations: [
    EmergencyAmbulanceComponent,
    EmergencyAmbulanceDetailComponent,
    EmergencyAmbulanceUpdateComponent,
    EmergencyAmbulanceDeleteDialogComponent
  ],
  entryComponents: [EmergencyAmbulanceDeleteDialogComponent]
})
export class YikondiAppliEmergencyAmbulanceModule {}
