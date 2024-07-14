import {Card} from "@mui/material";
import {CardImage} from "../../Atoms/CardImage/CardImage";
import velog from "./velog.png"
import github from "./github.png"
import styled from "@emotion/styled";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-around;
    
`

export const Posts = () => {
    return (
    <Container>
        <Card sx={
            {   boxShadow: 3,
                width: 1100 ,
                borderRadius:8,
                '&:hover': {
                    cursor: "pointer",
                },
            }}
            onClick={() => window.open("https://velog.io/@thlee98/posts")} >
            <CardImage img={velog} />
        </Card>
        <Card sx={
            {   boxShadow: 3,
                width: 1100,
                borderRadius:8,
                '&:hover': {
                    cursor: "pointer",
                },
            }} onClick={() => window.open("https://github.com/osnet-th")}>
            <CardImage img={github} />
        </Card>
    </Container>
    )
}