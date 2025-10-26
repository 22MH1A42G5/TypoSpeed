import React from 'react'
import './App.css'
import Home from './pages/Home'
import {Routes , Route} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <Routes>
      <Route path="/login" element ={<SignInPage />} ></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path= "/" element = {<Home/>}></Route>
      <Route path='/profile' element = {<ProfilePage />}></Route>
    </Routes>
  )
}

export default App
