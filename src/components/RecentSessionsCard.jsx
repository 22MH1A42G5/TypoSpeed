import React from 'react';

const RecentSessionsCard = () => {
  return (
    <div className=' bg-white shadow-boxShadow p-5 rounded-2xl flex flex-col 
     items-start justify-start w-full min-w-[350px] mb-2'>
        <p className='text-2xl font-bold mb-2'>
            Recent Sessions
        </p>
        <li className='bg-[#e5e5e5] w-full  shadow-boxShadow rounded-2xl flex flex-row justify-between my-[5px] p-4'>
            <div>
                <p className='text-[18px]  font-bold'>98 WPM</p>
                <p className='text-[16px]'>96.2% accuracy</p>
            </div>
            <p className='text-[12px]'>2 hours ago</p>
        </li>
        <li className='bg-[#e5e5e5] w-full  shadow-boxShadow rounded-2xl flex flex-row justify-between my-[5px] p-4'>
            <div>
                <p className='text-[18px]  font-bold'>98 WPM</p>
                <p className='text-[16px]'>96.2% accuracy</p>
            </div>
            <p className='text-[12px]'>2 hours ago</p>
        </li>
        
    </div>
  );
};

export default RecentSessionsCard;