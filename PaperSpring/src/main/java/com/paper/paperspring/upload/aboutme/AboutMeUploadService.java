package com.paper.paperspring.upload.aboutme;

import com.paper.paperspring.exception.JPAFindException;
import com.paper.paperspring.exception.JPAInsertException;
import com.paper.paperspring.exception.NotSupportedFileException;
import com.paper.paperspring.login.AccountDto;
import com.paper.paperspring.upload.Upload;
import com.paper.paperspring.upload.UploadImageDto;
import lombok.RequiredArgsConstructor;
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
    public boolean uploadAboutMeContents(List<AboutMeDto.Content> contents) {
        try {
            insertAboutMeContents(generateAboutMeContents(contents));
            return true;
        } catch (NullPointerException e) {
            log.error("About Me 객체 생성 중, Null 값이 존재합니다. - {}", e.getMessage());
            return false;
        } catch (JPAInsertException e) {
            log.error("About Me 객체 추가 중 에러가 발생 했습니다. - {}", e.getMessage());
            return false;
        }
    }

    public boolean uploadAboutMeImage(MultipartFile image) {
        try {
            insertAboutMeImage(generateAboutMeImage(image));
            return true;
        } catch (IOException e) {
            log.error("About Me Image 객체 저장 중, IOException 발생 - {}", e.getMessage());
            return false;
        } catch (JPAInsertException e) {
            log.error("About Me 객체 추가 중 에러가 발생 했습니다. - {}", e.getMessage());
            return false;
        } catch (NotSupportedFileException e) {
            log.error("지원하지 않는 파일 형식입니다. - {}", e.getMessage());
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

    private void insertAboutMeImage(AboutMeImageEntity imageEntity) throws JPAInsertException {
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
        List<String> sExt = Arrays.asList("image/jpeg", "image/pjpeg", "image/png", "image/gif", "image/bmp", "image/x-windows-bmp");
        try {
            if (!sExt.contains(image.getContentType()))
                throw new NotSupportedFileException("이미지 파일만 지원합니다. - 요청 파일(" + image.getContentType() + ") 는 지원하지 않습니다.");

            return new AboutMeImageEntity(image.getName(), conversionImage(image.getBytes()), LocalDateTime.now());
        } catch (NullPointerException e) {
            log.error("AboutMe Image 데이터 조합 중 Null 값이 존재합니다. {}", e.getMessage());
            throw e;
        } catch (IOException e) {
            log.error("MultipartFile image 바이트 데이터 조회 중 에러가 발생했습니다. {}", e.getMessage());
            throw e;
        }
    }

    private List<AboutMeContentEntity> generateAboutMeContents(List<AboutMeDto.Content> contents) throws NullPointerException {
        try {
            List<AboutMeContentEntity> list = new ArrayList<>(contents.size());
            contents.forEach(content -> list.add(new AboutMeContentEntity(content.getTag(), content.getContent())));
            return list;
        } catch (NullPointerException e) {
            throw e;
        }
    }

    private void insertAboutMeContents(List<AboutMeContentEntity> entities) throws JPAInsertException {
        try {
            contentRepository.saveAll(entities);
        } catch (Exception e) {
            log.error("AboutMe Contents 추가에 실패했습니다. 실패 사유: {}", e.getMessage());
            throw new JPAInsertException(e.getMessage());
        }
    }

    private AboutMeDto generateAboutMeDto(UploadImageDto image, List<AboutMeDto.Content> contents) {
        AboutMeDto dto = new AboutMeDto(image, contents);
        contents.clear();
        return dto;
    }

    private UploadImageDto getAboutMeImage() throws RuntimeException {
        try {
            Optional<AboutMeImageEntity> image = imageRepository.findFirstByOrderByInsertDateDesc();
            if (image.isPresent()) {
                return new UploadImageDto(image.get().getFileName(), image.get().getFile());
            }
            return null;
        } catch (Exception e) {
            log.error("AboutMe Image 조회에 실패했습니다. {}", e.getMessage());
            throw new JPAFindException(e.getMessage());
        }
    }

    private List<AboutMeDto.Content> getAboutMeContents() throws RuntimeException {
        List<AboutMeDto.Content> result = new ArrayList<>();
        try {
            List<AboutMeContentEntity> contents = contentRepository.findAll();
            contents.forEach(content -> {
                result.add(new AboutMeDto.Content(content.getTag(), content.getContent()));
            });
            return result;
        } catch (Exception e) {
            log.error("AboutMe Contents 조회에 실패했습니다. {}", e.getMessage());
            throw new JPAFindException(e.getMessage());
        }
    }
}
