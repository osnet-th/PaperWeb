import styled from "@emotion/styled";


const Container = styled.h4`
    
`
interface Props {
    readonly label:string;
}

export const Label = ({label}:Props) => {
    return <Container>{label}</Container>
}