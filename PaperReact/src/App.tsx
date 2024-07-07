import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {SignUpPage} from "./Pages/SignUpPage/SignPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
