import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import {loginSlice} from "../Slice/loginSlice";
import {persistReducer, persistStore} from "redux-persist";



const persistConfig = {
    key: 'root',
    storage,
    whitelist:["auth"],
}

export const rootReducer = combineReducers({
    auth : loginSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    // middleware: [...middlewares]
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);