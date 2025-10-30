import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { FaEdit } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoSpeedometer } from "react-icons/io5"; 
import PersonalBestCard from '../components/PersonalBestCard';
import RecentSessionsCard from '../components/RecentSessionsCard';
import { LuTarget } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { useDataBase } from '../context';
import { GridLoader } from 'react-spinners';
const ProfilePage = () => {
    const context = useDataBase();
    const [userData , setUserData] = useState(null);
    const [sessions, setSessions] = useState([]);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [loadingSessions, setLoadingSessions] = useState(true);

    // const addSessions = async () => {
    //     const stats = {
    //         wpm: +(Math.random() * 60 + 40).toFixed(0),            // 40–100 WPM
    //         accuracy: +(Math.random() * 20 + 80).toFixed(2),       // 80–100%
    //         errors: Math.floor(Math.random() * 10),                // 0–9 errors
    //         duration: Math.floor(Math.random() * 120) + 30,            // 30–150 sec
    //         charsTyped: Math.floor(Math.random() * 300) + 100,     // 100–400 chars
    //         wordsTyped: Math.floor(Math.random() * 80) + 20,        // 20–100 words
    //         textId : 1
    //     };

    //     await context.saveTypingSession(context.user.uid , stats);
    //     const updatedSessions = await context.getAllSessions(context.user.uid);
    //     setSessions(updatedSessions);
    //     await new Promise((r) => setTimeout(r, 500));

    //     const updatedUserData = await context.getUserProfile(context.user.uid);
    //     setUserData(updatedUserData);
    // }
    useEffect(() => {
        
        const fetchData = async () => {
            if (!context?.user?.uid) return;
            setLoadingProfile(true);
            setLoadingSessions(true);
            const profData = await context.getUserProfile(context.user.uid);
            setUserData(profData);

            const sessionsData = await context.getAllSessions(context.user.uid);
            setSessions(sessionsData);
            setLoadingProfile(false);
            setLoadingSessions(false);
        };

        fetchData();

    }, [context.user]);
    // console.log(userData.longestStreakDate);
    return (
        <>
        {loadingProfile ? (
        <div className="text-center p-10">
            <GridLoader color="#3ae840" margin={5} size={25}/>
            <p className='text-3xl'>Loading Profile</p>
        </div>
        ) : (
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
                            <h1 className='font-bold text-3xl'>{userData.displayName}</h1>
                            {/* <p className='text-[17px]'>alex_jhonson</p> */}
                            <p className='text-gray-600'>{userData.email}</p>
                            {/* member since 2004 ... */}
                        </div>
                    </div>
                    <div className=' flex flex-col sm:flex-row gap-2 pl-5'>
                        <button onClick={(e) => {(addSessions())}} className='  flex flex-row gap-1 px-4 py-2 rounded-[7px] items-center bg-blue-500'>
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
                            <p className='text-2xl font-bold'>{userData.averageWPM} WPM</p>
                            <p className='text-gray-600'>Average Speed</p>
                        </div>
                        <div className='text-blue-500 font-medium'>Average</div>
                    </div>

                    {/* Second Card */}
                    <div className='bg-white shadow-boxShadow p-5 rounded-2xl flex justify-between items-start w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]'>
                        <div className='flex flex-col gap-2'>
                            <div className='h-14 w-14 rounded-[10px] flex bg-[#bfedd0] text-2xl justify-center items-center text-[#0c973f]'>
                                <LuTarget/>
                            </div>
                            <p className='text-2xl font-bold'>{userData.averageAccuracy}%</p>
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
                            <p className='text-2xl font-bold'>{userData.totalSessions}</p>
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
                            <p className='text-2xl font-bold'>{userData.streak} Day{userData.streak > 1 ? "s" : ""}</p>
                            <p className='text-gray-600'>Streak</p>
                        </div>
                        <div className='text-blue-500 font-medium'>Current</div>
                    </div>
                </div>
            </div>
            <div className='mt-5 flex  w-full justify-center content-center'>
                <div className='mx-6 w-full flex-col md:flex-row max-w-5xl  flex justify-center gap-4'>
                    <RecentSessionsCard sessions = {sessions} />
                    <PersonalBestCard  highwpm = {userData.highestWPM} wpmDate = {userData.highestWPMDate} highStreak = {userData.longestStreak} highStreakDate = {userData.longestStreakDate}/>   
                </div>
            </div>
        </div>
        </>
        )}
    </>
  );
};

export default ProfilePage;