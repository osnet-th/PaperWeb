package com.paper.paperspring.upload.project;


import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="project")
@Getter
public class ProjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private long id;
    private String title;
    private String summary;
    private String content;

    private ProjectEntity() {

    }
    public ProjectEntity(String title, String summary, String content) {
        this.title = title;
        this.summary = summary;
        this.content = content;
    }

    public void addImages(ProjectImageEntity image) {
        this.images.add(image);
    }


    @OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.PERSIST } , mappedBy = "project")
    private List<ProjectImageEntity> images = new ArrayList<>();
}
