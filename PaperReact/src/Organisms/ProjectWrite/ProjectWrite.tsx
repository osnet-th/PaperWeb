import {LabelInput} from "../../Molecules/LabelInput/LabelInput";
import {LabelMultilineText} from "../../Molecules/LabelMultilineText/LabelMultilineText";
import React, {useState} from "react";
import {LabelImageList} from "../../Molecules/LabelImageList/LabelImageList";
import {ButtonA} from "../../Atoms/Button/Button";
import styled from "@emotion/styled";


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`

export const ProjectWrite = () => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [postImgs, setPostImgs] = useState<File[]>([]);
    const [previewImgs, setPreviewImgs] = useState<string[]>([]);


    const changeImgs = (e: React.ChangeEvent<HTMLInputElement>) => {
        imagePreview(e.target.files);
        uploadImgFn(e.target.files);
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

    const uploadImgFn = (imgFiles : FileList | null) => {
        if(!imgFiles) return ;
        if(postImgs.length >= 4) return;

        for(let i=0; i<imgFiles.length ; i++) {
            postImgs.push(imgFiles[i]);
        }


        console.log(postImgs);
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


    const uploadProjectWrite = () => {
        console.log(title, content, postImgs);
    }

    return <div>
        <LabelInput label="제목" type="text" onChange={titleWrite}/>
        <LabelImageList previewImg={previewImgs} imageUpload={changeImgs} imageDelete={imageDelete}/>
        <LabelMultilineText label="프로젝트 내용" onChange={contentWrite}/>
        <ButtonContainer>
            <ButtonA label="취소"/>
            <ButtonA label="작성" onClick={uploadProjectWrite}/>
        </ButtonContainer>
    </div>
}