import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Divider} from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000">
                도메인 넣어야지
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

interface FooterProps {
    description: string;
    title: string;
}

export const Footer = (props: FooterProps) => {
    const { description, title } = props;

    return (
        <>
        <Divider sx={{marginTop:10, marginLeft:5, marginRight:5}}/>
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
        </>
    );
}