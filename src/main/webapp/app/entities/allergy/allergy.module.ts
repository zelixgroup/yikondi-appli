import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { AllergyComponent } from './allergy.component';
import { AllergyDetailComponent } from './allergy-detail.component';
import { AllergyUpdateComponent } from './allergy-update.component';
import { AllergyDeleteDialogComponent } from './allergy-delete-dialog.component';
import { allergyRoute } from './allergy.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(allergyRoute)],
  declarations: [AllergyComponent, AllergyDetailComponent, AllergyUpdateComponent, AllergyDeleteDialogComponent],
  entryComponents: [AllergyDeleteDialogComponent]
})
export class YikondiAppliAllergyModule {}
