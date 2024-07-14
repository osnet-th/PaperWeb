package com.paper.paperspring.upload.project;

import com.paper.paperspring.upload.UploadImageDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class ProjectDto {
    private String title;
    private String description;
    private List<UploadImageDto> projectImages;
}
