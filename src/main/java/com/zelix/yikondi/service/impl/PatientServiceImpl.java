package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PatientService;
import com.zelix.yikondi.domain.Patient;
import com.zelix.yikondi.repository.PatientRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Patient}.
 */
@Service
@Transactional
public class PatientServiceImpl implements PatientService {

    private final Logger log = LoggerFactory.getLogger(PatientServiceImpl.class);

    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    /**
     * Save a patient.
     *
     * @param patient the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Patient save(Patient patient) {
        log.debug("Request to save Patient : {}", patient);
        return patientRepository.save(patient);
    }

    /**
     * Get all the patients.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Patient> findAll() {
        log.debug("Request to get all Patients");
        return patientRepository.findAll();
    }


    /**
     * Get one patient by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Patient> findOne(Long id) {
        log.debug("Request to get Patient : {}", id);
        return patientRepository.findById(id);
    }

    /**
     * Delete the patient by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Patient : {}", id);
        patientRepository.deleteById(id);
    }
}
