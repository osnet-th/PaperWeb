package com.paper.paperspring.project;

import com.paper.paperspring.upload.Upload;
import com.paper.paperspring.upload.UploadImageDto;
import com.paper.paperspring.util.FileSave;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ProjectUploadService extends Upload {

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectDto getProjectDetail(Long projectId) {
        Optional<ProjectEntity> projectEntity = projectRepository.findById(projectId);
        return projectEntity.map(this::convertProjectDto).orElse(null);
    }
    public ProjectDto uploadProject(String title, String summary, String content, String review, List<MultipartFile> images) {
        log.info("프로젝트({}) 게시글을 저장합니다. 요약 - {} , 내용 - {}",title, summary, content);
        List<FileSave> fileList = imageUrlBasedUpload(images);
        ProjectEntity projectEntity = new ProjectEntity(title, summary, content, review);
        fileList.forEach(file -> {
            ProjectImage imageEntity = new ProjectImage(file.getFileName(), file.getRequestUrl(), file.getFileSize());
            imageEntity.setProject(projectEntity);
        });

        return convertProjectDto(projectRepository.save(projectEntity));
    }

    public List<ProjectDto> getProjects() {
        List<ProjectEntity> projectEntities = projectRepository.findAll();
        return projectEntities.stream().map(this::convertProjectDto).toList();
    }


    private ProjectDto convertProjectDto(ProjectEntity projectEntity) {
        List<UploadImageDto> imageDtos = projectEntity.getImages().stream().map( saveImage -> {
            return new UploadImageDto(saveImage.getFileName(), saveImage.getRequestUrl());
        }).toList();
        return new ProjectDto(projectEntity.getId(), projectEntity.getTitle(), projectEntity.getSummary(), projectEntity.getContent(), projectEntity.getReview(), imageDtos);
    }



}
