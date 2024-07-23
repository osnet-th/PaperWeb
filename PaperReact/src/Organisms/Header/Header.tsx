import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {TextButton} from "../../Atoms/TextButton/TextButton";
import {useNavigate} from "react-router-dom";

interface HeaderProps {
    title: string;
}

export const Header = (props: HeaderProps) => {
    const {title} = props;
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Toolbar sx={{borderBottom: 1, borderColor: 'divider', height: 80}}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    sx={{flex: 2}}
                >
                    {title}
                </Typography>
                {
                    true ?
                        <TextButton text="ADMIN" onClick={() => {
                            navigate("/login");
                        }}/>
                        : <TextButton text="LOGOUT" onClick={() => {
                            console.log("LOGOUT")
                        }}/>
                }
            </Toolbar>
        </React.Fragment>
    );
}