import {Text} from "../../Atoms/Text/Text";
import {ImageCarousel} from "../../Organisms/ImageCarousel/ImageCarousel";
import styled from "@emotion/styled";
import {TextButton} from "../../Atoms/TextButton/TextButton";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/Store/store";
import axios from "axios";
import {useEffect, useState} from "react";


const Container = styled.div`
    justify-content: center;
`

const TextContainer = styled.div`
    text-align: center;
`

const TextButtonContainer = styled.div`
    text-align: end;
`

interface Item {
    readonly id: number;
    readonly img: string;
    readonly title: string;
    readonly summary: string;
}

export const ProjectCarouselTemplate = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [request, setRequest] = useState<boolean>(true);
    const navigate = useNavigate();
    const auth = useSelector((state: RootState) => state.auth.isLogin);

    useEffect(() => {
        if(request) {
            console.log("프로젝트 요청");
            const dataList = [] as Item[];
            axios({
                url: 'http://localhost:8080/get/projects',
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                },
                // data: JSON.stringify(contents),
            })
            .then((result) => {
                console.log(result.data);
                result.data.forEach((data: any) => {
                    console.log(data);
                    dataList.push({
                        id: data.id,
                        img: "http://localhost:8080" + data.projectImages[0].requestUrl,
                        title: data.title,
                        summary: data.summary});
                });
                setRequest(false);
                setItems(dataList);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    });

    const seeMoreClick = (id:number) => {
        navigate("/detail/project", {state : {id : id}})
    }


    return(
        <Container >
            <TextContainer>
                <Text text="Projects" variant="h2"/>
            </TextContainer>
            {
                // TODO: 관리자 권한이 있는 경우에만 추가하기 버튼이 나오도록 변경
                auth ?
                    <TextButtonContainer>
                        <TextButton text="추가하기" onClick={() => navigate("/upload/project")}/>
                    </TextButtonContainer>
                    : null
            }
            <ImageCarousel items={items} onClick={seeMoreClick}/>
        </Container>
    )
}