import React, { useState } from 'react';
import ResultsCard from './ResultsCard';
// import { useState } from 'react';

const RecentSessionsCard = (props) => {
    const [selectedSession, setSelectedSession] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    function getTimeAgo(timestamp) {
        if (!timestamp) return "";

        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();

        const seconds = Math.floor((now - date) / 1000);

        if (seconds < 60) return "just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;

        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

        const days = Math.floor(hours / 24);
        if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

        const weeks = Math.floor(days / 7);
        if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

        const months = Math.floor(days / 30);
        if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;

        const years = Math.floor(days / 365);
        return `${years} year${years > 1 ? "s" : ""} ago`;
    }
    const handleSessionClick = (session) => {
        setSelectedSession(session);
        setIsOpen(true);
    };

    const handleClose = () => {
        setSelectedSession(null);
        setIsOpen(false);
    };
    return (
        <div className=' bg-white shadow-boxShadow p-5 rounded-2xl flex flex-col 
        items-start justify-start w-full min-w-[350px] mb-2'>
            <p className='text-2xl font-bold mb-2'>
                Recent Sessions
            </p>
                {props.sessions.map(s => (
                // <li key={s.id}>
                //     {s.wpm} WPM - {s.accuracy}% ({new Date(s.timestamp).toLocaleString()})
                // </li>
                    <li  key={s.id} onClick={() => handleSessionClick(s)} className='bg-[#e5e5e5] w-full  shadow-boxShadow rounded-2xl flex 
                    flex-row justify-between my-[5px] p-4 transition duration-200 cursor-pointer hover:bg-primary hover:text-white'>
                        <div>
                            <p className='text-[18px]  font-bold'>{s.wpm} WPM</p>
                            <p className='text-[16px]'>{s.accuracy}% accuracy</p>
                        </div>
                        <p className='text-[12px]'>{getTimeAgo(s.timestamp)}</p>
                    </li>
                
                ))}
                {isOpen && selectedSession && (
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                        <ResultsCard
                            stats={{
                                ...selectedSession,
                                sessionDate:
                                selectedSession.timestamp.toDate
                                ? selectedSession.timestamp.toDate()
                                : new Date(selectedSession.timestamp),
                            }}
                            isClicking={false} // hides retry button
                            onClose={handleClose}
                        />
                    </div>
                )}


            {/* <li className='bg-[#e5e5e5] w-full  shadow-boxShadow rounded-2xl flex flex-row justify-between my-[5px] p-4'>
                <div>
                    <p className='text-[18px]  font-bold'>98 WPM</p>
                    <p className='text-[16px]'>96.2% accuracy</p>
                </div>
                <p className='text-[12px]'>2 hours ago</p>
            </li> */}
            
        </div>
    );
};

export default RecentSessionsCard;