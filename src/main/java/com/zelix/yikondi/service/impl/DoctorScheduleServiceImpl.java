package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.DoctorScheduleService;
import com.zelix.yikondi.domain.DoctorSchedule;
import com.zelix.yikondi.repository.DoctorScheduleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link DoctorSchedule}.
 */
@Service
@Transactional
public class DoctorScheduleServiceImpl implements DoctorScheduleService {

    private final Logger log = LoggerFactory.getLogger(DoctorScheduleServiceImpl.class);

    private final DoctorScheduleRepository doctorScheduleRepository;

    public DoctorScheduleServiceImpl(DoctorScheduleRepository doctorScheduleRepository) {
        this.doctorScheduleRepository = doctorScheduleRepository;
    }

    /**
     * Save a doctorSchedule.
     *
     * @param doctorSchedule the entity to save.
     * @return the persisted entity.
     */
    @Override
    public DoctorSchedule save(DoctorSchedule doctorSchedule) {
        log.debug("Request to save DoctorSchedule : {}", doctorSchedule);
        return doctorScheduleRepository.save(doctorSchedule);
    }

    /**
     * Get all the doctorSchedules.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<DoctorSchedule> findAll() {
        log.debug("Request to get all DoctorSchedules");
        return doctorScheduleRepository.findAll();
    }


    /**
     * Get one doctorSchedule by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<DoctorSchedule> findOne(Long id) {
        log.debug("Request to get DoctorSchedule : {}", id);
        return doctorScheduleRepository.findById(id);
    }

    /**
     * Delete the doctorSchedule by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete DoctorSchedule : {}", id);
        doctorScheduleRepository.deleteById(id);
    }
}
