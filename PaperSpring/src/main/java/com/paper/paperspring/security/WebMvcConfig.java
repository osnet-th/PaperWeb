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

        registry.addResourceHandler("/upload/image/**").addResourceLocations("file://"+path);
        registry.addResourceHandler("/test/**").addResourceLocations("file:///Users/app/Desktop/PaperWeb/Image/");
    }
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8080", "http://localhost:3000")
                .allowCredentials(true)
                .allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE")
                .maxAge(3000);
    }
}
