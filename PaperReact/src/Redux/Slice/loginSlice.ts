import {createSlice} from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        accessToken : "",
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.accessToken = action.payload.accessToken;
            console.log("login reducer",action.payload.accessToken);
        },
        logout: state => {
            state.isLogin = false;
            state.accessToken = "";
        },
    },
})


export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;