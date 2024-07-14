package com.paper.paperspring.upload.aboutme;

import com.paper.paperspring.upload.UploadImageDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;


@Setter
@Getter
public class AboutMeDto {
    public enum Tag{
        EDU, // 학력
        AGE, // 나이
        NAME, // 이름
        HOBBY, // 취미
        CAREER; // 경력

    }

    public AboutMeDto(UploadImageDto image, Map<Tag, String> contents) {
        this.myPhotos = image;
        this.contents = new HashMap<>(contents);
    }

    private UploadImageDto myPhotos;
    private Map<Tag, String> contents;
    private MultipartFile imageFile;
}
