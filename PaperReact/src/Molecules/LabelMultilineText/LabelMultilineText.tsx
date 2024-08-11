import {Label} from "../../Atoms/Label/Label";
import {MultilineInput} from "../../Atoms/MultilineInput/MultilineInput";
import styled from "@emotion/styled";


const Container = styled.div`
    
`

interface Props {
    readonly label:string;
    readonly onChange:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}




export const LabelMultilineText = ({label, onChange}:Props) => {
    return <Container>
        <Label label={label}/>
    <MultilineInput onChange={onChange}/>
</Container>
}