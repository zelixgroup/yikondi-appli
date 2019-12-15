package com.zelix.yikondi.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import org.hibernate.cache.jcache.ConfigSettings;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.zelix.yikondi.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.zelix.yikondi.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.zelix.yikondi.domain.User.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Authority.class.getName());
            createCache(cm, com.zelix.yikondi.domain.User.class.getName() + ".authorities");
            createCache(cm, com.zelix.yikondi.domain.Holiday.class.getName());
            createCache(cm, com.zelix.yikondi.domain.EmergencyAmbulance.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Country.class.getName());
            createCache(cm, com.zelix.yikondi.domain.City.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Address.class.getName());
            createCache(cm, com.zelix.yikondi.domain.HealthCentreCategory.class.getName());
            createCache(cm, com.zelix.yikondi.domain.HealthCentre.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Pharmacy.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PharmacyAllNightPlanning.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Speciality.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Doctor.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Patient.class.getName());
            createCache(cm, com.zelix.yikondi.domain.HealthCentreDoctor.class.getName());
            createCache(cm, com.zelix.yikondi.domain.DoctorSchedule.class.getName());
            createCache(cm, com.zelix.yikondi.domain.DoctorWorkingSlot.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientAppointement.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientFavoritePharmacy.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientFavoriteDoctor.class.getName());
            createCache(cm, com.zelix.yikondi.domain.LifeConstantUnit.class.getName());
            createCache(cm, com.zelix.yikondi.domain.LifeConstant.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientLifeConstant.class.getName());
            createCache(cm, com.zelix.yikondi.domain.InsuranceType.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Insurance.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientInsuranceCoverage.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Allergy.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientAllergy.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Pathology.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientPathology.class.getName());
            createCache(cm, com.zelix.yikondi.domain.PatientEmergencyNumber.class.getName());
            createCache(cm, com.zelix.yikondi.domain.MedicalRecordAuthorization.class.getName());
            createCache(cm, com.zelix.yikondi.domain.DrugAdministrationRoute.class.getName());
            createCache(cm, com.zelix.yikondi.domain.DrugDosageForm.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Drug.class.getName());
            createCache(cm, com.zelix.yikondi.domain.Analysis.class.getName());
            createCache(cm, com.zelix.yikondi.domain.MedicalPrescription.class.getName());
            createCache(cm, com.zelix.yikondi.domain.MedicalPrescriptionDrug.class.getName());
            createCache(cm, com.zelix.yikondi.domain.MedicalPrescriptionAnalysis.class.getName());
            createCache(cm, com.zelix.yikondi.domain.DoctorAssistant.class.getName());
            createCache(cm, com.zelix.yikondi.domain.FamilyRelationship.class.getName());
            createCache(cm, com.zelix.yikondi.domain.FamilyMember.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cm.destroyCache(cacheName);
        }
        cm.createCache(cacheName, jcacheConfiguration);
    }

}
