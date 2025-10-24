import React from "react";
import {Routes , Route} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {

  return (
    <Routes>
      <Route path="/login" element ={<SignInPage />} ></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
    </Routes>
  )
}

export default App
