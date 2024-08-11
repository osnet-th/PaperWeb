import {configureStore} from "@reduxjs/toolkit";
import {loginSlice} from "../Slice/loginSlice";


const store = configureStore({
    reducer: { auth: loginSlice.reducer},
    // middleware: [...middlewares]
})


export default store;

export type RootState = ReturnType<typeof store.getState>;