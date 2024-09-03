import {LabelInput} from "../../Molecules/LabelInput/LabelInput";
import {LabelMultilineText} from "../../Molecules/LabelMultilineText/LabelMultilineText";
import {ButtonA} from "../../Atoms/Button/Button";
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {ImageListIndex} from "../../Atoms/ImageList/ImageListIndex";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/Store/store";
import axios from "axios";


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: end;
`

const Button = styled.div`
    padding: 10px;
`

const Container = styled.div`
    width: 80%;
`

interface Props {
    readonly projectId:number;
}

export const ProjectDetailTemplate = ({projectId}:Props)  => {
    const navigate = useNavigate();
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [review, setReview] = useState<string>("");
    const [projectImgs, setProjectImgs] =  useState<string[]>([]);


    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        if(request) {
            const imgList = [] as string[];
            axios.get('http://localhost:8080/get/detail-project', {
                params: {
                    projectId: projectId
                }
            })
                .then((result) => {
                    console.log(result.data);
                    setContent(result.data.content)
                    setTitle(result.data.title)
                    setReview(result.data.review)
                    result.data.projectImages.forEach((data: any) => {
                        imgList.push(data.requestUrl);
                    });
                    setProjectImgs([...imgList]);
                    setRequest(false);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    });

    return <Container>
        <LabelInput label="제목" type="text" text={title} readOnly={true}/>
        <ImageListIndex imgList={projectImgs}/>
        <LabelMultilineText label="프로젝트 내용" text={content} readOnly={true}/>
        <LabelMultilineText label="후기" text={review} minRows="10" readOnly={true}/>
        <ButtonContainer>
            <Button>
                <ButtonA label="뒤로가기" size="lg" onClick={() => {navigate("/")}}/>
            </Button>
        </ButtonContainer>
    </Container>
}
