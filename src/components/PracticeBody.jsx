import React from 'react'
import { IoSpeedometer } from "react-icons/io5";
import { FaUndoAlt } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";
import { RiTeamFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";


const PracticeBody = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-darkwhite  gap-10 py-10'>
      <div className='flex gap-5'>
        <div className='flex justify-between w-60 bg-white shadow-boxShadow px-7 py-5 rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>WPM</h1>
                <p className='text-3xl font-bold text-blue-600' >0</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-blue-100 text-2xl justify-center items-center text-blue-600'><IoSpeedometer/></div>
        </div>
        <div className='flex justify-between w-65 bg-white shadow-boxShadow px-10 items-center rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>Accuracy</h1>
                <p className='text-2xl font-bold text-green-600 ' >100%</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-green-100 text-2xl justify-center items-center text-green-600'><FiTarget /></div>
        </div>
        <div className='flex justify-between w-60 bg-white shadow-boxShadow px-10 items-center rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>Errors</h1>
                <p className='text-2xl font-bold text-red-600' >0</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-red-100 text-2xl justify-center items-center text-red-600'><FaXmark /></div>
        </div>
        <div className='flex justify-between w-60 bg-white shadow-boxShadow px-10 items-center rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>Time</h1>
                <p className='text-2xl font-bold text-[#863bf6] ' >0:00</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#f6e6fa] text-2xl justify-center items-center text-[#863bf6]'><FaClock /></div>
        </div>
      </div>

        <div className='w-260 shadow-boxShadow bg-white p-10 flex flex-col gap-10 rounded-xl' >
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <select className='shadow-boxShadow rounded-[5px] p-2 ' name="" id="">
                        <option value="1">1 minute</option>
                        <option value="3">3 minute</option>
                        <option value="5">5 minute</option>
                    </select>
                    <select className='shadow-boxShadow rounded-[5px] p-2 ' name="" id="">
                        
                        <option value="1">English</option>
                        <option value="3">Programming</option>
                        <option value="4">Numbers</option>
                        <option value="5">Quotes</option>
                    </select>
                </div>
                <div className='flex gap-4'>
                    <div className='flex justify-center items-center gap-3 hover:bg-darkwhite rounded-xl h-10 p-3 border border-gray-400 text-grey cursor-pointer'><FaPause />Pause</div>
                    <div className='flex justify-center items-center gap-3 bg-primary rounded-xl h-10 p-3 text-white  hover:bg-blue-700 cursor-pointer'><FaUndoAlt />Reset</div>
                </div>
                
            </div>
            <div className='flex flex-col gap-2'>    
                <div className='flex justify-between px-2 ' >
                    <h1>Progress</h1>
                    <p>0 / 250 words</p>
                </div>
                <div className='bg-gray-200 rounded-xl h-2' ></div>
            </div>
            <div className='shadow-boxShadow rounded-xl bg-darkwhite p-6 tracking-widest text-xl/relaxed  text-grey text-justify'>
                The quick brown fox jumps over the lazy dog. This pangram contains every letter of
                    the alphabet at least once. It has been used for typing practice and font testing
                    for many years. The phrase demonstrates how various letters look when typed
                    together, making it an excellent tool for improving typing skills and accuracy.
                    Many typing enthusiasts use this classic sentence to warm up before more
                    challenging exercises.
            </div>

            <textarea className='shadow-boxShadow w-full rounded-xl h-50 bg-white px-6 py-5 outline-black tracking-widest text-xl/relaxed  text-grey text-justify' placeholder='Start typing here ... Focus on accuracy first, then speed will follow.' />
                
        </div>
        <div className='flex gap-10'>
            <button className='w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center' > <TiArrowShuffle className='text-xl m-2' /><p>  New Passage</p></button>
            <button className='w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center' > <RiTeamFill className='text-xl m-2'  /><p>  New Passage</p></button>
            <button className='w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center' > <GoGraph className='text-xl m-2'  /><p>  New Passage</p></button>
            <button className='w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center' > <IoMdSettings className='text-xl m-2' /><p>  New Passage</p></button>
        </div>
        <div className='h-20'></div>
    </div>
  )
}

export default PracticeBody
