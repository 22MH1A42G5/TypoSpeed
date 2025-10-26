import React from 'react';
import { FaCrown } from "react-icons/fa6";
import { LuTarget } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";

const PersonalBestCard = () => {
  return (
    <div className=' bg-white shadow-boxShadow p-5 rounded-2xl flex flex-col 
    justify-start items-start  w-full min-w-[350px] h-95 mb-13'>
        <p className='text-2xl font-bold mb-2'>
            Personal Bests
        </p>
        <li className='bg-amber-100 border-amber-600 border w-full  shadow-boxShadow rounded-2xl flex flex-row justify-between items-center my-[5px] p-4'>
            <div className='flex items-center gap-2'>
                <div className='h-14 w-12 rounded-[10px] flex bg-[#d68c24] text-2xl justify-center items-center text-[#facc15]'>
                    <FaCrown/>
                </div>
                <div>
                    <p className='text-[18px] font-bold'>Fastest Speed</p>
                    <p className='text-[16px]'>March 15 2024</p>
                </div>
            </div>
            <p className='text-2xl text-amber-600 font-bold'>127 WPM</p>
        </li>
        <li className=' bg-[#91eeb3] border-[#118e3e] border w-full  shadow-boxShadow rounded-2xl flex flex-row justify-between items-center my-[5px] p-4'>
            <div className='flex items-center gap-2'>
                <div className='h-14 w-12 rounded-[10px] flex bg-[#0c973f] text-2xl justify-center items-center text-gray-300'>
                    <LuTarget/>
                </div>
                <div>
                    <p className='text-[18px] font-bold'>Best Accuracy</p>
                    <p className='text-[16px]'>March 15 2024</p>
                </div>
            </div>
            <p className='text-2xl text-[#118e3e] font-bold'>99.2%</p>
        </li>
        <li className='bg-[#c486fb] border-[#5c1898] border w-full  shadow-boxShadow rounded-2xl flex flex-row justify-between items-center my-[5px] p-4'>
            <div className='flex items-center gap-2'>
                <div className='h-14 w-12 rounded-[10px] flex bg-[#7e22ce] text-2xl justify-center items-center text-[#b9b9b9]'>
                    <FaFire/>
                </div>
                <div>
                    <p className='text-[18px] font-bold'>Longest Streak</p>
                    <p className='text-[16px]'>March 15 2024</p>
                </div>
            </div>
            <p className='text-2xl text-[#581a8e] font-bold'>28 Days</p>
        </li>
        
    </div>
  );
};

export default PersonalBestCard;