import styled from "@emotion/styled";
import {CardText} from "../../Molecules/CardText/CardText";
import {Text} from "../../Atoms/Text/Text";
import {useEffect, useState} from "react";
import {Chip, Divider} from "@mui/material";
import * as React from "react";

const Container = styled.div`
    margin-bottom: 5rem;
`

const CardContainer = styled.div`
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;
`




const TextContainer = styled.div`
    text-align: center;
`
export const SelfIntroductionTemplate = () => {
    const [selfIntro, setSelfIntro] = useState<string[]>([]);


    useEffect(() => {
        setSelfIntro(["안녕하세요", "저는 이태형입니다.","만나서 반갑습니다"]);
    }, []);

    return (
        <Container>
            <Divider>
                <Chip label="자기소개" size="medium"  color="success" variant="outlined" />
            </Divider>
            <CardContainer>
                <CardText title="자기소개" content={selfIntro}/>
                <CardText title="경력사항" content={selfIntro}/>
            </CardContainer>
            <CardContainer>
                <CardText title="포부" content={selfIntro}/>
                <CardText title="직무에 대한 강점과 약점" content={selfIntro}/>
            </CardContainer>
        </Container>
    )
}
