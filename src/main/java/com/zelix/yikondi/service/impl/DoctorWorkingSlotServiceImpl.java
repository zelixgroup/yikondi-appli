package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.DoctorWorkingSlotService;
import com.zelix.yikondi.domain.DoctorWorkingSlot;
import com.zelix.yikondi.repository.DoctorWorkingSlotRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link DoctorWorkingSlot}.
 */
@Service
@Transactional
public class DoctorWorkingSlotServiceImpl implements DoctorWorkingSlotService {

    private final Logger log = LoggerFactory.getLogger(DoctorWorkingSlotServiceImpl.class);

    private final DoctorWorkingSlotRepository doctorWorkingSlotRepository;

    public DoctorWorkingSlotServiceImpl(DoctorWorkingSlotRepository doctorWorkingSlotRepository) {
        this.doctorWorkingSlotRepository = doctorWorkingSlotRepository;
    }

    /**
     * Save a doctorWorkingSlot.
     *
     * @param doctorWorkingSlot the entity to save.
     * @return the persisted entity.
     */
    @Override
    public DoctorWorkingSlot save(DoctorWorkingSlot doctorWorkingSlot) {
        log.debug("Request to save DoctorWorkingSlot : {}", doctorWorkingSlot);
        return doctorWorkingSlotRepository.save(doctorWorkingSlot);
    }

    /**
     * Get all the doctorWorkingSlots.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<DoctorWorkingSlot> findAll() {
        log.debug("Request to get all DoctorWorkingSlots");
        return doctorWorkingSlotRepository.findAll();
    }


    /**
     * Get one doctorWorkingSlot by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<DoctorWorkingSlot> findOne(Long id) {
        log.debug("Request to get DoctorWorkingSlot : {}", id);
        return doctorWorkingSlotRepository.findById(id);
    }

    /**
     * Delete the doctorWorkingSlot by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete DoctorWorkingSlot : {}", id);
        doctorWorkingSlotRepository.deleteById(id);
    }
}
