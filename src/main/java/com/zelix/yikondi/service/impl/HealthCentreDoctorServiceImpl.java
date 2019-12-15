package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.HealthCentreDoctorService;
import com.zelix.yikondi.domain.HealthCentreDoctor;
import com.zelix.yikondi.repository.HealthCentreDoctorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link HealthCentreDoctor}.
 */
@Service
@Transactional
public class HealthCentreDoctorServiceImpl implements HealthCentreDoctorService {

    private final Logger log = LoggerFactory.getLogger(HealthCentreDoctorServiceImpl.class);

    private final HealthCentreDoctorRepository healthCentreDoctorRepository;

    public HealthCentreDoctorServiceImpl(HealthCentreDoctorRepository healthCentreDoctorRepository) {
        this.healthCentreDoctorRepository = healthCentreDoctorRepository;
    }

    /**
     * Save a healthCentreDoctor.
     *
     * @param healthCentreDoctor the entity to save.
     * @return the persisted entity.
     */
    @Override
    public HealthCentreDoctor save(HealthCentreDoctor healthCentreDoctor) {
        log.debug("Request to save HealthCentreDoctor : {}", healthCentreDoctor);
        return healthCentreDoctorRepository.save(healthCentreDoctor);
    }

    /**
     * Get all the healthCentreDoctors.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<HealthCentreDoctor> findAll() {
        log.debug("Request to get all HealthCentreDoctors");
        return healthCentreDoctorRepository.findAll();
    }


    /**
     * Get one healthCentreDoctor by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<HealthCentreDoctor> findOne(Long id) {
        log.debug("Request to get HealthCentreDoctor : {}", id);
        return healthCentreDoctorRepository.findById(id);
    }

    /**
     * Delete the healthCentreDoctor by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete HealthCentreDoctor : {}", id);
        healthCentreDoctorRepository.deleteById(id);
    }
}
