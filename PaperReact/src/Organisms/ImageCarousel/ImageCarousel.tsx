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
    readonly onClick: (id:number) => void;
}

export const ImageCarousel = ({items, onClick}:Props) => {
    return (
        <SliderContainer>
            <Slider {...settings}>
                {
                    items.map((item, index) => {
                        return <ImageCard key={item.id} id={item.id} title={item.title} img={item.img} summary={item.summary} onClick={onClick}/>
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

