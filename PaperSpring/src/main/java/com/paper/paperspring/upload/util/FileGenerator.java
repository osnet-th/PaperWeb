package com.paper.paperspring.upload.util;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@Slf4j
public class FileGenerator {
    private final String REQUEST_IMAGE = "/upload/image/";
    public static FileGenerator instance;
    String rootPath;

    private FileGenerator() {

    }
    public static FileGenerator FileGerator() {
        if(Objects.isNull(instance))
            instance = new FileGenerator();

        return instance;
    }

    public FileSave getSaveFile(File saveFile, MultipartFile originalFile) {
        String requestUrl = REQUEST_IMAGE + saveFile.getName() + getExtention(originalFile.getOriginalFilename());
        return new FileSave(saveFile.getName(), requestUrl, originalFile.getSize());
    }


    public String generatorFileNameWithUUID() {
        return UUID.randomUUID().toString().substring(0,4) + "_" + LocalDateTime.now().getNano();
    }

    public File generatorFile(String rootPath, String fileName, MultipartFile image) throws IOException {
        this.rootPath = rootPath;
        File rootFolder = makeRootPath();
        String ext = getExtention(image.getOriginalFilename());
        image.transferTo(new File(rootFolder, fileName + ext));
        File saveImage = new File(rootFolder.getAbsolutePath()+"/"+fileName);
        return saveImage;
    }

    private String getExtention(String originalFileName) {
        String[] exts = originalFileName.split("\\.");
        return "." + exts[exts.length -1];
    }

    private File makeRootPath() {
        File folder = new File(rootPath);
        if (!folder.exists()) {
            folder.mkdirs();
        }
        return folder;
    }
    public String getRootPath(String winRootPath, String macRootPath) {
        String osName = System.getProperty("os.name").toLowerCase();
        if (osName.contains("win")) {
            return winRootPath;
        }
        else if (osName.contains("mac")) {
            return macRootPath;
        }else {
            return "";
        }
    }
}
