package com.paper.paperspring.upload.aboutme;

import com.paper.paperspring.upload.UploadImageDto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;


@Setter
@Getter
@ToString
public class AboutMeDto {
    public enum Tag{
        EDU, // 학력
        AGE, // 나이
        NAME, // 이름
        HOBBY, // 취미
        CAREER; // 경력

    }

    public AboutMeDto(UploadImageDto image, List<Content> contents) {
        this.myPhotos = image;
        this.contents = new ArrayList<>(contents);
    }

    private UploadImageDto myPhotos;
    private List<Content> contents;


    @Getter
    @Setter
    public static class Content {

        public Content() {

        }

        public Content(String tag) {
            this.tag = tag;
            this.content = "";
        }

        public Content(String tag, String content) {
            this.tag = tag;
            this.content = content;
        }

        private String tag;
        private String content;

    }

    public static List<Content> defaultContentForm() {
        List<String> defaultTags = Arrays.asList("이름", "생년월일","직업","학력","취미","특기");
        return defaultTags.stream().map(tag -> new Content(tag)).toList();
    }
}
