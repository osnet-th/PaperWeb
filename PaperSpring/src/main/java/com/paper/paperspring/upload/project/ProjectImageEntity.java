package com.paper.paperspring.upload.project;


import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name="project_image")
@Getter
public class ProjectImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String fileName;
    private String requestUrl;
    private long size;
    @ManyToOne
    @JoinColumn(name="project_id")
    private ProjectEntity project;

    private ProjectImageEntity() {}
    public ProjectImageEntity(String fileName, String requestUrl, long size) {
        this.fileName = fileName;
        this.requestUrl = requestUrl;
        this.size = size;
    }

    public void setProject(ProjectEntity project) {
        this.project = project;
        this.project.addImages(this);
    }
}
