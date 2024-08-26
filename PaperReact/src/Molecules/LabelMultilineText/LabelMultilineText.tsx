import {Label} from "../../Atoms/Label/Label";
import {MultilineInput} from "../../Atoms/MultilineInput/MultilineInput";
import styled from "@emotion/styled";


const Container = styled.div`
    
`

interface Props {
    readonly label:string;
    readonly text?: string;
    readonly readOnly?: boolean;
    readonly onChange?:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}




export const LabelMultilineText = ({label, readOnly=false, text="", onChange}:Props) => {
    return <Container>
        <Label label={label}/>
    <MultilineInput onChange={onChange} text={text} readOnly={readOnly} />
</Container>
}