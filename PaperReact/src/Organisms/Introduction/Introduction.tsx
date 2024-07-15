import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import styled from "@emotion/styled";

interface MainFeaturedPostProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        title: string;
    };
}

const PreContainer = styled.pre`
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    
`


export const Introduction = (props: MainFeaturedPostProps) => {
    const { post } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState(0);


    const typingTitle = () => {
        const time = setTimeout(() => {
            setTitle(() => {
                let result = count === 0 ? post.title[count] : title + post.title[count];
                setCount(count + 1);
                return result;
            });
        }, 200)

        if (count >= post.title.length) {
            clearTimeout(time);
            typingDescription();
        }
    };
    const typingDescription = () => {
        const time = setTimeout(() => {
            setDescription(() => {
                let result = count === 0 ? post.description[count - title.length] : description + post.description[count - title.length];
                setCount(count + 1);
                return result;
            });
        }, 100)

        if (count - title.length >= post.description.length) {
            clearTimeout(time);
        }
    };


    useEffect(() => {
        typingTitle();
    });

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundImage: `url(${post.image})`,
                height: 600
            }}
        >
            <Grid container>
                <Grid item md={11}>
                    <Box
                        sx={{

                            position: 'relative',
                            p: { xs: 4, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                        <PreContainer>
                            {description}
                        </PreContainer>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}