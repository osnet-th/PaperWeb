package com.paper.paperspring.upload;

import com.paper.paperspring.upload.aboutme.AboutMeDto;
import com.paper.paperspring.upload.aboutme.AboutMeUploadService;
import com.paper.paperspring.upload.project.ProjectDto;
import com.paper.paperspring.upload.project.ProjectUploadService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@RestController
public class UploadController {

    @Autowired
    private AboutMeUploadService aboutMeUploadService;
    @Autowired
    private ProjectUploadService projectUploadService;


    // About ME 업로드 요청
    @PostMapping("/upload/about-me/image")
    public ResponseEntity<?> requestUploadAboutMeImage(@RequestBody MultipartFile image) {
        boolean result = aboutMeUploadService.uploadAboutMeImage(image);
        return ResponseEntity.ok(result);
    }
    // About ME 업로드 요청
    @PostMapping("/upload/about-me/contents")
    public ResponseEntity<?> requestUploadAboutMeContents(@RequestBody List<AboutMeDto.Content> contents) {
        log.info("{}", contents);
        boolean result = aboutMeUploadService.uploadAboutMeContents(contents);
        return ResponseEntity.ok(result);
    }

    // About Me 데이터 요청
    @GetMapping("/get/about-me")
    public ResponseEntity<AboutMeDto> getAboutMe() {
        AboutMeDto dto = aboutMeUploadService.getAboutMe();
        return ResponseEntity.ok(dto);
    }

    // 프로젝트 글 등록
    @PostMapping("/upload/projects")
    public ResponseEntity<?> requestUploadProject(String title, String content, List<MultipartFile> imgFiles) {

        log.info("aaaaa");
        return null;
    }

    // 프로젝트 리스트 요청
    @GetMapping("/get/projects")
    public ResponseEntity<?> getProjectsList() {
        return null;
    }

    // 프로젝트 상세 요청
    @GetMapping("/get-detail/projects")
    public ResponseEntity<?> getProjectDetail() {
        return null;
    }

}
