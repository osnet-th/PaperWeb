import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./Pages/SignInPage/SignInPage";
import {SignUpPage} from "./Pages/SignUpPage/SignPage";
import {MainPage} from "./Pages/MainPage/MainPage";
import {ProjectWritePage} from "./Pages/ProjectWrtiePage/ProjectWritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/upload/project' element={<ProjectWritePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
