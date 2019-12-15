package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PatientFavoritePharmacyService;
import com.zelix.yikondi.domain.PatientFavoritePharmacy;
import com.zelix.yikondi.repository.PatientFavoritePharmacyRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link PatientFavoritePharmacy}.
 */
@Service
@Transactional
public class PatientFavoritePharmacyServiceImpl implements PatientFavoritePharmacyService {

    private final Logger log = LoggerFactory.getLogger(PatientFavoritePharmacyServiceImpl.class);

    private final PatientFavoritePharmacyRepository patientFavoritePharmacyRepository;

    public PatientFavoritePharmacyServiceImpl(PatientFavoritePharmacyRepository patientFavoritePharmacyRepository) {
        this.patientFavoritePharmacyRepository = patientFavoritePharmacyRepository;
    }

    /**
     * Save a patientFavoritePharmacy.
     *
     * @param patientFavoritePharmacy the entity to save.
     * @return the persisted entity.
     */
    @Override
    public PatientFavoritePharmacy save(PatientFavoritePharmacy patientFavoritePharmacy) {
        log.debug("Request to save PatientFavoritePharmacy : {}", patientFavoritePharmacy);
        return patientFavoritePharmacyRepository.save(patientFavoritePharmacy);
    }

    /**
     * Get all the patientFavoritePharmacies.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<PatientFavoritePharmacy> findAll() {
        log.debug("Request to get all PatientFavoritePharmacies");
        return patientFavoritePharmacyRepository.findAll();
    }


    /**
     * Get one patientFavoritePharmacy by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PatientFavoritePharmacy> findOne(Long id) {
        log.debug("Request to get PatientFavoritePharmacy : {}", id);
        return patientFavoritePharmacyRepository.findById(id);
    }

    /**
     * Delete the patientFavoritePharmacy by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PatientFavoritePharmacy : {}", id);
        patientFavoritePharmacyRepository.deleteById(id);
    }
}
