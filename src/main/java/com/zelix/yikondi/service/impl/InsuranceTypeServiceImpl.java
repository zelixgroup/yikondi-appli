package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.InsuranceTypeService;
import com.zelix.yikondi.domain.InsuranceType;
import com.zelix.yikondi.repository.InsuranceTypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link InsuranceType}.
 */
@Service
@Transactional
public class InsuranceTypeServiceImpl implements InsuranceTypeService {

    private final Logger log = LoggerFactory.getLogger(InsuranceTypeServiceImpl.class);

    private final InsuranceTypeRepository insuranceTypeRepository;

    public InsuranceTypeServiceImpl(InsuranceTypeRepository insuranceTypeRepository) {
        this.insuranceTypeRepository = insuranceTypeRepository;
    }

    /**
     * Save a insuranceType.
     *
     * @param insuranceType the entity to save.
     * @return the persisted entity.
     */
    @Override
    public InsuranceType save(InsuranceType insuranceType) {
        log.debug("Request to save InsuranceType : {}", insuranceType);
        return insuranceTypeRepository.save(insuranceType);
    }

    /**
     * Get all the insuranceTypes.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<InsuranceType> findAll() {
        log.debug("Request to get all InsuranceTypes");
        return insuranceTypeRepository.findAll();
    }


    /**
     * Get one insuranceType by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<InsuranceType> findOne(Long id) {
        log.debug("Request to get InsuranceType : {}", id);
        return insuranceTypeRepository.findById(id);
    }

    /**
     * Delete the insuranceType by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete InsuranceType : {}", id);
        insuranceTypeRepository.deleteById(id);
    }
}
