import styled from "@emotion/styled";
import {CardText} from "../../Molecules/CardText/CardText";
import {Text} from "../../Atoms/Text/Text";

const Container = styled.div`
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;
`




const TextContainer = styled.div`
    text-align: center;
`
export const SelfIntroductionTemplate = () => {
    return (
        <>
            <TextContainer>
                <Text text="Self Introduction" variant="h3"/>
            </TextContainer>
            <Container>
                <CardText title="자기소개" content=""/>
                <CardText title="경력사항" content=""/>
            </Container>
            <Container>
                <CardText title="포부" content=""/>
                <CardText title="직무에 대한 강점과 약점" content=""/>
            </Container>
        </>
    )
}
