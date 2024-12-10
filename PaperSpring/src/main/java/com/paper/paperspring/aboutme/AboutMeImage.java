package com.paper.paperspring.aboutme;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
public class AboutMeImage {

    @Id
    private String fileName;

    private String requestUrl;

    private LocalDateTime insertDate;
}
