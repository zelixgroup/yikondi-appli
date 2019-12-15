package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PatientLifeConstantService;
import com.zelix.yikondi.domain.PatientLifeConstant;
import com.zelix.yikondi.repository.PatientLifeConstantRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link PatientLifeConstant}.
 */
@Service
@Transactional
public class PatientLifeConstantServiceImpl implements PatientLifeConstantService {

    private final Logger log = LoggerFactory.getLogger(PatientLifeConstantServiceImpl.class);

    private final PatientLifeConstantRepository patientLifeConstantRepository;

    public PatientLifeConstantServiceImpl(PatientLifeConstantRepository patientLifeConstantRepository) {
        this.patientLifeConstantRepository = patientLifeConstantRepository;
    }

    /**
     * Save a patientLifeConstant.
     *
     * @param patientLifeConstant the entity to save.
     * @return the persisted entity.
     */
    @Override
    public PatientLifeConstant save(PatientLifeConstant patientLifeConstant) {
        log.debug("Request to save PatientLifeConstant : {}", patientLifeConstant);
        return patientLifeConstantRepository.save(patientLifeConstant);
    }

    /**
     * Get all the patientLifeConstants.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<PatientLifeConstant> findAll() {
        log.debug("Request to get all PatientLifeConstants");
        return patientLifeConstantRepository.findAll();
    }


    /**
     * Get one patientLifeConstant by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PatientLifeConstant> findOne(Long id) {
        log.debug("Request to get PatientLifeConstant : {}", id);
        return patientLifeConstantRepository.findById(id);
    }

    /**
     * Delete the patientLifeConstant by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PatientLifeConstant : {}", id);
        patientLifeConstantRepository.deleteById(id);
    }
}
