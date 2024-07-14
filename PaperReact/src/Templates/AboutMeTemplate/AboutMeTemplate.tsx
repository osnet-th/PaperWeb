import styled from "@emotion/styled";
import {CardContainer} from "../../Organisms/CardContainer/CardContainer";


const Container = styled.div`
    justify-content: center;
    padding: 70px;
`

export const AboutMeTemplate = () => {
    return (
        <Container>
            <CardContainer/>
        </Container>
    );
}