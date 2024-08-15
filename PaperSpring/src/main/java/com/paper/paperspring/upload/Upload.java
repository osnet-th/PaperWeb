package com.paper.paperspring.upload;

import com.paper.paperspring.upload.util.FileGenerator;
import com.paper.paperspring.upload.util.FileSave;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Objects;


@Slf4j
public abstract class Upload {

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
        fileGenerator = FileGerator();
        String newFileName = fileGenerator.generatorFileNameWithUUID();
        File imageFile = fileGenerator.generatorFile(newFileName, image);
        return new FileSave(imageFile, image.getOriginalFilename(), image.getSize());
    }


    private void validateFile(MultipartFile file) {
        if (file.isEmpty()) {
            log.error("빈 파일은 저장할 수 없습니다.");
        }

        if (!file.getContentType().contains("image")) {
            log.error("이미지만 저장 가능합니다.");
        }
    }


    private FileGenerator FileGerator() {
        if(Objects.isNull(fileGenerator))
            return FileGenerator.getInstance();
        return fileGenerator;
    }

}
