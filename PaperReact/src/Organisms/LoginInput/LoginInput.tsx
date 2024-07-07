import {LabelInput} from "../../Molecules/LabelInput";
import styled from "@emotion/styled";
import {ButtonA} from "../../Atoms/Button/Button";
import {CheckBox} from "../../Atoms/CheckBox/CheckBox";
import {TextLink} from "../../Atoms/TextLink/TextLink";
import {Label} from "../../Atoms/Label/Label";
import axios from "axios";




const Container = styled.div`
    margin: 20px;
    align-items: center;
    justify-content: center;
`
const LabelContainer = styled.div`
    text-align: center;
    font-size: 30px;
`

const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

const ButtonContainer = styled.div`
    margin-top: 1.5rem;
`


export const LoginInput = () => {




    const login = () => {
        const form = new FormData();
        form.append("id", "admin");
        form.append("pw", "P@ssw0rd");

        axios({
            method:'post',
            url:'http://localhost:8080/login-request',
            data: form,
        })
        .then((result)=>{console.log('요청성공')
            console.log(result)
        })
        .catch((error)=>{console.log('요청실패')
            console.log(error)
        })
    }

    return  <Container>
        <LabelContainer><Label label="Sign In"/></LabelContainer>
        <LabelInput label="EMAIL" type="email"/>
        <LabelInput label="PASSWORD" type="password"/>
        <RowContainer>
            <CheckBox label="Remember Me"/>
        </RowContainer>
        <ButtonContainer>
            <ButtonA label="LOGIN" onClick={login}/>
        </ButtonContainer>
        <ButtonContainer />
        <TextLink text="Forgot Password?"/>
    </Container>

}