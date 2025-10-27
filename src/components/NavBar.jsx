import React from 'react'
import { FaKeyboard } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDataBase } from '../context';
import profileImg from '../assets/profileImg.jpeg'
const NavBar = () => {
  const context = useDataBase();
  const nav = useNavigate();
  const user = context.user;
  return (

    <header className='flex p-5 justify-around items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]' >
      <div className="icon flex items-center gap-2 ">
          <div className='w-10 h-10 bg-primary hover:bg-green-200 flex items-center justify-center rounded-md'>
              <FaKeyboard className='text-xl text-white' />
          </div>
          <h1 className='text-2xl font-bold  '>TypoSpeed</h1>
      </div>
      <div className='hidden  min-[936px]:flex gap-10' > 
          <a className='cursor-pointer' onClick={()=>{nav('/practice')}} >Practice</a>
          {/* <a onClick={()=>{Navigate('/practice')}} href="">Battle Rooms</a> */}
          {/* <a onClick={()=>{Navigate('/practice')}} href="">Analytics</a> */}
          {/* <a onClick={()=>{Navigate('/practice')}} href="">Friends</a> */}
          {/* <a onClick={()=>{Navigate('/practice')}} href="">LeaderBoard</a> */}
          <a className='cursor-pointer' onClick={()=>{nav('/profile')}} >Profile</a>
          {/* <a onClick={()=>{Navigate('/practice')}} href=""></a> */}
      </div>
      {
        (!user)?
      <div className='flex gap-3 justify-center items-center'>
          {/* <button ><FaMoon /></button> */}
          <button onClick={() => nav('/login')} className='border-primary border-2 w-20 h-11 rounded-md transition duration-200 cursor-pointer hover:bg-primary hover:text-white text-primary' >Sign In</button>
          <button onClick={() => nav('/signup')} className='bg-primary outline-0 border-0 w-20 h-11 text-white cursor-pointer hover:bg-blue-700 rounded-md' >Sign Up</button>
      </div>
      :
      <div className='flex gap-3 justify-center items-center'>
        <button onClick={() => context.Logout()} className='border-red-500 border-2 w-20 h-11 rounded-md transition duration-200 cursor-pointer hover:bg-red-500 hover:text-white text-red-500' >Logout</button>
        <img src={profileImg} onClick={()=>{nav('/profile')}} alt="Not Loaded" className='rounded-full h-10 cursor-pointer w-10'/>
      </div>
      }
    </header>
  )
}

export default NavBar
