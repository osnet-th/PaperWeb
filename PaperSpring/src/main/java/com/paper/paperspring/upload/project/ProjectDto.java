package com.paper.paperspring.upload.project;

import com.paper.paperspring.upload.UploadImageDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class ProjectDto {
    private long id;
    private String title;
    private String summary;
    private String content;
    private List<UploadImageDto> projectImages;

    public ProjectDto(long id, String title, String summary, String content, List<UploadImageDto> projectImages) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.projectImages = projectImages;
    }
}
