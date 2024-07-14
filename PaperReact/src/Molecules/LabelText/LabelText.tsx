import styled from "@emotion/styled";
import {Label} from "../../Atoms/Label/Label";
import {Text} from "../../Atoms/Text/Text";



const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`

const TextContainer = styled.div`
    margin-left : 10px;
`

interface Props {
    readonly label:string;
    readonly text:string;
}

export const LabelText = ({label, text}: Props) => {
    return <Container>
        <Label label={label}/>
        <TextContainer>
            <Text variant="subtitle2`" text={text}/>
        </TextContainer>
    </Container>

}


