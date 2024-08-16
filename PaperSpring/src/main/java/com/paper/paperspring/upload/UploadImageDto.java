package com.paper.paperspring.upload;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UploadImageDto {

    private UploadImageDto() {}
    public UploadImageDto(String name, String requestUrl) {
        this.name = name;
        this.requestUrl = requestUrl;
    }

    private String name;
    private String requestUrl; // 이미지 바이너리 값이 될 수도 있고, URL 이 될 수도 있음


}
