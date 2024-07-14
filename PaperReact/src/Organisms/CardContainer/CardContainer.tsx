import {Card, CardContent} from "@mui/material";
import {AvatarContainer} from "../../Atoms/AvatarContainer/AvatarContainer";
import {LabelText} from "../../Molecules/LabelText/LabelText";
import styled from "@emotion/styled";
import {Text} from "../../Atoms/Text/Text";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const ContentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const TitleContainer = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
`

const AboutContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`


export const CardContainer = () => {
    return(
        <Container>
            <Card sx={{boxShadow: 3, width: 1000}}>
                <CardContent>
                    <TitleContainer>
                        <Text text="ABOUT ME" />
                    </TitleContainer>
                    <ContentsContainer>
                        <AvatarContainer/>
                        <AboutContainer>
                            <LabelText label="이름 :" text="이태형"/>
                            <LabelText label="생년월일 :" text="1998.12.14"/>
                            <LabelText label="학력 :" text="명지전문대 졸업 - 방송통신대학교 재학중"/>
                            <LabelText label="직업 :" text="웹 개발자"/>
                        </AboutContainer>
                    </ContentsContainer>
                </CardContent>
            </Card>
        </Container>
    );
}