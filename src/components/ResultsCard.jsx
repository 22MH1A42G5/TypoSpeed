import React from 'react';
import { FaTrophy } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";

const ResultsCard = (props) => {
  if(!props.stats) return null;
  return (
    <div className='h-screen flex align-middle items-center justify-center'>
      <div className='bg-white min-w-[450px] h-[500px] flex items-center flex-col gap-5 rounded-2xl align-middle justify-center'>
        <div className='flex flex-col items-center align-middle gap-1'>
          <div className='h-14 w-14 rounded-full flex bg-[#a7fdb5] text-2xl justify-center items-center text-[#08681ed3]'>
            <FaTrophy />
          </div>
          {
            props.isClicking ?
            <h1 className='text-3xl font-bold'>
              Test Complete!
            </h1>
            :
            <h1 className='text-3xl font-bold'>
              Session Details
            </h1>
          }
          { props.isClicking && (
          <p className='text-xl text-gray-600'> Here's how you performed</p>
          )}
          <p className='text-[15px] text-gray-600'> Completed on: {props.stats.sessionDate.toLocaleString()}</p>
        </div>
        <div className='flex items-center min-w-[280px] justify-between'>
          <div className='flex flex-col items-center' >
            <p className='text-4xl font-bold text-blue-500'>{props.stats.wpm}</p>
            <p className='text-xl text-gray-600'>WPM</p>
          </div>
          <div className='flex flex-col items-center' >
            <p className='text-4xl font-bold text-green-500'>{props.stats.accuracy}%</p>
            <p className='text-xl text-gray-600'>Accuracy</p>
          </div>
        </div>
        <div className='flex items-center min-w-[280px] justify-between'>
          <div className='flex flex-col items-center' >
            <p className='text-4xl font-bold text-red-500'>{props.stats.errors}</p>
            <p className='text-xl text-gray-600'>Errors</p>
          </div>
          <div className='flex flex-col items-center' >
            <p className='text-4xl font-bold text-purple-500'>{props.stats.duration} secs</p>
            <p className='text-xl text-gray-600'>Time</p>
          </div>
        </div>
        { props.isClicking && (
          <button 
            onClick={props.onRetry}
            className='flex items-center gap-2 bg-blue-500 px-8 py-3 rounded-2xl text-white cursor-pointer' >
            <FaArrowRotateRight className='text-[18px]' />
            <p>Try Again</p>
          </button>
        )}
        <button 
          onClick={props.onClose} 
          className='flex items-center gap-2 bg-gray-300 px-6 py-2 rounded-xl text-black cursor-pointer'>
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;