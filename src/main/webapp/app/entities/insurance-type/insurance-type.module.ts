import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { InsuranceTypeComponent } from './insurance-type.component';
import { InsuranceTypeDetailComponent } from './insurance-type-detail.component';
import { InsuranceTypeUpdateComponent } from './insurance-type-update.component';
import { InsuranceTypeDeleteDialogComponent } from './insurance-type-delete-dialog.component';
import { insuranceTypeRoute } from './insurance-type.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(insuranceTypeRoute)],
  declarations: [InsuranceTypeComponent, InsuranceTypeDetailComponent, InsuranceTypeUpdateComponent, InsuranceTypeDeleteDialogComponent],
  entryComponents: [InsuranceTypeDeleteDialogComponent]
})
export class YikondiAppliInsuranceTypeModule {}
