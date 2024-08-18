import {Header} from "../../Organisms/Header/Header";
import styled from "@emotion/styled";
import {ImageCarouselTemplate} from "../../Templates/ProjectImageCarouselTemplate/ImageCarouselTemplate";
import {AboutMeTemplate} from "../../Templates/AboutMeTemplate/AboutMeTemplate";
import {PostsTemplate} from "../../Templates/PostsTemplate/PostsTemplate";
import * as React from "react";
import {Introduction} from "../../Organisms/Introduction/Introduction";
import img from "./img.jpg";
import {Footer} from "../../Organisms/Footer/Footer";
import {Fab} from "@mui/material";

const CarouselContainer = styled.div`
    padding: 30px;
`


const FloatingContainer = styled.div`
    position: fixed; 
    right: 10px;
    bottom: 125px;
    transform: translateX(-50%);
`


const mainFeaturedPost = {
    title: '안녕하세요. 방문해주셔서 감사합니다.',
    description:
        "소스코드는 github에 PaperWeb 으로 올려두었습니다.\n" +
        "React + SpringBoot로 제작한 포트폴리오 페이지입니다.\n" +
        "코드에 이상한 부분을 발견하시면 실시간 채팅으로 남겨주시면 많은 도움이 됩니다!",
    image: img,
    imageText: 'main image description',
};


export const MainPage = () => {

    return (<>
        <Header title="Blog"/>
        <Introduction post={mainFeaturedPost}/>
        <AboutMeTemplate/>
        <CarouselContainer>
            <ImageCarouselTemplate/>
        </CarouselContainer>
        <PostsTemplate/>
        <FloatingContainer>
            <Fab variant="extended" color="primary">
                chat
            </Fab>
        </FloatingContainer>
        <Footer description="저작권 정보 기입 필요" title="저작권 정보" />
    </>);
}