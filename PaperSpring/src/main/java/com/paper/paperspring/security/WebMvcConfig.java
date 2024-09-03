package com.paper.paperspring.security;

import com.paper.paperspring.upload.util.FileGenerator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${spring.upload.root.win}")
    String winRootPath;

    @Value("${spring.upload.root.mac}")
    String macRootPath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String path = FileGenerator.FileGerator().getRootPath("/"+winRootPath, macRootPath);
        registry.addResourceHandler("/get/upload/image/**").addResourceLocations("file://"+path);
    }
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
//                .exposedHeaders()
                .allowCredentials(true)
                .allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
//                .maxAge(3000);
    }
}
