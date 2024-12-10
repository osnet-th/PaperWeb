package com.paper.paperspring.aboutme;

import com.paper.paperspring.aboutme.querydsl.AboutMeConetntCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AboutMeContentRepository extends JpaRepository<AboutMeContent, String>, AboutMeConetntCustom {
}
