package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PatientAllergyService;
import com.zelix.yikondi.domain.PatientAllergy;
import com.zelix.yikondi.repository.PatientAllergyRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link PatientAllergy}.
 */
@Service
@Transactional
public class PatientAllergyServiceImpl implements PatientAllergyService {

    private final Logger log = LoggerFactory.getLogger(PatientAllergyServiceImpl.class);

    private final PatientAllergyRepository patientAllergyRepository;

    public PatientAllergyServiceImpl(PatientAllergyRepository patientAllergyRepository) {
        this.patientAllergyRepository = patientAllergyRepository;
    }

    /**
     * Save a patientAllergy.
     *
     * @param patientAllergy the entity to save.
     * @return the persisted entity.
     */
    @Override
    public PatientAllergy save(PatientAllergy patientAllergy) {
        log.debug("Request to save PatientAllergy : {}", patientAllergy);
        return patientAllergyRepository.save(patientAllergy);
    }

    /**
     * Get all the patientAllergies.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<PatientAllergy> findAll() {
        log.debug("Request to get all PatientAllergies");
        return patientAllergyRepository.findAll();
    }


    /**
     * Get one patientAllergy by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PatientAllergy> findOne(Long id) {
        log.debug("Request to get PatientAllergy : {}", id);
        return patientAllergyRepository.findById(id);
    }

    /**
     * Delete the patientAllergy by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PatientAllergy : {}", id);
        patientAllergyRepository.deleteById(id);
    }
}
