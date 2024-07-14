import {Posts} from "../../Organisms/Posts/Posts";
import {Text} from "../../Atoms/Text/Text";
import styled from "@emotion/styled";


const Container = styled.div`
    justify-content: center;
    margin-top: 100px;
    padding: 30px
`
const TextContainer = styled.div`
    text-align: center;
    margin-bottom: 50px;
`

export const PostsTemplate = () => {
    return (
    <Container>
        <TextContainer>
            <Text text="Posts" variant="h2"/>
        </TextContainer>
        <Posts />
    </Container>
    );
}