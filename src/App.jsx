import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Typo Speed</h1>
      <h1>Starting the Web Login</h1> */}
      <Home/>
      

    </div>
  )
}

export default App
