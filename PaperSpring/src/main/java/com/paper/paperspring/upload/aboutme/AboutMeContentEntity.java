package com.paper.paperspring.upload.aboutme;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@Table(name="about_me_content")
public class AboutMeContentEntity {

    public AboutMeContentEntity(String tag, String content) {
        this.tag = tag;
        this.content = content;
    }

    @Id
    private String tag;
    private String content;
}
