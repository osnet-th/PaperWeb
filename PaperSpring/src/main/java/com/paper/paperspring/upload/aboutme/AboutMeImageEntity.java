package com.paper.paperspring.upload.aboutme;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="about_me_image")
public class AboutMeImageEntity {

    @Id
    private String fileName;

    @Lob
    private String file;

    private LocalDateTime insertDate;


}
