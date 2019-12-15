package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.LifeConstantUnitService;
import com.zelix.yikondi.domain.LifeConstantUnit;
import com.zelix.yikondi.repository.LifeConstantUnitRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link LifeConstantUnit}.
 */
@Service
@Transactional
public class LifeConstantUnitServiceImpl implements LifeConstantUnitService {

    private final Logger log = LoggerFactory.getLogger(LifeConstantUnitServiceImpl.class);

    private final LifeConstantUnitRepository lifeConstantUnitRepository;

    public LifeConstantUnitServiceImpl(LifeConstantUnitRepository lifeConstantUnitRepository) {
        this.lifeConstantUnitRepository = lifeConstantUnitRepository;
    }

    /**
     * Save a lifeConstantUnit.
     *
     * @param lifeConstantUnit the entity to save.
     * @return the persisted entity.
     */
    @Override
    public LifeConstantUnit save(LifeConstantUnit lifeConstantUnit) {
        log.debug("Request to save LifeConstantUnit : {}", lifeConstantUnit);
        return lifeConstantUnitRepository.save(lifeConstantUnit);
    }

    /**
     * Get all the lifeConstantUnits.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<LifeConstantUnit> findAll() {
        log.debug("Request to get all LifeConstantUnits");
        return lifeConstantUnitRepository.findAll();
    }


    /**
     * Get one lifeConstantUnit by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<LifeConstantUnit> findOne(Long id) {
        log.debug("Request to get LifeConstantUnit : {}", id);
        return lifeConstantUnitRepository.findById(id);
    }

    /**
     * Delete the lifeConstantUnit by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete LifeConstantUnit : {}", id);
        lifeConstantUnitRepository.deleteById(id);
    }
}
