package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.MedicalPrescriptionDrugService;
import com.zelix.yikondi.domain.MedicalPrescriptionDrug;
import com.zelix.yikondi.repository.MedicalPrescriptionDrugRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link MedicalPrescriptionDrug}.
 */
@Service
@Transactional
public class MedicalPrescriptionDrugServiceImpl implements MedicalPrescriptionDrugService {

    private final Logger log = LoggerFactory.getLogger(MedicalPrescriptionDrugServiceImpl.class);

    private final MedicalPrescriptionDrugRepository medicalPrescriptionDrugRepository;

    public MedicalPrescriptionDrugServiceImpl(MedicalPrescriptionDrugRepository medicalPrescriptionDrugRepository) {
        this.medicalPrescriptionDrugRepository = medicalPrescriptionDrugRepository;
    }

    /**
     * Save a medicalPrescriptionDrug.
     *
     * @param medicalPrescriptionDrug the entity to save.
     * @return the persisted entity.
     */
    @Override
    public MedicalPrescriptionDrug save(MedicalPrescriptionDrug medicalPrescriptionDrug) {
        log.debug("Request to save MedicalPrescriptionDrug : {}", medicalPrescriptionDrug);
        return medicalPrescriptionDrugRepository.save(medicalPrescriptionDrug);
    }

    /**
     * Get all the medicalPrescriptionDrugs.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<MedicalPrescriptionDrug> findAll() {
        log.debug("Request to get all MedicalPrescriptionDrugs");
        return medicalPrescriptionDrugRepository.findAll();
    }


    /**
     * Get one medicalPrescriptionDrug by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<MedicalPrescriptionDrug> findOne(Long id) {
        log.debug("Request to get MedicalPrescriptionDrug : {}", id);
        return medicalPrescriptionDrugRepository.findById(id);
    }

    /**
     * Delete the medicalPrescriptionDrug by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete MedicalPrescriptionDrug : {}", id);
        medicalPrescriptionDrugRepository.deleteById(id);
    }
}
