package com.mg;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.ui.context.ThemeSource;
import org.springframework.ui.context.support.ResourceBundleThemeSource;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.thymeleaf.templateresolver.ServletContextTemplateResolver;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

        registry.addViewController("/home").setViewName("home");
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/hello").setViewName("hello");
        registry.addViewController("/login").setViewName("login");

        registry.addViewController("/index").setViewName("index");
        registry.addViewController("/objects").setViewName("objects");
        registry.addViewController("/tasks").setViewName("tasks");
//        registry.addViewController("/object").setViewName("singleObject");



    }

//    @Override
//    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
//        configurer.enable();
//    }


//    @Bean
//    public ThemeSource themeSource() {
//        ResourceBundleThemeSource themeSource = new ResourceBundleThemeSource();
//        themeSource.setBasenamePrefix("themes/");
//
//        return themeSource;
//    }

//    @Bean
//    public ServletContextTemplateResolver defaultTemplateResolver() {
//        ServletContextTemplateResolver resolver = new ServletContextTemplateResolver();
//        resolver.setPrefix("/templates/");
//        resolver.setSuffix(".html");
//        resolver.setTemplateMode("LEGACYHTML5");
//        resolver.setCacheable(false);
//        return resolver;
//    }

}