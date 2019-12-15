package com.zelix.yikondi.service;

import com.zelix.yikondi.domain.Drug;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Drug}.
 */
public interface DrugService {

    /**
     * Save a drug.
     *
     * @param drug the entity to save.
     * @return the persisted entity.
     */
    Drug save(Drug drug);

    /**
     * Get all the drugs.
     *
     * @return the list of entities.
     */
    List<Drug> findAll();


    /**
     * Get the "id" drug.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Drug> findOne(Long id);

    /**
     * Delete the "id" drug.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
