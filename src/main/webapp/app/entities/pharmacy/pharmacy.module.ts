import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacyDetailComponent } from './pharmacy-detail.component';
import { PharmacyUpdateComponent } from './pharmacy-update.component';
import { PharmacyDeleteDialogComponent } from './pharmacy-delete-dialog.component';
import { pharmacyRoute } from './pharmacy.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(pharmacyRoute)],
  declarations: [PharmacyComponent, PharmacyDetailComponent, PharmacyUpdateComponent, PharmacyDeleteDialogComponent],
  entryComponents: [PharmacyDeleteDialogComponent]
})
export class YikondiAppliPharmacyModule {}
