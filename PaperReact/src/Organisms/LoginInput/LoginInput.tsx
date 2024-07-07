import {LabelInput} from "../../Molecules/LabelInput";
import styled from "@emotion/styled";
import {ButtonA} from "../../Atoms/Button/Button";
import {CheckBox} from "../../Atoms/CheckBox/CheckBox";
import {TextLink} from "../../Atoms/TextLink/TextLink";
import {Label} from "../../Atoms/Label/Label";
import axios from "axios";
import {useState} from "react";




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
    const [id, setId] = useState<string>("");
    const [password , setPassword] = useState<string>("");

    const login = () => {
        const form = new FormData();
        form.append("id", id);
        form.append("pw", password);

        axios({
            method:'post',
            url:'http://localhost:8080/login-request',
            data: form,
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((result)=>{console.log('요청성공')
            console.log(result)
        })
        .catch((error)=>{console.log('요청실패')
            console.log(error)
        })
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> , label:string) =>{
        if (label === 'email') setId(e.target.value);
        else setPassword(e.target.value);
    };

    return  <Container>
        <LabelContainer><Label label="Sign In"/></LabelContainer>
        <LabelInput label="EMAIL" type="email" onChange={e => {handleChange(e, "email")}}/>
        <LabelInput label="PASSWORD" type="password" onChange={e => {handleChange(e, "password")}}/>
        <RowContainer>
            <CheckBox label="Remember Me"/>
            <TextLink text="Sign Up Here" path="/sign-up"/>
        </RowContainer>
        <ButtonContainer>
            <ButtonA label="LOGIN" onClick={login}/>
        </ButtonContainer>
        <ButtonContainer />
        <TextLink text="Forgot Password?" path="/"/>
    </Container>

}