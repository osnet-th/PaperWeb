import {Button, Paper} from "@mui/material";
import {ImageCard} from "../../Molecules/ImageCard/ImageCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";


const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};

const SliderContainer = styled.div`
    display: block;
`


export const ImageCarousel = () => {
    return (
        <SliderContainer>
            <Slider {...settings}>
                {
                    items.map((item, index) => {
                        return <Project item={item} key={index}/>
                    })
                }
            </Slider>
        </SliderContainer>
    )
}


type Item = {
    title: string,
    summary: string,
    color: string,
    href: string
}

interface ProjectProps {
    item: Item
}

const Project = ({item}: ProjectProps) => {
    return (
        <ImageCard title={item.title} summary={item.summary}/>
    )
}

const items: Item[] = [
    {
        title: "Lear Music Reader",
        summary: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8",
        href: 'https://github.com/Learus/Lear-Music-Reader'
    },
    {
        title: "Hash Code 2019",
        summary: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1",
        href: 'https://github.com/Learus/HashCode2019'
    },
    {
        title: "Terrio",
        summary: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78",
        href: 'https://play.google.com/store/apps/details?id=com.Brewery.Terrio'
    },
    {
        title: "React Carousel",
        summary: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E",
        href: 'https://github.com/Learus/react-material-ui-carousel'
    }
]