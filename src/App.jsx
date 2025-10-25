import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import React from "react";
import {Routes , Route} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {

  return (
    <Routes>
      <Route path="/login" element ={<SignInPage />} ></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path= "/" element = {<Home/>}></Route>
    </Routes>
  )
}

export default App
