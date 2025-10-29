import React from 'react'
import './App.css'
import Home from './pages/Home'
import {Routes , Route} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from './pages/ProfilePage';
import Practice from './pages/Practice';
import { AuthRoute, PrivateRoute } from './components/ProtectedRoute';
import Test from './components/Test'
function App() {
  return (
    <Routes>
      <Route path="/login" element={
        <AuthRoute>
          <SignInPage />
        </AuthRoute>
      } />
      <Route path="/signup" element={
        <AuthRoute>
          <SignUpPage />
        </AuthRoute>
      } />
      <Route path="/" element={<Home/>} />
      <Route path='/profile' element={
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      } />
      <Route path='/practice' element={
        <PrivateRoute>
          <Practice />
        </PrivateRoute>
      } />
    </Routes>
  )
}

export default App
