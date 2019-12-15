package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.MedicalPrescriptionService;
import com.zelix.yikondi.domain.MedicalPrescription;
import com.zelix.yikondi.repository.MedicalPrescriptionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link MedicalPrescription}.
 */
@Service
@Transactional
public class MedicalPrescriptionServiceImpl implements MedicalPrescriptionService {

    private final Logger log = LoggerFactory.getLogger(MedicalPrescriptionServiceImpl.class);

    private final MedicalPrescriptionRepository medicalPrescriptionRepository;

    public MedicalPrescriptionServiceImpl(MedicalPrescriptionRepository medicalPrescriptionRepository) {
        this.medicalPrescriptionRepository = medicalPrescriptionRepository;
    }

    /**
     * Save a medicalPrescription.
     *
     * @param medicalPrescription the entity to save.
     * @return the persisted entity.
     */
    @Override
    public MedicalPrescription save(MedicalPrescription medicalPrescription) {
        log.debug("Request to save MedicalPrescription : {}", medicalPrescription);
        return medicalPrescriptionRepository.save(medicalPrescription);
    }

    /**
     * Get all the medicalPrescriptions.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<MedicalPrescription> findAll() {
        log.debug("Request to get all MedicalPrescriptions");
        return medicalPrescriptionRepository.findAll();
    }


    /**
     * Get one medicalPrescription by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<MedicalPrescription> findOne(Long id) {
        log.debug("Request to get MedicalPrescription : {}", id);
        return medicalPrescriptionRepository.findById(id);
    }

    /**
     * Delete the medicalPrescription by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete MedicalPrescription : {}", id);
        medicalPrescriptionRepository.deleteById(id);
    }
}
