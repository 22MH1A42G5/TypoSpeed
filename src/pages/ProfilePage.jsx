import React from 'react';
import NavBar from '../components/NavBar';
import { FaEdit } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoSpeedometer } from "react-icons/io5"; 
import PersonalBestCard from '../components/PersonalBestCard';
import RecentSessionsCard from '../components/RecentSessionsCard';
import { LuTarget } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
const ProfilePage = () => {
  return (
    <>
        <NavBar className="" />
        <div className='bg-darkwhite flex flex-col align-middle items-center w-full'>
            {/* Photo Section */}
            <div className='flex justify-center content-center w-full p-4'>
                <div className='mt-5 p-2 md:p-5 bg-white shadow-boxShadow w-full max-w-5xl rounded-2xl flex flex-col md:flex-row items-start md:items-center md:justify-between'>
                    <div className='flex gap-4  p-5 items-center'>
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" 
                        className='w-24 h-24 border-4 border-blue-400 rounded-full ' alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-3xl'>Alex Jhonson</h1>
                            <p className='text-[17px]'>alex_jhonson</p>
                            <p className='text-gray-600'>alex.jhonson@gmail.com</p>
                            {/* member since 2004 ... */}
                        </div>
                    </div>
                    <div className=' flex flex-col sm:flex-row gap-2 pl-5'>
                        <button className='  flex flex-row gap-1 px-4 py-2 rounded-[7px] items-center bg-blue-500'>
                            <FaEdit />
                            <p className='text-[15px]'>Edit Profile</p>
                        </button>
                        <button className=' flex flex-row gap-1 px-4 py-2 rounded-[7px] items-center bg-[#dfe0e1]'>
                            <IoSettingsSharp />
                            <p className='text-[15px]'>Settings</p>
                        </button>
                    </div>
                </div>
            </div>
            {/* Statistics */}
            <div className='mt-5 px-4 w-full'>
                <div className='w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-4'>
                    {/* Single Stat Card */}
                    <div className='bg-white shadow-boxShadow p-5 rounded-2xl flex justify-between items-start w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]'>
                        <div className='flex flex-col gap-2'>
                            <div className='h-14 w-14 rounded-[10px] flex bg-[#e6eefa] text-2xl justify-center items-center text-[#3b82f6]'>
                                <IoSpeedometer/>
                            </div>
                            <p className='text-2xl font-bold'>127 WPM</p>
                            <p className='text-gray-600'>Highest Speed</p>
                        </div>
                        <div className='text-blue-500 font-medium'>Best</div>
                    </div>

                    {/* Second Card */}
                    <div className='bg-white shadow-boxShadow p-5 rounded-2xl flex justify-between items-start w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]'>
                        <div className='flex flex-col gap-2'>
                            <div className='h-14 w-14 rounded-[10px] flex bg-[#bfedd0] text-2xl justify-center items-center text-[#0c973f]'>
                                <LuTarget/>
                            </div>
                            <p className='text-2xl font-bold'>98%</p>
                            <p className='text-gray-600'>Accuracy</p>
                        </div>
                        <div className='text-blue-500 font-medium'>Average</div>
                    </div>

                    {/* Third Card */}
                    <div className='bg-white shadow-boxShadow p-5 rounded-2xl flex justify-between items-start w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]'>
                        <div className='flex flex-col gap-2'>
                            <div className='h-14 w-14 rounded-[10px] flex bg-[#ebccfb] text-2xl justify-center items-center text-[#831ddc]'>
                                <FaTrophy />
                            </div>
                            <p className='text-2xl font-bold'>120</p>
                            <p className='text-gray-600'>Sessions</p>
                        </div>
                        <div className='text-blue-500 font-medium'>Total</div>
                    </div>

                    {/* Fourth Card */}
                    <div className='bg-white shadow-boxShadow p-5 rounded-2xl flex justify-between items-start w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]'>
                        <div className='flex flex-col gap-2'>
                            <div className='h-14 w-14 rounded-[10px] flex bg-[#ffe1b3] text-2xl justify-center items-center text-[#ff9e0e]'>
                                <FaFire/>
                            </div>
                            <p className='text-2xl font-bold'>12 Days</p>
                            <p className='text-gray-600'>Streak</p>
                        </div>
                        <div className='text-blue-500 font-medium'>Current</div>
                    </div>
                </div>
            </div>
            <div className='mt-5 flex  w-full justify-center content-center'>
                <div className='mx-6 w-full flex-col md:flex-row max-w-5xl  flex justify-center gap-4'>
                    <RecentSessionsCard  />
                    <PersonalBestCard  />   
                </div>
            </div>
        </div>
    </>
  );
};

export default ProfilePage;