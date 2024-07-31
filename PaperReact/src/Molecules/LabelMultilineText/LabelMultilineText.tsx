import {Label} from "../../Atoms/Label/Label";
import {MultilineInput} from "../../Atoms/MultilineInput/MultilineInput";
import styled from "@emotion/styled";


const Container = styled.div`
    
`

interface Props {
    readonly label:string;
}

export const LabelMultilineText = ({label}:Props) => {
    return <Container>
        <Label label={label}/>
    <MultilineInput/>
</Container>
}