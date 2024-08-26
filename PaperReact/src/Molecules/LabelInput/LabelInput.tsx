import styled from "@emotion/styled";
import {Label} from "../../Atoms/Label/Label";
import {TextInput} from "../../Atoms/TextInput/TextInput";


const Container = styled.div`
    
`

interface Props {
    readonly label:string;
    readonly type:string;
    readonly readOnly?:boolean;
    readonly text?: string;
    readonly onChange?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabelInput = ({label, type, readOnly=false, text="", onChange}:Props) => {
    return <Container>
        <Label label={label}/>
        <TextInput type={type} onChange={onChange} text={text} readOnly={readOnly}/>
    </Container>
}