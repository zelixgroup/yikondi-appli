package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.AllergyService;
import com.zelix.yikondi.domain.Allergy;
import com.zelix.yikondi.repository.AllergyRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Allergy}.
 */
@Service
@Transactional
public class AllergyServiceImpl implements AllergyService {

    private final Logger log = LoggerFactory.getLogger(AllergyServiceImpl.class);

    private final AllergyRepository allergyRepository;

    public AllergyServiceImpl(AllergyRepository allergyRepository) {
        this.allergyRepository = allergyRepository;
    }

    /**
     * Save a allergy.
     *
     * @param allergy the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Allergy save(Allergy allergy) {
        log.debug("Request to save Allergy : {}", allergy);
        return allergyRepository.save(allergy);
    }

    /**
     * Get all the allergies.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Allergy> findAll() {
        log.debug("Request to get all Allergies");
        return allergyRepository.findAll();
    }


    /**
     * Get one allergy by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Allergy> findOne(Long id) {
        log.debug("Request to get Allergy : {}", id);
        return allergyRepository.findById(id);
    }

    /**
     * Delete the allergy by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Allergy : {}", id);
        allergyRepository.deleteById(id);
    }
}
