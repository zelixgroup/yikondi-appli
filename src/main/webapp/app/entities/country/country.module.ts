import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppliSharedModule } from 'app/shared/shared.module';
import { CountryComponent } from './country.component';
import { CountryDetailComponent } from './country-detail.component';
import { CountryUpdateComponent } from './country-update.component';
import { CountryDeleteDialogComponent } from './country-delete-dialog.component';
import { countryRoute } from './country.route';

@NgModule({
  imports: [YikondiAppliSharedModule, RouterModule.forChild(countryRoute)],
  declarations: [CountryComponent, CountryDetailComponent, CountryUpdateComponent, CountryDeleteDialogComponent],
  entryComponents: [CountryDeleteDialogComponent]
})
export class YikondiAppliCountryModule {}
