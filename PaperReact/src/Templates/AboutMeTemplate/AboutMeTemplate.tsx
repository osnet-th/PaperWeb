import styled from "@emotion/styled";
import {CardContainer} from "../../Organisms/CardContainer/CardContainer";
import {TextButton} from "../../Atoms/TextButton/TextButton";
import {ImageInputDialog} from "../../Organisms/ImageInputDialog/ImageInputDialog";
import {TextListDialog} from "../../Organisms/TextListDialog/TextListDialog";
import * as React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/Store/store";
import {PersistGate} from "redux-persist/integration/react";
import axios from "axios";


const Container = styled.div`
    justify-content: center;
    padding: 70px;
`

const ButtonContainer = styled.div`
    text-align: center;
`

type Item = {
    tag: string,
    content: string;
}

export const AboutMeTemplate = () => {
    const [contentsOpen, setContentsOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
    const [photo, setPhoto] = useState("");
    const [tags , setTags] = useState(Array<Item>());
    const [request, setRequest] = useState<boolean>(true);
    const auth = useSelector((state: RootState) => state.auth.isLogin);



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


    useEffect(() => {
        if(request) {
            axios({
                url: 'http://localhost:8080/get/about-me',
                method: 'get',
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
                // data: JSON.stringify(contents),
            })
                .then((result) => {
                    console.log(result);
                    setPhoto("http://localhost:8080"+result.data.myPhotos.requestUrl);
                    setTags(result.data.contents);
                    setRequest(false);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    });

    const updateAboutMeContents = (e:React.ChangeEvent<HTMLInputElement>) => {
        tags.forEach((data: Item) => {
            if(data.tag === e.target.name) {
                data.content = e.target.value
            }
        })
        setTags([...tags]);
    };

    return (
        <Container>
            {
                // TODO: 관리자 권한이 있는 경우에만 추가하기 버튼이 나오도록 변경
                auth ?
                    <ButtonContainer>
                        <TextButton text="이미지 수정하기" onClick={handleClickImageOpen}/>
                        <TextButton text="콘텐츠 수정하기" onClick={handleClickContentsOpen}/>
                    </ButtonContainer>
                    : null
            }
            <ImageInputDialog open={imageOpen} handleClose={handleImageClose} />
            <TextListDialog items={tags} open={contentsOpen} handleClose={handleContentsClose} onChange={updateAboutMeContents}/>
            <CardContainer photo={photo} items={tags}/>
        </Container>
    );
}