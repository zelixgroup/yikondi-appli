package com.zelix.yikondi.web.rest;

import com.zelix.yikondi.YikondiAppliApp;
import com.zelix.yikondi.domain.HealthCentreCategory;
import com.zelix.yikondi.repository.HealthCentreCategoryRepository;
import com.zelix.yikondi.service.HealthCentreCategoryService;
import com.zelix.yikondi.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static com.zelix.yikondi.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link HealthCentreCategoryResource} REST controller.
 */
@SpringBootTest(classes = YikondiAppliApp.class)
public class HealthCentreCategoryResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    @Autowired
    private HealthCentreCategoryRepository healthCentreCategoryRepository;

    @Autowired
    private HealthCentreCategoryService healthCentreCategoryService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restHealthCentreCategoryMockMvc;

    private HealthCentreCategory healthCentreCategory;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final HealthCentreCategoryResource healthCentreCategoryResource = new HealthCentreCategoryResource(healthCentreCategoryService);
        this.restHealthCentreCategoryMockMvc = MockMvcBuilders.standaloneSetup(healthCentreCategoryResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static HealthCentreCategory createEntity(EntityManager em) {
        HealthCentreCategory healthCentreCategory = new HealthCentreCategory()
            .name(DEFAULT_NAME);
        return healthCentreCategory;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static HealthCentreCategory createUpdatedEntity(EntityManager em) {
        HealthCentreCategory healthCentreCategory = new HealthCentreCategory()
            .name(UPDATED_NAME);
        return healthCentreCategory;
    }

    @BeforeEach
    public void initTest() {
        healthCentreCategory = createEntity(em);
    }

    @Test
    @Transactional
    public void createHealthCentreCategory() throws Exception {
        int databaseSizeBeforeCreate = healthCentreCategoryRepository.findAll().size();

        // Create the HealthCentreCategory
        restHealthCentreCategoryMockMvc.perform(post("/api/health-centre-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(healthCentreCategory)))
            .andExpect(status().isCreated());

        // Validate the HealthCentreCategory in the database
        List<HealthCentreCategory> healthCentreCategoryList = healthCentreCategoryRepository.findAll();
        assertThat(healthCentreCategoryList).hasSize(databaseSizeBeforeCreate + 1);
        HealthCentreCategory testHealthCentreCategory = healthCentreCategoryList.get(healthCentreCategoryList.size() - 1);
        assertThat(testHealthCentreCategory.getName()).isEqualTo(DEFAULT_NAME);
    }

    @Test
    @Transactional
    public void createHealthCentreCategoryWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = healthCentreCategoryRepository.findAll().size();

        // Create the HealthCentreCategory with an existing ID
        healthCentreCategory.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restHealthCentreCategoryMockMvc.perform(post("/api/health-centre-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(healthCentreCategory)))
            .andExpect(status().isBadRequest());

        // Validate the HealthCentreCategory in the database
        List<HealthCentreCategory> healthCentreCategoryList = healthCentreCategoryRepository.findAll();
        assertThat(healthCentreCategoryList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllHealthCentreCategories() throws Exception {
        // Initialize the database
        healthCentreCategoryRepository.saveAndFlush(healthCentreCategory);

        // Get all the healthCentreCategoryList
        restHealthCentreCategoryMockMvc.perform(get("/api/health-centre-categories?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(healthCentreCategory.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)));
    }
    
    @Test
    @Transactional
    public void getHealthCentreCategory() throws Exception {
        // Initialize the database
        healthCentreCategoryRepository.saveAndFlush(healthCentreCategory);

        // Get the healthCentreCategory
        restHealthCentreCategoryMockMvc.perform(get("/api/health-centre-categories/{id}", healthCentreCategory.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(healthCentreCategory.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME));
    }

    @Test
    @Transactional
    public void getNonExistingHealthCentreCategory() throws Exception {
        // Get the healthCentreCategory
        restHealthCentreCategoryMockMvc.perform(get("/api/health-centre-categories/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateHealthCentreCategory() throws Exception {
        // Initialize the database
        healthCentreCategoryService.save(healthCentreCategory);

        int databaseSizeBeforeUpdate = healthCentreCategoryRepository.findAll().size();

        // Update the healthCentreCategory
        HealthCentreCategory updatedHealthCentreCategory = healthCentreCategoryRepository.findById(healthCentreCategory.getId()).get();
        // Disconnect from session so that the updates on updatedHealthCentreCategory are not directly saved in db
        em.detach(updatedHealthCentreCategory);
        updatedHealthCentreCategory
            .name(UPDATED_NAME);

        restHealthCentreCategoryMockMvc.perform(put("/api/health-centre-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedHealthCentreCategory)))
            .andExpect(status().isOk());

        // Validate the HealthCentreCategory in the database
        List<HealthCentreCategory> healthCentreCategoryList = healthCentreCategoryRepository.findAll();
        assertThat(healthCentreCategoryList).hasSize(databaseSizeBeforeUpdate);
        HealthCentreCategory testHealthCentreCategory = healthCentreCategoryList.get(healthCentreCategoryList.size() - 1);
        assertThat(testHealthCentreCategory.getName()).isEqualTo(UPDATED_NAME);
    }

    @Test
    @Transactional
    public void updateNonExistingHealthCentreCategory() throws Exception {
        int databaseSizeBeforeUpdate = healthCentreCategoryRepository.findAll().size();

        // Create the HealthCentreCategory

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restHealthCentreCategoryMockMvc.perform(put("/api/health-centre-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(healthCentreCategory)))
            .andExpect(status().isBadRequest());

        // Validate the HealthCentreCategory in the database
        List<HealthCentreCategory> healthCentreCategoryList = healthCentreCategoryRepository.findAll();
        assertThat(healthCentreCategoryList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteHealthCentreCategory() throws Exception {
        // Initialize the database
        healthCentreCategoryService.save(healthCentreCategory);

        int databaseSizeBeforeDelete = healthCentreCategoryRepository.findAll().size();

        // Delete the healthCentreCategory
        restHealthCentreCategoryMockMvc.perform(delete("/api/health-centre-categories/{id}", healthCentreCategory.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<HealthCentreCategory> healthCentreCategoryList = healthCentreCategoryRepository.findAll();
        assertThat(healthCentreCategoryList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
