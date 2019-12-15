import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { SpecialityComponent } from './speciality.component';
import { SpecialityDetailComponent } from './speciality-detail.component';
import { SpecialityUpdateComponent } from './speciality-update.component';
import { SpecialityDeleteDialogComponent } from './speciality-delete-dialog.component';
import { specialityRoute } from './speciality.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(specialityRoute)],
  declarations: [SpecialityComponent, SpecialityDetailComponent, SpecialityUpdateComponent, SpecialityDeleteDialogComponent],
  entryComponents: [SpecialityDeleteDialogComponent]
})
export class YikondiAppliSpecialityModule {}
