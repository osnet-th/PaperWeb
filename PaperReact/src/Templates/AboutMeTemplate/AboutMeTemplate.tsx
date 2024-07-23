import styled from "@emotion/styled";
import {CardContainer} from "../../Organisms/CardContainer/CardContainer";
import {TextButton} from "../../Atoms/TextButton/TextButton";
import {ImageInputDialog} from "../../Organisms/ImageInputDialog/ImageInputDialog";
import {TextListDialog} from "../../Organisms/TextListDialog/TextListDialog";
import * as React from "react";
import {useState} from "react";


const Container = styled.div`
    justify-content: center;
    padding: 70px;
`

const ButtonContainer = styled.div`
    text-align: center;
`
export const AboutMeTemplate = () => {
    const [contentsOpen, setContentsOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);


    const handleClickContentsOpen = () => {
        setContentsOpen(true);
    };

    const handleContentsClose = () => {
        setContentsOpen(false);
    };

    const handleClickImageOpen = () => {
        setImageOpen(true);
    };

    const handleImageClose = () => {
        setImageOpen(false);
    };

    return (
        <Container>
            {
                // TODO: 관리자 권한이 있는 경우에만 추가하기 버튼이 나오도록 변경
                true ?
                    <ButtonContainer>
                        <TextButton text="이미지 수정하기" onClick={handleClickImageOpen}/>
                        <TextButton text="콘텐츠 수정하기" onClick={handleClickContentsOpen}/>
                    </ButtonContainer>
                    : null
            }
            <ImageInputDialog open={imageOpen} handleClose={handleImageClose} />
            <TextListDialog open={contentsOpen} handleClose={handleContentsClose}/>
            <CardContainer/>
        </Container>
    );
}