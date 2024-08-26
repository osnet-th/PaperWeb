import {Card, CardActions, CardContent, CardMedia, Typography, Button} from "@mui/material";
import img from './img.png';
import styled from "@emotion/styled";
import {CardImage} from "../../Atoms/CardImage/CardImage";
import * as React from "react";


const Container = styled.div`
    padding: 60px;
`



const ButtonContainer = styled.div`
    align-items: end;
`


interface Props {
    readonly id: number;
    readonly title:string;
    readonly summary:string;
    readonly img: string;
    readonly onClick: (id:number) => void;
}

export const ImageCard = ({id, title, summary, img, onClick}:Props) => {
    return (
        <Container>
            <Card>
                <CardImage img={img}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {summary}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonContainer>
                        <Button size="small" onClick={()=> {onClick(id)}}>더보기</Button>
                    </ButtonContainer>
                </CardActions>
            </Card>
        </Container>
    );
}