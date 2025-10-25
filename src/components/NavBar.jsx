import React from 'react'
import { FaKeyboard } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
const NavBar = () => {
  return (
    <header className='flex m-5 justify-around items-center' >
            <div className="icon flex items-center gap-2 ">
                <div className='w-10 h-10 bg-primary flex items-center justify-center rounded-md'>
                    <FaKeyboard className='text-xl text-white' />
                </div>
                <h1 className='text-2xl font-bold font- '>TypoSpeed</h1>
            </div>
            <div className='navs hidden  md:flex gap-5' > 
                <a href="">Home</a>
                <a href="">Link</a>
                <a href="">Analytics</a>
                <a href="">Friends</a>
                <a href="">LeaderBoard</a>
            </div>
            <div className='flex gap-3' >
                <button ><FaMoon /></button>
                <button className='border-primary border-2 w-20 h-11 rounded-md hover:bg-primary hover:text-white text-primary' >Sign In</button>
                <button className='bg-primary outline-0 border-0 w-20 h-11 text-white rounded-md' >Sign Up</button>
            </div>
    </header>
  )
}

export default NavBar
