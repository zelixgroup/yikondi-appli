package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PharmacyAllNightPlanningService;
import com.zelix.yikondi.domain.PharmacyAllNightPlanning;
import com.zelix.yikondi.repository.PharmacyAllNightPlanningRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link PharmacyAllNightPlanning}.
 */
@Service
@Transactional
public class PharmacyAllNightPlanningServiceImpl implements PharmacyAllNightPlanningService {

    private final Logger log = LoggerFactory.getLogger(PharmacyAllNightPlanningServiceImpl.class);

    private final PharmacyAllNightPlanningRepository pharmacyAllNightPlanningRepository;

    public PharmacyAllNightPlanningServiceImpl(PharmacyAllNightPlanningRepository pharmacyAllNightPlanningRepository) {
        this.pharmacyAllNightPlanningRepository = pharmacyAllNightPlanningRepository;
    }

    /**
     * Save a pharmacyAllNightPlanning.
     *
     * @param pharmacyAllNightPlanning the entity to save.
     * @return the persisted entity.
     */
    @Override
    public PharmacyAllNightPlanning save(PharmacyAllNightPlanning pharmacyAllNightPlanning) {
        log.debug("Request to save PharmacyAllNightPlanning : {}", pharmacyAllNightPlanning);
        return pharmacyAllNightPlanningRepository.save(pharmacyAllNightPlanning);
    }

    /**
     * Get all the pharmacyAllNightPlannings.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<PharmacyAllNightPlanning> findAll() {
        log.debug("Request to get all PharmacyAllNightPlannings");
        return pharmacyAllNightPlanningRepository.findAll();
    }


    /**
     * Get one pharmacyAllNightPlanning by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PharmacyAllNightPlanning> findOne(Long id) {
        log.debug("Request to get PharmacyAllNightPlanning : {}", id);
        return pharmacyAllNightPlanningRepository.findById(id);
    }

    /**
     * Delete the pharmacyAllNightPlanning by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PharmacyAllNightPlanning : {}", id);
        pharmacyAllNightPlanningRepository.deleteById(id);
    }
}
