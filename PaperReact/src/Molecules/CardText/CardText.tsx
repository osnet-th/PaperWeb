import {Text} from "../../Atoms/Text/Text";
import * as React from "react";
import {CardContent} from "@mui/material";
import styled from "@emotion/styled";
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";


const TitleContainer = styled.div`
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    text-align: center;
`

interface Props {
    readonly title: string;
    readonly content: string;
}

export const CardText = ({title, content}:Props) => {
    return (
    <>
        <Card sx={{ margin: 10, height:500 , width: 1000}}>
            <CardContent>
                <TitleContainer>
                    <Text text={title} />
                </TitleContainer>
                <Typography variant="body2">
                    {content}
                </Typography>
           </CardContent>
        </Card>
    </>
    )
}