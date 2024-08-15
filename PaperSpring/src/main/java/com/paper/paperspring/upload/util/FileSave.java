package com.paper.paperspring.upload.util;


import lombok.Getter;
import lombok.Setter;

import java.io.File;

@Getter
@Setter
public class FileSave {
    
    public FileSave() {

    }
    public FileSave(String fileName, String requestUrl, long fileSize) {
        this.fileName = fileName;
        this.requestUrl = requestUrl;
        this.fileSize = fileSize;
    }

    String requestUrl;
    String fileName;
    long fileSize;
}
