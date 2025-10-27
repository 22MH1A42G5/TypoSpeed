import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoSpeedometer } from "react-icons/io5";
import { FaUndoAlt } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoColorPalette } from "react-icons/io5";

const HomeBody = () => {
    const [tryText,setTryText] = useState("");
    
  return (
    <>
    <div className='p-15 bg-primary text-white  line-h flex justify-center items-center flex-wrap gap-20 md:p-30  ' >
      <div className='max-w-xl'>
        <h1 className=' text-5xl/15 font-bold mb-4'>Master Your Typing Speed with <span className='text-secondary'>Real-Time</span> Analytics </h1>
        <p className='text-[22px] mb-6'>Track your WPM, accuracy, and progress with our advanced typing test platform. Compete with friends and climb the global leaderboard.</p>
        <div className='flex flex-wrap gap-3'>
            <div className='flex bg-secondary  h-15 w-58 rounded-xl justify-center items-center text-[21px] font-bold hover:bg-amber-400 transition ease-in-out duration-200 cursor-pointer'> <FaPlay className='mr-2 text-[15px]' /> Start Typing Test</div>
            <div className='flex border-2 border-white  h-15 w-45 rounded-xl justify-center items-center text-[21px] font-bold hover:bg-white hover:text-primary transition ease-in-out duration-200 cursor-pointer'> <GoGraph className='mr-2' /> View Demo</div>
        </div>
      </div>
      <div className=' maxw-xl  bg-[#416ed5] border-[0.1px] border-[#688edf] p-5 rounded-xl flex flex-col gap-5'>
        <div className='flex justify-between items-center'> 
            <h1 className='text-[14px]'> Live Typing Test </h1> 
            <div className='flex gap-2'><FaCircle className='text-red-500 text-[12px]' /> <FaCircle className='text-orange-300 text-[12px]'/> <FaCircle className='text-green-600 text-[12px]'/></div>
            
        </div>
        <p className='text-[18px] text-green-300 tracking-[0.15em]'>The quick brown fox jumps over the lazy dog. <span className='text-white bg-[#6383d3] px-1 font-bold pb-1' > |</span></p>
        <div className='flex justify-around' >
            <div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold text-orange-300'>85</p>WPM</div>
            <div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold text-green-300'>97%</p>Accuracy</div>
            <div className='flex flex-col justify-center items-center' ><p className='text-2xl font-bold'>1:23</p>Time</div>
        </div>
      </div>

    </div>
    <div className='flex flex-col justify-center items-center p-14 md:p-25'>
        <div className='flex max-w-2xl flex-col  justify-center items-center gap-1 mb-20' >
            <h1 className='text-[35px] font-bold '>Powerful Features for Every Typist</h1>
            <p className='text-[20px] text-center text-grey tracking-wide'>From beginners to professionals, TypoSpeed offers comprehensive tools to track, analyze, and improve your typing performance.</p>
        </div>
        <div className='flex flex-wrap gap-y-10 justify-around'>
            <div className='max-w-sm bg-lightgrey h-70 flex flex-col justify-center gap-4 p-6 rounded-xl'>
                <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#e6eefa] text-2xl justify-center items-center text-[#3b82f6]'><IoSpeedometer/></div>
                <h1 className='text-2xl font-bold' >Real-Time Metrics</h1>
                <p className='text-[18px] text-grey'>Get instant feedback on your WPM, accuracy, and error count as you type. Watch your performance improve in real-time.</p>
            </div>
            <div className='max-w-sm bg-lightgrey h-70 flex flex-col justify-center gap-4 p-6 rounded-xl'>
                <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#f7f0d4] text-2xl justify-center items-center text-secondary'><GoGraph/></div>
                <h1 className='text-2xl font-bold' >Advanced Analytics</h1>
                <p className='text-[18px] text-grey'>Dive deep into your typing patterns with interactive charts and detailed performance insights over time.</p>
            </div>
            <div className='max-w-sm bg-lightgrey h-70 flex flex-col justify-center gap-4 p-6 rounded-xl'>
                <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#dff4db] text-2xl justify-center items-center text-terinary'><RiTeamFill /></div>
                <h1 className='text-2xl font-bold' >Friends Competition</h1>
                <p className='text-[18px] text-grey'>Challenge friends to real-time typing races, chat during matches, and track your head-to-head win rates.</p>
            </div>
            <div className='max-w-sm bg-lightgrey h-70 flex flex-col justify-center gap-4 p-6 rounded-xl'>
                <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#f5e2fd] text-2xl justify-center items-center text-[#c73bf6]'><GiTrophyCup /></div>
                <h1 className='text-2xl font-bold' >Global Leaderboard</h1>
                <p className='text-[18px] text-grey'>Compete with typists worldwide and climb the rankings based on speed, accuracy, and consistency.</p>
            </div>
            <div className='max-w-sm bg-lightgrey h-70 flex flex-col justify-center gap-4 p-6 rounded-xl'>
                <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#fae6e6] text-2xl justify-center items-center text-[#f63e3b]'><HiMiniUserCircle /></div>
                <h1 className='text-2xl font-bold' >Personal Profile</h1>
                <p className='text-[18px] text-grey'>Track your personal bests, view session history, and monitor your improvement journey with detailed stats.</p>
            </div>
            <div className='max-w-sm bg-lightgrey h-70 flex flex-col justify-center gap-4 p-6 rounded-xl'>
                <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#f6e6fa] text-2xl justify-center items-center text-[#863bf6]'><IoColorPalette /></div>
                <h1 className='text-2xl font-bold' >Dark & Light Mode</h1>
                <p className='text-[18px] text-grey'>Choose between elegant light and dark themes, or let the app automatically adapt to your system preferences.</p>
            </div>
        </div>
    </div>

    {/* ------------Try Section --------------- */}

    <div className='p-20 bg-lightgrey '>
        <div className='flex justify-center flex-col  items-center gap-20'>
            <div className='flex items-center flex-col gap-4 '>
            <h1 className='text-3xl font-bold '>Try TypoSpeed Now</h1>
            <p className='text-xl text-grey' >Experience the power of real-time typing analysis with our interactive demo</p>
            </div>
            <div className='px-7 py-7 h-85 max-w-200 bg-white border-3 rounded-xl border-[#e5e7eb] flex flex-col gap-5 '>
                <div className='flex justify-between'>
                    <div className='flex gap-5 text-grey'>
                        <div className='flex flex-col justify-center items-center'><p className='text-primary font-bold text-3xl'>75</p><p>WPM</p></div>
                        <div className='flex flex-col justify-center items-center'><p className='text-terinary font-bold text-3xl'>94%</p><p>Accuracy</p></div>
                        <div className='flex flex-col justify-center items-center'><p className='text-secondary font-bold text-3xl' >2</p><p>Errors</p></div>
                        <div className='flex flex-col justify-center items-center'><p className='text-black font-bold text-3xl'>0:45</p><p>Time</p></div>
                    </div>
                    <div className='flex justify-center items-center gap-3 bg-primary rounded-xl h-10 p-3 text-white  hover:bg-blue-700 cursor-pointer'><FaUndoAlt />Reset</div>
                </div>
                <div className='bg-lightgrey flex align-middle items-center p-8 rounded-xl text-base text-grey tracking-widest' >
                    The quick brown fox jumps over the layz | dog. This pangram sentence contains every letter of the alphabet at least once.
                </div>
                <div>
                    <div className='flex bg-secondary text-white rounded-xl justify-center items-center text-[18px] font-bold max-w-[190px]  px-5 py-2 cursor-pointer hover:bg-amber-400 transition ease-in-out duration-200'> <FaPlay className='mr-2 text-[15px]' /> Start Free Test</div>
                </div>
            </div>
        </div>
    </div>

{/* -----------------Statistics--------------- */}

    <div className="h-50 bg-primary flex justify-evenly flex-wrap" >
        <div className='flex flex-col justify-center items-center' >
            <h1 className='text-5xl font-bold text-secondary' >50K+</h1>
            <p className='text-xl text-white' >Active Users</p>
        </div>
        <div className='flex flex-col justify-center items-center' >
            <h1 className='text-5xl font-bold text-secondary' >2M+</h1>
            <p className='text-xl text-white' >Tests Completed</p>
        </div>
        <div className='flex flex-col justify-center items-center' >
            <h1 className='text-5xl font-bold text-secondary' >95%</h1>
            <p className='text-xl text-white' >User Satisfaction</p>
        </div>
        <div className='flex flex-col justify-center items-center' >
            <h1 className='text-5xl font-bold text-secondary' >24/7</h1>
            <p className='text-xl text-white' >Available</p>
        </div>
    </div>


    {/* ------------------Welcome Signup or Without Signup------------------- */}
    
    <div className='flex flex-col py-20 justify-evenly items-center gap-7 mx-auto'>
        <h1 className='text-4xl font-bold ' >Ready to Improve Your Typing Speed?</h1>
        <p className='max-w-3xl text-center text-grey text-xl'>Join thousands of users who have already improved their typing skills with TypoSpeed. Start your journey today!</p>
        <div className='flex gap-4'>
            <div className='flex p-3  bg-primary text-white text-xl font-bold rounded-xl justify-center items-center hover:bg-blue-800 cursor-pointer'> <HiUserAdd  className='m-2'/>  Create Free Account</div>
            <div className='flex p-3  bg-white border-2 border-primary text-primary text-xl font-bold rounded-xl justify-center items-center hover:bg-primary hover:text-white cursor-pointer' > <FaPlay className='mr-2 text-[15px] t '/> Try Without Signup</div>
        </div>
    </div>

    </>
  )
}

export default HomeBody
