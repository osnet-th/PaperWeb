import {Text} from "../../Atoms/Text/Text";
import {ImageCarousel} from "../../Organisms/ImageCarousel/ImageCarousel";
import styled from "@emotion/styled";


const Container = styled.div`
    justify-content: center;
`

const TextContainer = styled.div`
    text-align: center;
`

export const ImageCarouselTemplate = () => {
    return(
        <Container >
            <TextContainer>
                <Text text="Projects" variant="h2"/>
            </TextContainer>
            <ImageCarousel/>
        </Container>
    )
}