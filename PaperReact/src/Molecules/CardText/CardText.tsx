import {Text} from "../../Atoms/Text/Text";
import * as React from "react";
import {CardContent} from "@mui/material";
import styled from "@emotion/styled";
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";


const TitleContainer = styled.div`
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    text-align: center;
`

interface Props {
    readonly title: string;
    readonly content: string[];
}

export const CardText = ({title, content}:Props) => {

    return (
    <>
        <Card sx={{ marginTop: 10, marginLeft: 5, marginRight:5,height:500 , width: 1000}}>
            <CardContent>
                <TitleContainer>
                    <Text text={title} variant="h5"/>
                </TitleContainer>
                    {
                        content.map((text, index) => {
                           return <Box key={index}>
                                <Typography key={index} variant="body2" component="span">
                                    {text}
                                </Typography>
                           </Box>
                        })
                    }
           </CardContent>
        </Card>
    </>
    )
}