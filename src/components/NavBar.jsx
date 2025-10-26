import React from 'react'
import { FaKeyboard } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const nav = useNavigate();
  
  return (

    <header className='flex p-5 justify-around items-center ' >
      <div className="icon flex items-center gap-2 ">
          <div className='w-10 h-10 bg-primary hover:bg-green-200 flex items-center justify-center rounded-md'>
              <FaKeyboard className='text-xl text-white' />
          </div>
          <h1 className='text-2xl font-bold  '>TypoSpeed</h1>
      </div>
      <div className='hidden  min-[936px]:flex gap-10' > 
          <a href="">Practice</a>
          <a href="">Battle Rooms</a>
          <a href="">Analytics</a>
          <a href="">Friends</a>
          <a href="">LeaderBoard</a>
      </div>
      <div className='flex gap-3'>
          {/* <button ><FaMoon /></button> */}
          <button onClick={() => nav('/login')} className='border-primary border-2 w-20 h-11 rounded-md transition duration-200 cursor-pointer hover:bg-primary hover:text-white text-primary' >Sign In</button>
          <button onClick={() => nav('/signup')} className='bg-primary outline-0 border-0 w-20 h-11 text-white cursor-pointer hover:bg-blue-700 rounded-md' >Sign Up</button>
      </div>
    </header>
  )
}

export default NavBar
