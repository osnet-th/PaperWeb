package com.paper.paperspring.upload.project;

import com.paper.paperspring.upload.Upload;
import com.paper.paperspring.upload.util.FileSave;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@Service
public class ProjectUploadService extends Upload {

    @Autowired
    private ProjectRepository projectRepository;

    public void uploadProject(String title, String content, List<MultipartFile> images) {
        log.info("프로젝트({}) 게시글을 저장합니다. 내용 - {}",title, content);
        List<FileSave> fileList = imageUrlBasedUpload(images);
        ProjectEntity projectEntity = new ProjectEntity(title, content);
        fileList.stream().forEach(file -> {
            ProjectImageEntity imageEntity = new ProjectImageEntity(file.getFileName(), file.getRequestUrl(), file.getFileSize());
            imageEntity.setProject(projectEntity);
        });
        projectRepository.save(projectEntity);
    }

}
