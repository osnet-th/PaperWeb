package com.paper.paperspring.upload.aboutme;

import com.paper.paperspring.exception.JPAFindException;
import com.paper.paperspring.exception.JPAInsertException;
import com.paper.paperspring.exception.NotSupportedFileException;
import com.paper.paperspring.upload.Upload;
import com.paper.paperspring.upload.UploadImageDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.util.*;


@Slf4j
@Service
public class AboutMeUploadService extends Upload {

    @Autowired
    AboutMeImageRepository imageRepository;
    @Autowired
    AboutMeContentRepository contentRepository;

    // 저장 및 수정
    @Transactional
    public boolean uploadAboutMe(AboutMeDto aboutMe) {
        try {
            insertAboutMeImage(generateAboutMeImage(aboutMe.getImageFile()));
            insertAboutMeContents(generateAboutMeContents(aboutMe.getContents()));
            return true;
        } catch (IOException e) {
            log.error("About Me Image 객체 저장 중, IOException 발생 - {}", e.getMessage());
            return false;
        } catch (NullPointerException e) {
            log.error("About Me 객체 생성 중, Null 값이 존재합니다. - {}", e.getMessage());
            return false;
        } catch (JPAInsertException e) {
            log.error("About Me 객체 추가 중 에러가 발생 했습니다. - {}", e.getMessage());
            return false;
        }
    }
    public AboutMeDto getAboutMe() {
        try {
            return generateAboutMeDto(getAboutMeImage(), getAboutMeContents());
        } catch (RuntimeException e) {
            log.error("About Me 객체 생성에 실패했습니다. 실패 사유: {}", e.getMessage());
            return null;
        }
    }

    private void insertAboutMeImage(AboutMeImageEntity imageEntity) throws JPAInsertException{
        try {
            imageRepository.save(imageEntity);
        } catch (Exception e) {
            log.error("About Me Image 추가 중 에러가 발생했습니다. {}", e.getMessage());
            throw new JPAInsertException(e.getMessage());
        }
    }

    private String conversionImage(byte[] imageBytes) {
        Base64.Encoder encoder = Base64.getEncoder();
        byte[] photoEncode = encoder.encode(imageBytes);
        try {
            return new String(photoEncode, "UTF8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }
    private AboutMeImageEntity generateAboutMeImage(MultipartFile image) throws NullPointerException, NotSupportedFileException, IOException {
        try {
            if(!image.getContentType().equals("image"))
                throw new NotSupportedFileException("이미지 파일만 지원합니다. - 요청 파일("+image.getContentType()+"는 지원하지 않습니다.");

            return new AboutMeImageEntity(image.getName(), conversionImage(image.getBytes()), LocalDateTime.now());
        } catch (NullPointerException e) {
            log.error("AboutMe Image 데이터 조합 중 Null 값이 존재합니다. {}", e.getMessage());
            throw e;
        } catch (IOException e) {
            log.error("MultipartFile image 바이트 데이터 조회 중 에러가 발생했습니다. {}", e.getMessage());
            throw e;
        }
    }
    private List<AboutMeContentEntity> generateAboutMeContents(Map<AboutMeDto.Tag, String> contents) throws NullPointerException{
        try {
            List<AboutMeContentEntity> list = new ArrayList<>(contents.size());
            contents.keySet().forEach(key -> list.add(new AboutMeContentEntity(key.name(), contents.get(key))));
            return list;
        } catch (NullPointerException e) {
            throw e;
        }
    }

    private void insertAboutMeContents(List<AboutMeContentEntity> entities) throws JPAInsertException{
        try {
            contentRepository.saveAll(entities);
        } catch (Exception e) {
            log.error("AboutMe Contents 추가에 실패했습니다. 실패 사유: {}", e.getMessage());
            throw new JPAInsertException(e.getMessage());
        }
    }

    private AboutMeDto generateAboutMeDto(UploadImageDto image, Map<AboutMeDto.Tag, String> contents) {
        AboutMeDto dto = new AboutMeDto(image, contents);
        contents.clear();
        return dto;
    }

    private UploadImageDto getAboutMeImage() throws RuntimeException{
        try {
            AboutMeImageEntity image = imageRepository.findTop1OrderByInsertDateDesc();
            return new UploadImageDto(image.getFileName(), image.getFile());
        } catch (Exception e) {
            log.error("AboutMe Image 조회에 실패했습니다. {}", e.getMessage());
            throw new JPAFindException(e.getMessage());
        }
    }

    private Map<AboutMeDto.Tag, String> getAboutMeContents() throws RuntimeException {
        Map<AboutMeDto.Tag, String> result = new HashMap<>();
        try {
            List<AboutMeContentEntity> contents = contentRepository.findAll();
            contents.forEach(content -> {
                result.put(AboutMeDto.Tag.valueOf(content.getTag()), content.getContent());
            });
            return result;
        } catch (Exception e) {
            log.error("AboutMe Contents 조회에 실패했습니다. {}", e.getMessage());
            throw new JPAFindException(e.getMessage());
        }
    }
}
