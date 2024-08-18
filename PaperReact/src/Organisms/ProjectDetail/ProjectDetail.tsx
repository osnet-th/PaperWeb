import {LabelInput} from "../../Molecules/LabelInput/LabelInput";
import {LabelMultilineText} from "../../Molecules/LabelMultilineText/LabelMultilineText";
import React, {useState} from "react";
import {LabelImageList} from "../../Molecules/LabelImageList/LabelImageList";
import {ButtonA} from "../../Atoms/Button/Button";
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
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

export const ProjectDetail = () => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [postImgs, setPostImgs] = useState<File[]>([]);
    const [previewImgs, setPreviewImgs] = useState<string[]>([]);
    const navigate = useNavigate();


    const changeImgs = (e: React.ChangeEvent<HTMLInputElement>) => {
        imagePreview(e.target.files);
        setUploadImg(e.target.files);
    }
    const imagePreview = (imgFiles : FileList | null) => {
        if(!imgFiles) return ;
        const imgUrls = [...previewImgs];
        for (let i=0; i<imgFiles.length; i++) {
            if(imgUrls.length >= 4) break;
            imgUrls.push(URL.createObjectURL(imgFiles[i]));
        };

        setPreviewImgs(imgUrls);
        console.log(imgUrls);
    }

    const setUploadImg = (imgFiles : FileList | null) => {
        if(!imgFiles) return ;
        if(postImgs.length >= 4) return;

        for(let i=0; i<imgFiles.length ; i++) {
            postImgs.push(imgFiles[i]);
        }
    }

    const imageDelete = (index: number) => {
        const imgPreview = previewImgs.filter((el, idx) => idx !== index);
        setPreviewImgs([...imgPreview]);

        const imgUpload = postImgs.filter((el, idx) => idx !== index);
        setPostImgs([...imgUpload]);
    }


    // 배열을 state 로 사용하는 경우, 참조하는 변수의 주소값이 바뀌지 않으면 재렌더링이 안됨
    // 문법을 spread operator라고 부른다.
    // [...array] 이렇게 사용하면 array를 해체한 후 배열에 넣어 주소가 바뀌게 됨

    const contentWrite = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setContent(e.target.value);
    }

    const titleWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const summaryWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSummary(e.target.value);
    }

    const uploadProjectWrite = () => {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("summary", summary);
        formData.append("content", content);
        for (let i = 0; i < postImgs.length; i++) {
            formData.append('imgFiles', postImgs[i]);
        }


        axios({
            url: 'http://localhost:8080/upload/projects',
            method: 'post',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            // data: JSON.stringify(contents),
        })
            .then((result) => {
                console.log("요청 성공", result.data)
            })
            .catch((error) => {
                console.log('요청실패')
                console.log(error)
            })



        console.log(title, content, postImgs);
    }

    const writeCancle = () => {
        setTitle("");
        setContent("");
        setSummary("");
        setPreviewImgs([]);
        setPostImgs([]);

        navigate("/");
    }

    return <Container>
        <LabelInput label="제목" type="text" onChange={titleWrite}/>
        <LabelImageList previewImg={previewImgs} imageUpload={changeImgs} imageDelete={imageDelete}/>
        <LabelInput label="요약" type="text" onChange={summaryWrite}/>
        <LabelMultilineText label="프로젝트 내용" onChange={contentWrite}/>
        <ButtonContainer>
            <Button>
                <ButtonA label="취소" size="lg" onClick={writeCancle}/>
            </Button>
            <Button>
                <ButtonA label="작성" size="lg" onClick={uploadProjectWrite}/>
            </Button>
        </ButtonContainer>
    </Container>
}