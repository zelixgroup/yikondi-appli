import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { DrugDosageFormComponent } from './drug-dosage-form.component';
import { DrugDosageFormDetailComponent } from './drug-dosage-form-detail.component';
import { DrugDosageFormUpdateComponent } from './drug-dosage-form-update.component';
import { DrugDosageFormDeleteDialogComponent } from './drug-dosage-form-delete-dialog.component';
import { drugDosageFormRoute } from './drug-dosage-form.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(drugDosageFormRoute)],
  declarations: [
    DrugDosageFormComponent,
    DrugDosageFormDetailComponent,
    DrugDosageFormUpdateComponent,
    DrugDosageFormDeleteDialogComponent
  ],
  entryComponents: [DrugDosageFormDeleteDialogComponent]
})
export class YikondiAppliDrugDosageFormModule {}
