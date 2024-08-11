import {ProjectWrite} from "../../Organisms/ProjectWrite/ProjectWrite";
import styled from "@emotion/styled";
import {ButtonA} from "../../Atoms/Button/Button";
import {Header} from "../../Organisms/Header/Header";
import * as React from "react";
import {useState} from "react";


const Container = styled.div`
    padding : 20px;
    display: flex;
    flex-direction: column;
    width: 700px ;
    height: 500px;
`


export const ProjectWritePage = () => {

    return <>
        <Header title="Blog"/>
    <Container>
        <ProjectWrite/>

    </Container>
        </>
}
