package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.DoctorAssistantService;
import com.zelix.yikondi.domain.DoctorAssistant;
import com.zelix.yikondi.repository.DoctorAssistantRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link DoctorAssistant}.
 */
@Service
@Transactional
public class DoctorAssistantServiceImpl implements DoctorAssistantService {

    private final Logger log = LoggerFactory.getLogger(DoctorAssistantServiceImpl.class);

    private final DoctorAssistantRepository doctorAssistantRepository;

    public DoctorAssistantServiceImpl(DoctorAssistantRepository doctorAssistantRepository) {
        this.doctorAssistantRepository = doctorAssistantRepository;
    }

    /**
     * Save a doctorAssistant.
     *
     * @param doctorAssistant the entity to save.
     * @return the persisted entity.
     */
    @Override
    public DoctorAssistant save(DoctorAssistant doctorAssistant) {
        log.debug("Request to save DoctorAssistant : {}", doctorAssistant);
        return doctorAssistantRepository.save(doctorAssistant);
    }

    /**
     * Get all the doctorAssistants.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<DoctorAssistant> findAll() {
        log.debug("Request to get all DoctorAssistants");
        return doctorAssistantRepository.findAll();
    }


    /**
     * Get one doctorAssistant by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<DoctorAssistant> findOne(Long id) {
        log.debug("Request to get DoctorAssistant : {}", id);
        return doctorAssistantRepository.findById(id);
    }

    /**
     * Delete the doctorAssistant by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete DoctorAssistant : {}", id);
        doctorAssistantRepository.deleteById(id);
    }
}
