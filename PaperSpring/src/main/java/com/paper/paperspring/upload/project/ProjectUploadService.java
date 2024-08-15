package com.paper.paperspring.upload.project;

import com.paper.paperspring.upload.Upload;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@Service
public class ProjectUploadService extends Upload {


    public void uploadProject(String title, String content, List<MultipartFile> images) {
        log.info("프로젝트({}) 게시글을 저장합니다. 내용 - {}",title, content);
        imageUrlBasedUpload(images);

    }
}
