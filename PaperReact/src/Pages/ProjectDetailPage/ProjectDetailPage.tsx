import styled from "@emotion/styled";
import {ButtonA} from "../../Atoms/Button/Button";
import {Header} from "../../Organisms/Header/Header";
import * as React from "react";
import {useState} from "react";


const Container = styled.div`
    padding : 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% ;
    height: 100%;
`


export const ProjectDetailPage = () => {
    return <>
        <Header title="Blog"/>
        <Container>
        </Container>
        </>
}
