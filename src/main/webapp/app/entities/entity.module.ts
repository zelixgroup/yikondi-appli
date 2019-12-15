import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'holiday',
        loadChildren: () => import('./holiday/holiday.module').then(m => m.YikondiAppliHolidayModule)
      },
      {
        path: 'emergency-ambulance',
        loadChildren: () => import('./emergency-ambulance/emergency-ambulance.module').then(m => m.YikondiAppliEmergencyAmbulanceModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.YikondiAppliCountryModule)
      },
      {
        path: 'city',
        loadChildren: () => import('./city/city.module').then(m => m.YikondiAppliCityModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.YikondiAppliAddressModule)
      },
      {
        path: 'health-centre-category',
        loadChildren: () =>
          import('./health-centre-category/health-centre-category.module').then(m => m.YikondiAppliHealthCentreCategoryModule)
      },
      {
        path: 'health-centre',
        loadChildren: () => import('./health-centre/health-centre.module').then(m => m.YikondiAppliHealthCentreModule)
      },
      {
        path: 'pharmacy',
        loadChildren: () => import('./pharmacy/pharmacy.module').then(m => m.YikondiAppliPharmacyModule)
      },
      {
        path: 'pharmacy-all-night-planning',
        loadChildren: () =>
          import('./pharmacy-all-night-planning/pharmacy-all-night-planning.module').then(m => m.YikondiAppliPharmacyAllNightPlanningModule)
      },
      {
        path: 'speciality',
        loadChildren: () => import('./speciality/speciality.module').then(m => m.YikondiAppliSpecialityModule)
      },
      {
        path: 'doctor',
        loadChildren: () => import('./doctor/doctor.module').then(m => m.YikondiAppliDoctorModule)
      },
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.YikondiAppliPatientModule)
      },
      {
        path: 'health-centre-doctor',
        loadChildren: () => import('./health-centre-doctor/health-centre-doctor.module').then(m => m.YikondiAppliHealthCentreDoctorModule)
      },
      {
        path: 'doctor-schedule',
        loadChildren: () => import('./doctor-schedule/doctor-schedule.module').then(m => m.YikondiAppliDoctorScheduleModule)
      },
      {
        path: 'doctor-working-slot',
        loadChildren: () => import('./doctor-working-slot/doctor-working-slot.module').then(m => m.YikondiAppliDoctorWorkingSlotModule)
      },
      {
        path: 'patient-appointement',
        loadChildren: () => import('./patient-appointement/patient-appointement.module').then(m => m.YikondiAppliPatientAppointementModule)
      },
      {
        path: 'patient-favorite-pharmacy',
        loadChildren: () =>
          import('./patient-favorite-pharmacy/patient-favorite-pharmacy.module').then(m => m.YikondiAppliPatientFavoritePharmacyModule)
      },
      {
        path: 'patient-favorite-doctor',
        loadChildren: () =>
          import('./patient-favorite-doctor/patient-favorite-doctor.module').then(m => m.YikondiAppliPatientFavoriteDoctorModule)
      },
      {
        path: 'life-constant-unit',
        loadChildren: () => import('./life-constant-unit/life-constant-unit.module').then(m => m.YikondiAppliLifeConstantUnitModule)
      },
      {
        path: 'life-constant',
        loadChildren: () => import('./life-constant/life-constant.module').then(m => m.YikondiAppliLifeConstantModule)
      },
      {
        path: 'patient-life-constant',
        loadChildren: () =>
          import('./patient-life-constant/patient-life-constant.module').then(m => m.YikondiAppliPatientLifeConstantModule)
      },
      {
        path: 'insurance-type',
        loadChildren: () => import('./insurance-type/insurance-type.module').then(m => m.YikondiAppliInsuranceTypeModule)
      },
      {
        path: 'insurance',
        loadChildren: () => import('./insurance/insurance.module').then(m => m.YikondiAppliInsuranceModule)
      },
      {
        path: 'patient-insurance-coverage',
        loadChildren: () =>
          import('./patient-insurance-coverage/patient-insurance-coverage.module').then(m => m.YikondiAppliPatientInsuranceCoverageModule)
      },
      {
        path: 'allergy',
        loadChildren: () => import('./allergy/allergy.module').then(m => m.YikondiAppliAllergyModule)
      },
      {
        path: 'patient-allergy',
        loadChildren: () => import('./patient-allergy/patient-allergy.module').then(m => m.YikondiAppliPatientAllergyModule)
      },
      {
        path: 'pathology',
        loadChildren: () => import('./pathology/pathology.module').then(m => m.YikondiAppliPathologyModule)
      },
      {
        path: 'patient-pathology',
        loadChildren: () => import('./patient-pathology/patient-pathology.module').then(m => m.YikondiAppliPatientPathologyModule)
      },
      {
        path: 'patient-emergency-number',
        loadChildren: () =>
          import('./patient-emergency-number/patient-emergency-number.module').then(m => m.YikondiAppliPatientEmergencyNumberModule)
      },
      {
        path: 'medical-record-authorization',
        loadChildren: () =>
          import('./medical-record-authorization/medical-record-authorization.module').then(
            m => m.YikondiAppliMedicalRecordAuthorizationModule
          )
      },
      {
        path: 'drug-administration-route',
        loadChildren: () =>
          import('./drug-administration-route/drug-administration-route.module').then(m => m.YikondiAppliDrugAdministrationRouteModule)
      },
      {
        path: 'drug-dosage-form',
        loadChildren: () => import('./drug-dosage-form/drug-dosage-form.module').then(m => m.YikondiAppliDrugDosageFormModule)
      },
      {
        path: 'drug',
        loadChildren: () => import('./drug/drug.module').then(m => m.YikondiAppliDrugModule)
      },
      {
        path: 'analysis',
        loadChildren: () => import('./analysis/analysis.module').then(m => m.YikondiAppliAnalysisModule)
      },
      {
        path: 'medical-prescription',
        loadChildren: () => import('./medical-prescription/medical-prescription.module').then(m => m.YikondiAppliMedicalPrescriptionModule)
      },
      {
        path: 'medical-prescription-drug',
        loadChildren: () =>
          import('./medical-prescription-drug/medical-prescription-drug.module').then(m => m.YikondiAppliMedicalPrescriptionDrugModule)
      },
      {
        path: 'medical-prescription-analysis',
        loadChildren: () =>
          import('./medical-prescription-analysis/medical-prescription-analysis.module').then(
            m => m.YikondiAppliMedicalPrescriptionAnalysisModule
          )
      },
      {
        path: 'doctor-assistant',
        loadChildren: () => import('./doctor-assistant/doctor-assistant.module').then(m => m.YikondiAppliDoctorAssistantModule)
      },
      {
        path: 'family-relationship',
        loadChildren: () => import('./family-relationship/family-relationship.module').then(m => m.YikondiAppliFamilyRelationshipModule)
      },
      {
        path: 'family-member',
        loadChildren: () => import('./family-member/family-member.module').then(m => m.YikondiAppliFamilyMemberModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class YikondiAppliEntityModule {}
