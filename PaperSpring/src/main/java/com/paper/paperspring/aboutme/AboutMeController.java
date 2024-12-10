package com.paper.paperspring.aboutme;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Controller
@Log4j2
@RequiredArgsConstructor
public class AboutMeController {

    private final AboutMeUploadService aboutMeUploadService;
    @PostMapping("/upload/about-me/image")
    public ResponseEntity<?> requestUploadAboutMeImage(@RequestBody MultipartFile image) {
        log.info(">>> About Me 이미지를 업로드합니다.");
        return ResponseEntity.ok(aboutMeUploadService.uploadAboutMeImage(image));
    }
    // About ME 업로드 요청 - 관리자 권한
    @PostMapping("/upload/about-me/contents")
    public ResponseEntity<?> requestUploadAboutMeContents(@RequestBody List<AboutMeDto.Content> contents) {
        log.info("About Me 내용을 업로드 합니다.");
        return ResponseEntity.ok(aboutMeUploadService.uploadAboutMeContents(contents));
    }

    // About Me 데이터 요청 - 권한 없음
    @GetMapping("/get/about-me")
    public ResponseEntity<AboutMeDto> getAboutMe(HttpServletRequest request) {
        log.info(request.toString());
        return ResponseEntity.ok(aboutMeUploadService.getAboutMe());
    }
}
