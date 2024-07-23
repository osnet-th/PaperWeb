import {Text} from "../../Atoms/Text/Text";
import {ImageCarousel} from "../../Organisms/ImageCarousel/ImageCarousel";
import styled from "@emotion/styled";
import {TextButton} from "../../Atoms/TextButton/TextButton";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
    justify-content: center;
`

const TextContainer = styled.div`
    text-align: center;
`

const TextButtonContainer = styled.div`
    text-align: end;
`

export const ImageCarouselTemplate = () => {
    const navigate = useNavigate();
    return(
        <Container >
            <TextContainer>
                <Text text="Projects" variant="h2"/>
            </TextContainer>
            {

                // TODO: 관리자 권한이 있는 경우에만 추가하기 버튼이 나오도록 변경
                true ?
                    <TextButtonContainer>
                        <TextButton text="추가하기" onClick={() => navigate("/upload/project")}/>
                    </TextButtonContainer>
                    : null
            }
            <ImageCarousel/>
        </Container>
    )
}