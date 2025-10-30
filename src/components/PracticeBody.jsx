import React, { useState ,useEffect} from 'react'
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
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";

const PracticeBody = () => {
    const targetText = "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once. It has been used for typing practice and font testing for many years. The phrase demonstrates how various letters look when typed together, making it an excellent tool for improving typing skills and accuracy. Many typing enthusiasts use this classic sentence to warm up before more challenging exercises."
    const containerRef = useRef(null);
    // const [testDuration,setTestDuration] = useState(60)
    const [typedText,setTypedText] = useState("");
    const [isActive,setIsActive] = useState(false);
    const [Accuracy,setAccuracy] = useState(100);
    const [WPM,setWPM] = useState(0);
    const targetArray = targetText.split(" ");
    const [time, setTime] = useState(60);
    const [errors,setErrors] = useState(0);
    const [timeDuration,setTimeDuration] = useState(60);
    const intervalRef = useRef(null);
    const nav = useNavigate();
    const target = targetArray.map((str,index)=>{ if(index == targetArray.length -1) return str; return (str+" ")})
    
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    useEffect(() => {
    if (typedText.length > 0 && typedText.length <= targetText.length) {
        if (typedText[typedText.length - 1] !== targetText[typedText.length - 1]) {
        setErrors((prev) => prev + 1);
        }
        const elapsed = Math.max(1, timeDuration - time); 
        const charsTyped = Math.max(1, typedText.length);
        const newWPM = (charsTyped * 12) / elapsed;
        setWPM(Number.isFinite(newWPM) ? newWPM : 0);
        const accuracy = ((charsTyped - errors) / charsTyped) * 100;
        setAccuracy(Number.isFinite(accuracy) ? accuracy.toFixed(0) : 100);
    }
    if (time === 0 && isActive) {
        resetTest();
        alert(
        `Test Completed \nYour WPM: ${WPM.toFixed(0)} \nYour Accuracy: ${Accuracy}% \nYour Errors: ${errors}`
        );
    }
    }, [time, typedText]);



    useEffect(() => {
        if (isActive) {
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
    } else {
        clearInterval(intervalRef.current);
    }
        return () => clearInterval(intervalRef.current);
    }, [isActive]);



    useEffect(() => {
        // if (!isActive) return;
        // window.addEventListener("keydown", handleKeyDown);
        // return () => window.removeEventListener("keydown", handleKeyDown);
        if(!isActive) return;
        containerRef.current.focus();

    }, [isActive]);

    const progress = Math.min((time / timeDuration) * 100, 100);

    const resetTest = () => {
        clearInterval(intervalRef.current);
        setErrors(0);
        setAccuracy(100);
        setWPM(0);
        setTypedText("");
        setTime(timeDuration);
        setIsActive(false);
    };

    


  return (
    <div className='flex flex-col justify-center items-center bg-darkwhite  gap-10 py-10'>
      <div className='flex gap-5'>
        <div className='flex justify-between w-60 bg-white shadow-boxShadow px-7 py-5 rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>WPM</h1>
                <p className='text-3xl font-bold text-blue-600' >{WPM.toFixed(0)}</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-blue-100 text-2xl justify-center items-center text-blue-600'><IoSpeedometer/></div>
        </div>
        <div className='flex justify-between w-65 bg-white shadow-boxShadow px-10 items-center rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>Accuracy</h1>
                <p className='text-2xl font-bold text-green-600 ' >{Accuracy}%</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-green-100 text-2xl justify-center items-center text-green-600'><FiTarget /></div>
        </div>
        <div className='flex justify-between w-60 bg-white shadow-boxShadow px-10 items-center rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>Errors</h1>
                <p className='text-2xl font-bold text-red-600' >{errors}</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-red-100 text-2xl justify-center items-center text-red-600'><FaXmark /></div>
        </div>
        <div className='flex justify-between w-60 bg-white shadow-boxShadow px-10 items-center rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-grey'>Time</h1>
                <p className='text-2xl font-bold text-[#863bf6] ' >{formatTime(time)}</p>
            </div>
            <div className='h-14 w-14 rounded-[10px] flex 10px bg-[#f6e6fa] text-2xl justify-center items-center text-[#863bf6]'><FaClock /></div>
        </div>
      </div>

        <div className='w-260 shadow-boxShadow bg-white p-10 flex flex-col gap-10 rounded-xl' >
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <select
                        className="shadow-boxShadow rounded-[5px] p-2"
                        name="testTime"
                        id="testTime"
                        disabled= {isActive}
                        onChange={(e) =>{ setTimeDuration(Number(e.target.value) * 60); setTime(e.target.value * 60);}}
                        >
                        <option value="1">1 minute</option>
                        <option value="3">3 minutes</option>
                        <option value="5">5 minutes</option>
                    </select>

                    <select className='shadow-boxShadow rounded-[5px] p-2 ' name="" id="">
                        
                        <option value="1">English</option>
                        {/* <option value="3">Programming</option>
                        <option value="4">Numbers</option>
                        <option value="5">Quotes</option> */}
                    </select>
                </div>
                { (!isActive) ? <div onClick={()=>{setIsActive((prev) => !prev);}} className='flex bg-secondary text-white rounded-xl justify-center items-center text-[18px] font-bold max-w-[190px]  px-5 py-2 cursor-pointer hover:bg-amber-400 transition ease-in-out duration-200'> <FaPlay className='mr-2 text-[15px]' /> Start Free Test</div>:
                <div className='flex gap-4'>
                    <div className='flex justify-center items-center gap-3 hover:bg-darkwhite rounded-xl h-10 p-3 border border-gray-400 text-grey cursor-pointer'><FaPause />Pause</div>
                    <div onClick={resetTest} className='flex justify-center items-center gap-3 bg-primary rounded-xl h-10 p-3 text-white  hover:bg-blue-700 cursor-pointer'><FaUndoAlt />Reset</div>
                </div>
                }
                
            </div>
            <div className='flex flex-col gap-2'>    
                <div className='flex justify-between px-2 ' >
                    <h1>Time</h1>
                    {/* <p>0 / 250 words</p> */}
                </div>
                <div className='bg-gray-200 rounded-xl h-2' >
                    <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            <div 
                tabIndex={0}
                // onKeyDown={handleKeyDown}
                className=' select-none shadow-boxShadow rounded-xl bg-darkwhite p-6 tracking-widest text-xl/relaxed  text-grey text-justify flex-wrap flex'
            >
{
                target.map((word , index)=>{
                    return (
                        <span key={index} >
                            {
                                word.split("").map((char,ind)=>{
                                    const temp = [...target];
                                    const globalIndex = temp.splice(0,index).join("").length + ind;
                                let color = "bg-grey-500";
                                if(typedText.length > globalIndex ){
                                    if(char == typedText[globalIndex]){
                                        color = "text-green-500";
                                        // setErrors((prev)=>prev+1);
                                    }else{  color = "bg-red-100 text-red-600";}
                                }
                                if(globalIndex == typedText.length) color = "bg-blue-600 text-white"
                                return (
                                    <span key={ind} className={color}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>)
                                })}
                                
                                
                        </span>
                    )
                    })
                    }
                {/* The quick brown fox jumps over the lazy dog. This pangram contains every letter of
                    the alphabet at least once. It has been used for typing practice and font testing
                    for many years. The phrase demonstrates how various letters look when typed
                    together, making it an excellent tool for improving typing skills and accuracy.
                    Many typing enthusiasts use this classic sentence to warm up before more
                    challenging exercises. */}
            </div>

            <textarea value={typedText} disabled = {!isActive} ref = {containerRef} onChange={(e)=>{setTypedText(e.target.value)}} className='shadow-boxShadow w-full rounded-xl h-50 bg-white px-6 py-5 outline-black tracking-widest text-xl/relaxed  text-grey text-justify' placeholder='Start typing here ... Focus on accuracy first, then speed will follow.' />
                
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
