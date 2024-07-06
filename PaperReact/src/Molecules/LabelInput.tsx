import styled from "@emotion/styled";
import {Label} from "../Atoms/Label/Label";
import {TextInput} from "../Atoms/TextInput/TextInput";


const Container = styled.div`
    
`

interface Props {
    readonly label:string;
    readonly type:string;
}

export const LabelInput = ({label, type}:Props) => {
    return <Container>
        <Label label={label}/>
        <TextInput type={type}/>
    </Container>
}