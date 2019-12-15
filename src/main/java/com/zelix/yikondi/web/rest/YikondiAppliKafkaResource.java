package com.zelix.yikondi.web.rest;

import com.zelix.yikondi.service.YikondiAppliKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/yikondi-appli-kafka")
public class YikondiAppliKafkaResource {

    private final Logger log = LoggerFactory.getLogger(YikondiAppliKafkaResource.class);

    private YikondiAppliKafkaProducer kafkaProducer;

    public YikondiAppliKafkaResource(YikondiAppliKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.send(message);
    }
}
