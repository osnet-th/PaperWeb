import {LabelInput} from "../../Molecules/LabelInput/LabelInput";
import styled from "@emotion/styled";
import {ButtonA} from "../../Atoms/Button/Button";
import {CheckBox} from "../../Atoms/CheckBox/CheckBox";
import {TextLink} from "../../Atoms/TextLink/TextLink";
import {Label} from "../../Atoms/Label/Label";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../Redux/Slice/loginSlice";
import {axiosInstance} from "../../Axios/instance";
import {setCookie} from "../../Cookie/cookie";




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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginAction = () => {
        const form = {
            id : id,
            password : password
        }
        axiosInstance({
            url:'/login-request',
            method:'post',
            data: form,
        }).then((result)=>{
            console.log('요청성공 : ', result);
            // TODO : Redux 사용으로 변경해야 함
            setCookie("accessToken", result.data.accessToken);
            setCookie("refreshToken", result.data.refreshToken);
            dispatch(login(result.data.accessToken));
            navigate("/");
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
        <LabelInput label="EMAIL" type="email" text={id} onChange={e => {handleChange(e, "email")}}/>
        <LabelInput label="PASSWORD" type="password" text={password} onChange={e => {handleChange(e, "password")}}/>
        <RowContainer>
            <CheckBox label="Remember Me"/>
            <TextLink text="Sign Up Here" path="/sign-up"/>
        </RowContainer>
        <ButtonContainer>
            <ButtonA label="LOGIN" onClick={loginAction}/>
        </ButtonContainer>
        <ButtonContainer />
        <TextLink text="Forgot Password?" path="/"/>
    </Container>

}