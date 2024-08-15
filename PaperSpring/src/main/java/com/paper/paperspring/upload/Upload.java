package com.paper.paperspring.upload;

import com.paper.paperspring.upload.util.FileGenerator;
import com.paper.paperspring.upload.util.FileSave;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Objects;


@Slf4j
public abstract class Upload {

    @Value("${spring.upload.root.win}")
    String winRootPath;
    @Value("${spring.upload.root.mac}")
    String macRootPath;

    FileGenerator fileGenerator = null;

    public List<FileSave> imageUrlBasedUpload(List<MultipartFile> images) {
        return images.stream().map(image -> {
            try {
                return imageUrlBasedUpload(image);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }).toList();
    }

    public FileSave imageUrlBasedUpload(MultipartFile image) throws IOException {
        validateFile(image);
        fileGenerator = FileGenerator.FileGerator();
        String newFileName = fileGenerator.generatorFileNameWithUUID();
        File imageFile = fileGenerator.generatorFile(fileGenerator.getRootPath(winRootPath, macRootPath), newFileName, image);
        return fileGenerator.getSaveFile(imageFile, image);
    }

    private void validateFile(MultipartFile file) {
        if (file.isEmpty()) {
            log.error("빈 파일은 저장할 수 없습니다.");
        }

        if (!file.getContentType().contains("image")) {
            log.error("이미지만 저장 가능합니다.");
        }
    }




}
