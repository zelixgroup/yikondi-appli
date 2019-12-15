package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.HolidayService;
import com.zelix.yikondi.domain.Holiday;
import com.zelix.yikondi.repository.HolidayRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Holiday}.
 */
@Service
@Transactional
public class HolidayServiceImpl implements HolidayService {

    private final Logger log = LoggerFactory.getLogger(HolidayServiceImpl.class);

    private final HolidayRepository holidayRepository;

    public HolidayServiceImpl(HolidayRepository holidayRepository) {
        this.holidayRepository = holidayRepository;
    }

    /**
     * Save a holiday.
     *
     * @param holiday the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Holiday save(Holiday holiday) {
        log.debug("Request to save Holiday : {}", holiday);
        return holidayRepository.save(holiday);
    }

    /**
     * Get all the holidays.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Holiday> findAll() {
        log.debug("Request to get all Holidays");
        return holidayRepository.findAll();
    }


    /**
     * Get one holiday by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Holiday> findOne(Long id) {
        log.debug("Request to get Holiday : {}", id);
        return holidayRepository.findById(id);
    }

    /**
     * Delete the holiday by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Holiday : {}", id);
        holidayRepository.deleteById(id);
    }
}
