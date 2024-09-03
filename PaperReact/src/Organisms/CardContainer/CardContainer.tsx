import {Card, CardContent} from "@mui/material";
import {AvatarContainer} from "../../Atoms/AvatarContainer/AvatarContainer";
import {LabelText} from "../../Molecules/LabelText/LabelText";
import styled from "@emotion/styled";
import {Text} from "../../Atoms/Text/Text";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const ContentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const TitleContainer = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
`

const AboutContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`

type Item = {
    tag: string,
    content: string;
}

interface Props {
    readonly photo: string;
    readonly items: Item[];
}


export const CardContainer = ({photo, items}:Props) => {
    return(
        <>
        <Container>
            <Card sx={{boxShadow: 3, width: 1000}}>
                <CardContent>
                    <TitleContainer>
                        <Text text="ABOUT ME" />
                    </TitleContainer>
                    <ContentsContainer>
                        <AvatarContainer imgUrl={photo}/>
                        <AboutContainer>
                            {
                                items.map((i) => {
                                    return <LabelText
                                        key={i.tag}
                                        label={i.tag}
                                        text={i.content}
                                    />
                                })
                            }
                        </AboutContainer>
                    </ContentsContainer>
                </CardContent>
            </Card>
        </Container>
        </>
    );
}