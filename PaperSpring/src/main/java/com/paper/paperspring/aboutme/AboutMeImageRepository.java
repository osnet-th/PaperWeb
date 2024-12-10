package com.paper.paperspring.aboutme;

import com.paper.paperspring.aboutme.querydsl.AboutMeImageCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AboutMeImageRepository extends JpaRepository<AboutMeImage, String>, AboutMeImageCustom {

}
