package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.DrugService;
import com.zelix.yikondi.domain.Drug;
import com.zelix.yikondi.repository.DrugRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Drug}.
 */
@Service
@Transactional
public class DrugServiceImpl implements DrugService {

    private final Logger log = LoggerFactory.getLogger(DrugServiceImpl.class);

    private final DrugRepository drugRepository;

    public DrugServiceImpl(DrugRepository drugRepository) {
        this.drugRepository = drugRepository;
    }

    /**
     * Save a drug.
     *
     * @param drug the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Drug save(Drug drug) {
        log.debug("Request to save Drug : {}", drug);
        return drugRepository.save(drug);
    }

    /**
     * Get all the drugs.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Drug> findAll() {
        log.debug("Request to get all Drugs");
        return drugRepository.findAll();
    }


    /**
     * Get one drug by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Drug> findOne(Long id) {
        log.debug("Request to get Drug : {}", id);
        return drugRepository.findById(id);
    }

    /**
     * Delete the drug by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Drug : {}", id);
        drugRepository.deleteById(id);
    }
}
