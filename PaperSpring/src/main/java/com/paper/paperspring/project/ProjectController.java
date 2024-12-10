package com.paper.paperspring.project;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Controller
@Log4j2
@RequiredArgsConstructor
public class ProjectController {


    private final ProjectUploadService projectUploadService;


    // About ME 업로드 요청 - 관리자 권한
    // 프로젝트 글 등록 - 관리자 권한
    @PostMapping("/upload/projects")
    public ResponseEntity<ProjectDto> requestUploadProject(String title, String summary , String content, String review, List<MultipartFile> imgFiles) {
        return ResponseEntity.ok().body(projectUploadService.uploadProject(title, summary, content, review, imgFiles));
    }

    // 프로젝트 리스트 요청 - 권한 없음
    @GetMapping("/get/projects")
    public ResponseEntity<List<ProjectDto>> getProjectsList() {
        return ResponseEntity.ok().body(projectUploadService.getProjects());
    }

    // 프로젝트 상세 요청 - 권한 없음
    @GetMapping("/get/detail-project")
    public ResponseEntity<ProjectDto> getProjectDetail(Long projectId) {
        return ResponseEntity.ok().body(projectUploadService.getProjectDetail(projectId));
    }
}
