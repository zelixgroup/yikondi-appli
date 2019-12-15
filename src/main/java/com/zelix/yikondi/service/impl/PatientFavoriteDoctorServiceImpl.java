package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PatientFavoriteDoctorService;
import com.zelix.yikondi.domain.PatientFavoriteDoctor;
import com.zelix.yikondi.repository.PatientFavoriteDoctorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link PatientFavoriteDoctor}.
 */
@Service
@Transactional
public class PatientFavoriteDoctorServiceImpl implements PatientFavoriteDoctorService {

    private final Logger log = LoggerFactory.getLogger(PatientFavoriteDoctorServiceImpl.class);

    private final PatientFavoriteDoctorRepository patientFavoriteDoctorRepository;

    public PatientFavoriteDoctorServiceImpl(PatientFavoriteDoctorRepository patientFavoriteDoctorRepository) {
        this.patientFavoriteDoctorRepository = patientFavoriteDoctorRepository;
    }

    /**
     * Save a patientFavoriteDoctor.
     *
     * @param patientFavoriteDoctor the entity to save.
     * @return the persisted entity.
     */
    @Override
    public PatientFavoriteDoctor save(PatientFavoriteDoctor patientFavoriteDoctor) {
        log.debug("Request to save PatientFavoriteDoctor : {}", patientFavoriteDoctor);
        return patientFavoriteDoctorRepository.save(patientFavoriteDoctor);
    }

    /**
     * Get all the patientFavoriteDoctors.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<PatientFavoriteDoctor> findAll() {
        log.debug("Request to get all PatientFavoriteDoctors");
        return patientFavoriteDoctorRepository.findAll();
    }


    /**
     * Get one patientFavoriteDoctor by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PatientFavoriteDoctor> findOne(Long id) {
        log.debug("Request to get PatientFavoriteDoctor : {}", id);
        return patientFavoriteDoctorRepository.findById(id);
    }

    /**
     * Delete the patientFavoriteDoctor by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PatientFavoriteDoctor : {}", id);
        patientFavoriteDoctorRepository.deleteById(id);
    }
}
