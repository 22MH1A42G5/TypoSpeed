import React, { useState, useEffect, useRef } from "react";
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
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import {faker } from '@faker-js/faker'
import { useDataBase } from '../context';
import ResultsCard from './ResultsCard';

const PracticeBody = () => {
  const [targetText ,setTargetText]=
    useState("The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once. It has been used for typing practice and font testing for many years. The phrase demonstrates how various letters look when typed together, making it an excellent tool for improving typing skills and accuracy. Many typing enthusiasts use this classic sentence to warm up before more challenging exercises. The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once. It has been used for typing practice and font testing for many years. The phrase demonstrates how various letters look when typed together, making it an excellent tool for improving typing skills and accuracy. Many typing enthusiasts use this classic sentence to warm up before more challenging exercises.");
  const containerRef = useRef(null); // you used this for the textarea focus
  const textDisplayRef = useRef(null); // ref for the passage container
  const [pause,setPause] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [Accuracy, setAccuracy] = useState(100);
  const [WPM, setWPM] = useState(0);
  const targetArray = targetText.split(" ");
  const [time, setTime] = useState(60);
  const [errors, setErrors] = useState(0);
  const [timeDuration, setTimeDuration] = useState(60);
  const [showResults, setShowResults] = useState(false);
  const [testStats, setTestStats] = useState(null);
  const intervalRef = useRef(null);
  const nav = useNavigate();
  const target = targetArray.map((str, index) => {
    if (index == targetArray.length - 1) return str;
    return str + " ";
  });

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const addSessions = async (stats) => {
    // const stats = {
    //     wpm: +(Math.random() * 60 + 40).toFixed(0),            // 40–100 WPM
    //     accuracy: +(Math.random() * 20 + 80).toFixed(2),       // 80–100%
    //     errors: Math.floor(Math.random() * 10),                // 0–9 errors
    //     duration: Math.floor(Math.random() * 120) + 30,            // 30–150 sec
    //     charsTyped: Math.floor(Math.random() * 300) + 100,     // 100–400 chars
    //     wordsTyped: Math.floor(Math.random() * 80) + 20,        // 20–100 words
    //     textId : 1
    // };

    await context.saveTypingSession(context.user.uid , stats);
    const updatedSessions = await context.getAllSessions(context.user.uid);
    setSessions(updatedSessions);
    await new Promise((r) => setTimeout(r, 500));

    const updatedUserData = await context.getUserProfile(context.user.uid);
    setUserData(updatedUserData);
}
  // Update WPM/accuracy/errors — simplified slightly to avoid double counting errors on every render.
  useEffect(() => {
    if (typedText.length > 0 && typedText.length <= targetText.length) {
      // count errors fresh (recalculate instead of incrementing to avoid overcounting)
      let newErrors = 0;
      for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] !== targetText[i]) newErrors++;
      }
      setErrors(newErrors);

      const elapsed = Math.max(1, timeDuration - time);
      const charsTyped = Math.max(1, typedText.length);
      const newWPM = (charsTyped * 12) / elapsed;
      setWPM(Number.isFinite(newWPM) ? newWPM : 0);

      const accuracy = ((charsTyped - newErrors) / charsTyped) * 100;
      setAccuracy(Number.isFinite(accuracy) ? accuracy.toFixed(0) : 100);
    }

    if (time === 0 && isActive) {
      resetTest();
      const statistics = {
          wpm: WPM,            // 40–100 WPM
          accuracy: Accuracy,       // 80–100%
          errors: errors,                // 0–9 errors
          duration: timeDuration,            // 30–150 sec
          charsTyped: typedText.length,     // 100–400 chars
          wordsTyped: typedText.split(" ").length,        // 20–100 words
          textId : 1,
          sessionDate :new Date(),
      }
      setTestStats(statistics);
      setShowResults(true);
      addSessions(statistics);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, typedText]);


 useEffect(() => {
  // Only run timer if test is active, not paused, and time remaining
  if (isActive && !pause && time > 0) {
    intervalRef.current = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  // Cleanup interval on unmount or when dependencies change
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, [isActive, pause, time]);

  const progress = Math.min((time / timeDuration) * 100, 100);

  const resetTest = () => {
    clearInterval(intervalRef.current);
    setErrors(0);
    setAccuracy(100);
    setWPM(0);
    setTypedText("");
    setTime(timeDuration);
    setIsActive(false);
    // reset scroll to top
    if (textDisplayRef.current) textDisplayRef.current.scrollTop = 0;
  };

  useEffect(()=>{
    if(!isActive)
    setTargetText(generateLongTextFromSentences());
  },[isActive]);
  function generateLongTextFromSentences() {
  // Request 30 sentences to ensure 300+ words.
  const numberOfSentences = 30; 
  
  // The .sentences() method returns one string with sentences separated by spaces.
  const longParagraph = faker.lorem.sentences(numberOfSentences);
  
  return longParagraph;
  }

  // console.log(generateLongTextFromSentences());
  // ======= SCROLL ACTIVE CHAR INTO VIEW EFFECT =======
  useEffect(() => {
    // global index of caret (character position)
    const globalIndex = typedText.length; // caret position (0-based)
    // find the span with that data attribute; if none (e.g., at end), try last char
    const display = textDisplayRef.current;
    if (!display) return;

    // find element with data-gi equal to globalIndex
    const selector = `[data-gi="${globalIndex}"]`;
    let el = display.querySelector(selector);

    // if the exact element doesn't exist (e.g., caret at very end), fallback to last char element
    if (!el) {
      el = display.querySelector('[data-gi]:last-of-type');
    }

    if (el) {
      // scroll the element into view within the passage container
      // block: "nearest" will scroll the smallest amount necessary
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, [typedText]);
  // ===================================================

  // helper to compute the global index for each char
  const computeGlobalIndex = (wordIndex, charIndex, targetArr) => {
    // sum lengths of all prior words
    let sum = 0;
    for (let i = 0; i < wordIndex; i++) sum += targetArr[i].length;
    return sum + charIndex;
  };

  return (
    <div className="flex flex-col justify-center items-center bg-darkwhite  gap-10 py-10">
      <div className="flex gap-5">
        <div className="flex justify-between w-60 bg-white shadow-boxShadow px-7 py-5 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-grey">WPM</h1>
            <p className="text-3xl font-bold text-blue-600">{WPM.toFixed(0)}</p>
          </div>
          <div className="h-14 w-14 rounded-[10px] flex 10px bg-blue-100 text-2xl justify-center items-center text-blue-600">
            <IoSpeedometer />
          </div>
        </div>
        <div className="flex justify-between w-65 bg-white shadow-boxShadow px-10 items-center rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-grey">Accuracy</h1>
            <p className="text-2xl font-bold text-green-600 ">{Accuracy}%</p>
          </div>
          <div className="h-14 w-14 rounded-[10px] flex 10px bg-green-100 text-2xl justify-center items-center text-green-600">
            <FiTarget />
          </div>
        </div>
        <div className="flex justify-between w-60 bg-white shadow-boxShadow px-10 items-center rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-grey">Errors</h1>
            <p className="text-2xl font-bold text-red-600">{errors}</p>
          </div>
          <div className="h-14 w-14 rounded-[10px] flex 10px bg-red-100 text-2xl justify-center items-center text-red-600">
            <FaXmark />
          </div>
        </div>
        <div className="flex justify-between w-60 bg-white shadow-boxShadow px-10 items-center rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-grey">Time</h1>
            <p className="text-2xl font-bold text-[#863bf6] ">{formatTime(time)}</p>
          </div>
          <div className="h-14 w-14 rounded-[10px] flex 10px bg-[#f6e6fa] text-2xl justify-center items-center text-[#863bf6]">
            <FaClock />
          </div>
        </div>
      </div>

      <div className="w-260 shadow-boxShadow bg-white p-10 flex flex-col gap-10 rounded-xl">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <select
              className="shadow-boxShadow rounded-[5px] p-2"
              name="testTime"
              id="testTime"
              disabled={isActive}
              onChange={(e) => {
                setTimeDuration(Number(e.target.value) * 60);
                setTime(Number(e.target.value) * 60);
              }}
            >
              <option value="1">1 minute</option>
              <option value="3">3 minutes</option>
              <option value="5">5 minutes</option>
            </select>

            <select className="shadow-boxShadow rounded-[5px] p-2 " name="" id="">
              <option value="1">English</option>
            </select>
          </div>
          {!isActive ? (
            <div
              onClick={() => {
                setIsActive((prev) => !prev);
              }}
              className="flex bg-secondary text-white rounded-xl justify-center items-center text-[18px] font-bold max-w-[190px]  px-5 py-2 cursor-pointer hover:bg-amber-400 transition ease-in-out duration-200"
            >
              <FaPlay className="mr-2 text-[15px]" /> Start Free Test
            </div>
          ) : (
            <div className="flex gap-4">
              {pause ?
              <div onClick={()=>{setPause(false);  }} className="flex justify-center items-center gap-3 hover:bg-darkwhite rounded-xl h-10 p-3 border border-gray-400 text-grey cursor-pointer">
                <FaPlay />
                play
              </div>:
              <div onClick={()=>{setPause(true);  }} className="flex justify-center items-center gap-3 hover:bg-darkwhite rounded-xl h-10 p-3 border border-gray-400 text-grey cursor-pointer">
                <FaPause />
                Pause
              </div>
              }
              <div
                onClick={resetTest}
                className="flex justify-center items-center gap-3 bg-primary rounded-xl h-10 p-3 text-white  hover:bg-blue-700 cursor-pointer"
              >
                <FaUndoAlt />
                Reset
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between px-2 ">
            <h1>Time</h1>
          </div>
          <div className="bg-gray-200 rounded-xl h-2">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* PASSAGE DISPLAY */}
        <div
          tabIndex={0}
          ref={textDisplayRef}
          className="select-none shadow-boxShadow rounded-xl bg-darkwhite p-6 tracking-widest text-xl/relaxed text-grey text-justify flex-wrap flex overflow-y-auto max-h-[220px]"
        >
          {target.map((word, wIdx) => {
            return (
              <span key={wIdx} className="mr-0">
                {word.split("").map((char, chIdx) => {
                  // compute global index: number of chars before this word + char position in this word
                  const globalIndex = computeGlobalIndex(wIdx, chIdx, target);
                  let colorClass = "bg-grey-500";

                  if (typedText.length > globalIndex) {
                    if (char === typedText[globalIndex]) {
                      colorClass = "text-green-500";
                    } else {
                      colorClass = "bg-red-100 text-red-600";
                    }
                  }

                  if (globalIndex === typedText.length) colorClass = "bg-blue-600 text-white";

                  return (
                    <span
                      data-gi={globalIndex}
                      key={chIdx}
                      className={`${colorClass} inline-block`}
                      // ensure spaces preserve width
                      aria-hidden
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </div>

        <textarea
          spellCheck = {false}
          value={typedText}
          disabled={!isActive}
          ref={containerRef}
          onChange={(e) => {
            // prevent typedText exceeding target length if you want:
            // if (e.target.value.length <= targetText.length) setTypedText(e.target.value);
            setTypedText(e.target.value);
          }}
          className="shadow-boxShadow w-full rounded-xl h-50 bg-white px-6 py-5 outline-black tracking-widest text-xl/relaxed  text-grey text-justify"
          placeholder="Start typing here ... Focus on accuracy first, then speed will follow."
        />
      </div>

      <div className="flex gap-10">
        <button className="w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center">
          <TiArrowShuffle className="text-xl m-2" />
          <p>New Passage</p>
        </button>
        <button className="w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center">
          <RiTeamFill className="text-xl m-2" />
          <p>New Passage</p>
        </button>
        <button className="w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center">
          <GoGraph className="text-xl m-2" />
          <p>New Passage</p>
        </button>
        <button className="w-45 p-1 flex bg-white rounded-xl justify-center text-[16px]  shadow-boxShadow  items-center">
          <IoMdSettings className="text-xl m-2" />
          <p>New Passage</p>
        </button>
      </div>
        <div className='h-20'></div>
        {showResults && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="relative">
                <ResultsCard 
                    isClicking = {true}
                    stats={testStats}
                    onClose={() => setShowResults(false)} 
                    onRetry={() => {
                        setShowResults(false);
                        resetTest();
                        setIsActive(true);
                    }}
                />
                </div>
            </div>
        )}
    </div>
  );
};

export default PracticeBody;
