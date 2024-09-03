import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {TextButton} from "../../Atoms/TextButton/TextButton";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/Store/store";
import {logout} from "../../Redux/Slice/loginSlice";
import {useState} from "react";
import styled from "@emotion/styled";
import axios from "axios";

interface HeaderProps {
    title: string;
}

const TextContainer = styled.div`
    width: 65px;
`

export const Header = (props: HeaderProps) => {
    const {title} = props;
    const navigate = useNavigate();
    const auth = useSelector((state: RootState) => state.auth.isLogin);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <Toolbar sx={{borderBottom: 1, borderColor: 'divider', height: 80}}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    onClick={() => {navigate("/")}}
                    sx={{flex: 3,
                        '&:hover': {
                            cursor: "pointer",
                        },
                    }}
                >
                    {title}
                </Typography>
                <TextContainer>
                {
                    auth ?
                        <TextButton text="LOGOUT" onClick={() => {
                            axios.post('http://localhost:8080/logout');
                            dispatch(logout());
                        }}/>
                        :<TextButton text="ADMIN" onClick={() => {
                            navigate("/login");
                        }}/>
                }
                </TextContainer>
            </Toolbar>
        </React.Fragment>
    );
}