package com.paper.paperspring.upload.project;

import com.paper.paperspring.upload.Upload;
import com.paper.paperspring.upload.UploadImageDto;
import com.paper.paperspring.upload.util.FileSave;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ProjectUploadService extends Upload {

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectDto getProjectDetail(Long projectId) {
        Optional<ProjectEntity> projectEntity = projectRepository.findById(projectId);
        if(projectEntity.isPresent()) {
            return convertProjectDto(projectEntity.get());
        }
        return null;
    }
    public ProjectDto uploadProject(String title, String summary, String content, String review, List<MultipartFile> images) {
        log.info("프로젝트({}) 게시글을 저장합니다. 요약 - {} , 내용 - {}",title, summary, content);
        List<FileSave> fileList = imageUrlBasedUpload(images);
        ProjectEntity projectEntity = new ProjectEntity(title, summary, content, review);
        fileList.stream().forEach(file -> {
            ProjectImageEntity imageEntity = new ProjectImageEntity(file.getFileName(), file.getRequestUrl(), file.getFileSize());
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
