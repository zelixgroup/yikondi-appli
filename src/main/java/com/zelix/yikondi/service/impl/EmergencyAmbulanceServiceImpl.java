package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.EmergencyAmbulanceService;
import com.zelix.yikondi.domain.EmergencyAmbulance;
import com.zelix.yikondi.repository.EmergencyAmbulanceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link EmergencyAmbulance}.
 */
@Service
@Transactional
public class EmergencyAmbulanceServiceImpl implements EmergencyAmbulanceService {

    private final Logger log = LoggerFactory.getLogger(EmergencyAmbulanceServiceImpl.class);

    private final EmergencyAmbulanceRepository emergencyAmbulanceRepository;

    public EmergencyAmbulanceServiceImpl(EmergencyAmbulanceRepository emergencyAmbulanceRepository) {
        this.emergencyAmbulanceRepository = emergencyAmbulanceRepository;
    }

    /**
     * Save a emergencyAmbulance.
     *
     * @param emergencyAmbulance the entity to save.
     * @return the persisted entity.
     */
    @Override
    public EmergencyAmbulance save(EmergencyAmbulance emergencyAmbulance) {
        log.debug("Request to save EmergencyAmbulance : {}", emergencyAmbulance);
        return emergencyAmbulanceRepository.save(emergencyAmbulance);
    }

    /**
     * Get all the emergencyAmbulances.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<EmergencyAmbulance> findAll() {
        log.debug("Request to get all EmergencyAmbulances");
        return emergencyAmbulanceRepository.findAll();
    }


    /**
     * Get one emergencyAmbulance by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<EmergencyAmbulance> findOne(Long id) {
        log.debug("Request to get EmergencyAmbulance : {}", id);
        return emergencyAmbulanceRepository.findById(id);
    }

    /**
     * Delete the emergencyAmbulance by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete EmergencyAmbulance : {}", id);
        emergencyAmbulanceRepository.deleteById(id);
    }
}
