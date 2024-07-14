package com.paper.paperspring.upload;

import com.paper.paperspring.upload.aboutme.AboutMeDto;
import com.paper.paperspring.upload.aboutme.AboutMeUploadService;
import com.paper.paperspring.upload.project.ProjectUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UploadController {

    @Autowired
    private AboutMeUploadService aboutMeUploadService;
    @Autowired
    private ProjectUploadService projectUploadService;


    // About ME 업로드 요청
    @PostMapping
    public ResponseEntity<?> requestUploadAboutMe(@RequestBody AboutMeDto aboutMeDto) {
        boolean result = aboutMeUploadService.uploadAboutMe(aboutMeDto);
        return ResponseEntity.ok(result);
    }

    // About Me 데이터 요청
    @GetMapping
    public ResponseEntity<AboutMeDto> getAboutMe() {
        AboutMeDto dto = aboutMeUploadService.getAboutMe();
        return ResponseEntity.ok(dto);
    }

    // 프로젝트 글 등록
    @PostMapping
    public ResponseEntity<?> requestUploadProject() {
        return null;
    }

    // 프로젝트 리스트 요청
    @GetMapping
    public ResponseEntity<?> getProjectsList() {
        return null;
    }

    // 프로젝트 상세 요청
    @GetMapping
    public ResponseEntity<?> getProjectDetail() {
        return null;
    }

}
