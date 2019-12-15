package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PharmacyService;
import com.zelix.yikondi.domain.Pharmacy;
import com.zelix.yikondi.repository.PharmacyRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Pharmacy}.
 */
@Service
@Transactional
public class PharmacyServiceImpl implements PharmacyService {

    private final Logger log = LoggerFactory.getLogger(PharmacyServiceImpl.class);

    private final PharmacyRepository pharmacyRepository;

    public PharmacyServiceImpl(PharmacyRepository pharmacyRepository) {
        this.pharmacyRepository = pharmacyRepository;
    }

    /**
     * Save a pharmacy.
     *
     * @param pharmacy the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Pharmacy save(Pharmacy pharmacy) {
        log.debug("Request to save Pharmacy : {}", pharmacy);
        return pharmacyRepository.save(pharmacy);
    }

    /**
     * Get all the pharmacies.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Pharmacy> findAll() {
        log.debug("Request to get all Pharmacies");
        return pharmacyRepository.findAll();
    }


    /**
     * Get one pharmacy by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Pharmacy> findOne(Long id) {
        log.debug("Request to get Pharmacy : {}", id);
        return pharmacyRepository.findById(id);
    }

    /**
     * Delete the pharmacy by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Pharmacy : {}", id);
        pharmacyRepository.deleteById(id);
    }
}
