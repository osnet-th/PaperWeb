package com.paper.paperspring.upload.util;


import lombok.Getter;
import lombok.Setter;

import java.io.File;

@Getter
@Setter
public class FileSave {
    
    public FileSave() {

    }
    public FileSave(File file, String originalFileName, long fileSize) {
        this.fileName = file.getName();
        this.requestUrl = file.getAbsolutePath();
        this.originalFileName = originalFileName;
        this.fileSize = fileSize;
    }


    String originalFileName;
    String requestUrl;
    String fileName;
    long fileSize;
}
