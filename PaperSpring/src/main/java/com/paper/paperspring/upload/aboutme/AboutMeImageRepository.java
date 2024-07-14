package com.paper.paperspring.upload.aboutme;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AboutMeImageRepository extends JpaRepository<AboutMeImageEntity, String> {

    AboutMeImageEntity findTop1OrderByInsertDateDesc();
}
