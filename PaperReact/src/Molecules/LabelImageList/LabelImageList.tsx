import {Label} from "../../Atoms/Label/Label";
import {ImageListIndex} from "../../Atoms/ImageList/Index";
import styled from "@emotion/styled";
import React, {useState} from "react";


const LabelContainer = styled.div`
    padding-left: 15px;
    display: inline-block;
`

const LabelFor = styled.label`
`

const LabelText = styled.div`
    width: 150px;
    height: 30px;
    background: #fff;
    border: 1px solid rgb(77,77,77);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: rgb(77,77,77);
        color: #fff;
    }
`

const Input = styled.input`
    display: none;
`



export const LabelImageList = () => {
    // const [postImg, setPostImg] = useState([]);
    const [previewImg, setPreviewImg] = useState<string[]>([]);


    // 배열을 state 로 사용하는 경우, 참조하는 변수의 주소값이 바뀌지 않으면 재렌더링이 안됨
    // 문법을 spread operator라고 부른다.
    // [...array] 이렇게 사용하면 array를 해체한 후 배열에 넣어 주소가 바뀌게 됨
    const imagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(previewImg);
        const imgFiles = e.target.files;
        if(!imgFiles) return ;
        const imgUrls = [...previewImg];
        for (let i=0; i<imgFiles.length; i++) {
            if(imgUrls.length >= 4) break;
            imgUrls.push(URL.createObjectURL(imgFiles[i]));
        };

        setPreviewImg(imgUrls);

        console.log(previewImg);
    }

    return <>
        <Label label="사진" />
        <LabelContainer>
            <LabelFor htmlFor="image_upload">
                <LabelText> 파일 업로드하기 </LabelText>
            </LabelFor>
        </LabelContainer>
        <Input type="file" multiple id="image_upload" accept=".jpg,.png" onChange={(e) => imagePreview(e)}/>
        <ImageListIndex imgList={previewImg} onClick={() => {console.log(1111)}}/>
    </>
}

