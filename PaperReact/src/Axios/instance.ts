import axios, {AxiosInstance} from "axios";
import {getCookie} from "../Cookie/cookie";



export const axiosInstance : AxiosInstance = axios.create({
    baseURL : 'http://localhost:8080',
    timeout : 5000
});


axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        try {
            if(accessToken) {
                console.log("토큰 들어가야함", accessToken);
                config.headers.Authorization  = `Bearer ${accessToken}`;
            }
        } catch(err) {

        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);
