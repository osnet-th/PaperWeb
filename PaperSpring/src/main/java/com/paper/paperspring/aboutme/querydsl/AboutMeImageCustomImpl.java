package com.paper.paperspring.aboutme.querydsl;


import com.paper.paperspring.aboutme.AboutMeImage;
import com.paper.paperspring.aboutme.QAboutMeImage;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AboutMeImageCustomImpl implements AboutMeImageCustom{

    private final JPAQueryFactory jpaQueryFactory;
    @Override
    public AboutMeImage findRecentImage() {
        QAboutMeImage aboutMeImage = QAboutMeImage.aboutMeImage;
        return jpaQueryFactory
                .selectFrom(aboutMeImage)
                .orderBy(aboutMeImage.insertDate.desc())
                .fetchFirst();

    }
}
