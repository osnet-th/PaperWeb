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

interface Props {
    readonly previewImg : string[];
    readonly imageUpload : (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly imageDelete : (index: number) => void;
}

export const LabelImageList = ({previewImg, imageUpload, imageDelete}: Props) => {
    // const [postImg, setPostImg] = useState([]);

    console.log(previewImg);
    return <>
        <Label label="사진" />
        <LabelContainer>
            <LabelFor htmlFor="image_upload">
                <LabelText> 파일 업로드하기 </LabelText>
            </LabelFor>
        </LabelContainer>
        <Input type="file" multiple id="image_upload" accept=".jpg,.png" onChange={(e) => imageUpload(e)}/>
        <ImageListIndex imgList={previewImg} imageDelete={imageDelete}/>
    </>
}

