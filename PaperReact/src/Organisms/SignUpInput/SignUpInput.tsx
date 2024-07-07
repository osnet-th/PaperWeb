import styled from "@emotion/styled";
import {Label} from "../../Atoms/Label/Label";
import {LabelInput} from "../../Molecules/LabelInput";
import {ButtonA} from "../../Atoms/Button/Button";
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


const ButtonContainer = styled.div`
    margin-top: 1.5rem;
`


export const SignUpInput = () => {
    const [email, setEmail] = useState<string>("");
    const [passwd, setPasswd] = useState<string>("");
    const [cPasswd, setCpasswd] = useState<string>("");

    const signUp = () => {
        if(email === '') return;
        if(passwd === '') return;
        if(cPasswd === '') return;

        if(passwd !== cPasswd) {
            console.log('비밀번호 다름');
            return;
        }

        console.log("회원가입 요청 :", email, passwd);

        const SignUp = {
            id : email,
            password : passwd
        }

        axios({
            method:'post',
            url:'http://localhost:8080/sign-up',
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(SignUp),
        })
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log('요청실패')
            console.log(error)
        })
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> , label:string) =>{
        if(label === 'email') setEmail(e.target.value);
        else if(label === 'passwd') setPasswd(e.target.value);
        else setCpasswd(e.target.value);
    };

    return  <Container>
        <LabelContainer><Label label="Sign Up"/></LabelContainer>
        <LabelInput label="EMAIL" type="email" onChange={ (e) => handleChange(e,"email") }/>
        <LabelInput label="PASSWORD" type="password" onChange={ (e) => handleChange(e,"passwd") }/>
        <LabelInput label="PASSWORD CHECK" type="password" onChange={ (e) => handleChange(e,"cpasswd") }/>
        <ButtonContainer>
            <ButtonA label="SIGN UP" onClick={signUp}/>
        </ButtonContainer>
    </Container>

}