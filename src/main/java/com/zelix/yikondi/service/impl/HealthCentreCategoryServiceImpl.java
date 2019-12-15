package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.HealthCentreCategoryService;
import com.zelix.yikondi.domain.HealthCentreCategory;
import com.zelix.yikondi.repository.HealthCentreCategoryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link HealthCentreCategory}.
 */
@Service
@Transactional
public class HealthCentreCategoryServiceImpl implements HealthCentreCategoryService {

    private final Logger log = LoggerFactory.getLogger(HealthCentreCategoryServiceImpl.class);

    private final HealthCentreCategoryRepository healthCentreCategoryRepository;

    public HealthCentreCategoryServiceImpl(HealthCentreCategoryRepository healthCentreCategoryRepository) {
        this.healthCentreCategoryRepository = healthCentreCategoryRepository;
    }

    /**
     * Save a healthCentreCategory.
     *
     * @param healthCentreCategory the entity to save.
     * @return the persisted entity.
     */
    @Override
    public HealthCentreCategory save(HealthCentreCategory healthCentreCategory) {
        log.debug("Request to save HealthCentreCategory : {}", healthCentreCategory);
        return healthCentreCategoryRepository.save(healthCentreCategory);
    }

    /**
     * Get all the healthCentreCategories.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<HealthCentreCategory> findAll() {
        log.debug("Request to get all HealthCentreCategories");
        return healthCentreCategoryRepository.findAll();
    }


    /**
     * Get one healthCentreCategory by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<HealthCentreCategory> findOne(Long id) {
        log.debug("Request to get HealthCentreCategory : {}", id);
        return healthCentreCategoryRepository.findById(id);
    }

    /**
     * Delete the healthCentreCategory by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete HealthCentreCategory : {}", id);
        healthCentreCategoryRepository.deleteById(id);
    }
}
