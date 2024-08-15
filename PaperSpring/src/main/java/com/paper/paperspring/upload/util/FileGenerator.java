package com.paper.paperspring.upload.util;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.util.UUID;

@Slf4j
public class FileGenerator {


//    @Value("${spring.upload.image.root}")
    String rootPath = "C:/Image";

    private FileGenerator() {

    }


    public String generatorFileNameWithUUID() {
        return UUID.randomUUID().toString().substring(0,4) + "_" + LocalDateTime.now().getNano();
    }

    public File generatorFile(String fileName, MultipartFile image) throws IOException {
        File rootFolder = makeRootPath();
        image.transferTo(new File(rootFolder, fileName+"."+getExtention(image.getOriginalFilename())));
        File saveImage = new File(rootFolder.getAbsolutePath()+"/"+fileName);
        return saveImage;
    }

    private String getExtention(String originalFileName) {
        String[] exts = originalFileName.split("\\.");
        return exts[exts.length -1];
    }

    private File makeRootPath() {
        File folder = new File(rootPath);
        if (!folder.exists()) {
            folder.mkdirs();
        }
        return folder;
    }

    public static FileGenerator getInstance() {
        return new FileGenerator();
    }
}
