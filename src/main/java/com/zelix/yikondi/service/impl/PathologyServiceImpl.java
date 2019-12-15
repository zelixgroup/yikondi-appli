package com.zelix.yikondi.service.impl;

import com.zelix.yikondi.service.PathologyService;
import com.zelix.yikondi.domain.Pathology;
import com.zelix.yikondi.repository.PathologyRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Pathology}.
 */
@Service
@Transactional
public class PathologyServiceImpl implements PathologyService {

    private final Logger log = LoggerFactory.getLogger(PathologyServiceImpl.class);

    private final PathologyRepository pathologyRepository;

    public PathologyServiceImpl(PathologyRepository pathologyRepository) {
        this.pathologyRepository = pathologyRepository;
    }

    /**
     * Save a pathology.
     *
     * @param pathology the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Pathology save(Pathology pathology) {
        log.debug("Request to save Pathology : {}", pathology);
        return pathologyRepository.save(pathology);
    }

    /**
     * Get all the pathologies.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Pathology> findAll() {
        log.debug("Request to get all Pathologies");
        return pathologyRepository.findAll();
    }


    /**
     * Get one pathology by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Pathology> findOne(Long id) {
        log.debug("Request to get Pathology : {}", id);
        return pathologyRepository.findById(id);
    }

    /**
     * Delete the pathology by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Pathology : {}", id);
        pathologyRepository.deleteById(id);
    }
}
