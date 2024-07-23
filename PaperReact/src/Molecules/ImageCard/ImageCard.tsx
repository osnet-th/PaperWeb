import {Card, CardActions, CardContent, CardMedia, Typography, Button} from "@mui/material";
import img from './img.png';
import styled from "@emotion/styled";
import {CardImage} from "../../Atoms/CardImage/CardImage";
import {TextButton} from "../../Atoms/TextButton/TextButton";
import * as React from "react";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
    padding: 60px;
`



const ButtonContainer = styled.div`
    align-items: end;
`


interface Props {
    readonly title:string;
    readonly summary:string;
    readonly onClick?: () => void;
}

export const ImageCard = ({title, summary, onClick}:Props) => {
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
                        <Button size="small" onClick={onClick}>Learn More</Button>
                    </ButtonContainer>
                </CardActions>
            </Card>
        </Container>
    );
}