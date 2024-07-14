import {Header} from "../../Organisms/Header/Header";
import styled from "@emotion/styled";
import {ImageCarouselTemplate} from "../../Templates/ImageCarouselTemplate/ImageCarouselTemplate";
import {AboutMeTemplate} from "../../Templates/AboutMeTemplate/AboutMeTemplate";
import {PostsTemplate} from "../../Templates/PostsTemplate/PostsTemplate";


const CarouselContainer = styled.div`
    padding: 30px;
`


export const MainPage = () => {
    return (<>
        <Header />
        <AboutMeTemplate />
        <CarouselContainer>
            <ImageCarouselTemplate />
        </CarouselContainer>
        <PostsTemplate />
    </>);
}