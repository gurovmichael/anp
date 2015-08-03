package com.mg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Example {
//
//    @RequestMapping("/")
//    String home()
//    {
//        return "Hello World!";
//    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Example.class, args);
    }

}