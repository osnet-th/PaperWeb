package com.paper.paperspring.upload.aboutme;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AboutMeImageEntity {



    @Id
    private String fileName;

    private String file;

    private LocalDateTime insertDate;


}
