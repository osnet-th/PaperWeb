package com.paper.paperspring.upload.aboutme;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AboutMeImageRepository extends JpaRepository<AboutMeImageEntity, String> {

    Optional<AboutMeImageEntity> findFirstByOrderByInsertDateDesc();
}
