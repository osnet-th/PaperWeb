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

interface Props {
    readonly items: Item[];
}

export const ImageCarousel = ({items}:Props) => {
    return (
        <SliderContainer>
            <Slider {...settings}>
                {
                    items.map((item, index) => {
                        console.log("그려짐", item);
                        return <ImageCard id={item.id} title={item.title} img={item.img} summary={item.summary}/>
                    })
                }
            </Slider>
        </SliderContainer>
    )
}


type Item = {
    id: number,
    title: string,
    summary: string,
    img: string
}

