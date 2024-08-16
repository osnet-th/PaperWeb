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


export const CardContainer = () => {
    const [photo, setPhoto] = useState("");
    const [tags , setTags] = useState(Array<Item>());
    const [request, setRequest] = useState<boolean>(true);
    useEffect(() => {
        if(request) {
            axios({
                url: 'http://localhost:8080/get/about-me',
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                },
                // data: JSON.stringify(contents),
            })
            .then((result) => {
                console.log(result.data);
                if(result.data.contents.length === 0) setRequest(false);
                setPhoto("");
                setPhoto(photo + result.data.myPhotos.requestUrl);
                console.log(photo);


                setTags(result.data.contents);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    });



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
                                tags.map((i) => {
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