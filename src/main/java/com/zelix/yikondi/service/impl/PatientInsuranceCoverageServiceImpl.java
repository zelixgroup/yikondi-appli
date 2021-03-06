package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PatientInsuranceCoverageService;
import com.zelix.yikondi.domain.PatientInsuranceCoverage;
import com.zelix.yikondi.repository.PatientInsuranceCoverageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link PatientInsuranceCoverage}.
 */
@Service
@Transactional
public class PatientInsuranceCoverageServiceImpl implements PatientInsuranceCoverageService {

    private final Logger log = LoggerFactory.getLogger(PatientInsuranceCoverageServiceImpl.class);

    private final PatientInsuranceCoverageRepository patientInsuranceCoverageRepository;

    public PatientInsuranceCoverageServiceImpl(PatientInsuranceCoverageRepository patientInsuranceCoverageRepository) {
        this.patientInsuranceCoverageRepository = patientInsuranceCoverageRepository;
    }

    /**
     * Save a patientInsuranceCoverage.
     *
     * @param patientInsuranceCoverage the entity to save.
     * @return the persisted entity.
     */
    @Override
    public PatientInsuranceCoverage save(PatientInsuranceCoverage patientInsuranceCoverage) {
        log.debug("Request to save PatientInsuranceCoverage : {}", patientInsuranceCoverage);
        return patientInsuranceCoverageRepository.save(patientInsuranceCoverage);
    }

    /**
     * Get all the patientInsuranceCoverages.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<PatientInsuranceCoverage> findAll() {
        log.debug("Request to get all PatientInsuranceCoverages");
        return patientInsuranceCoverageRepository.findAll();
    }


    /**
     * Get one patientInsuranceCoverage by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PatientInsuranceCoverage> findOne(Long id) {
        log.debug("Request to get PatientInsuranceCoverage : {}", id);
        return patientInsuranceCoverageRepository.findById(id);
    }

    /**
     * Delete the patientInsuranceCoverage by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PatientInsuranceCoverage : {}", id);
        patientInsuranceCoverageRepository.deleteById(id);
    }
}
