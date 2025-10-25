import React from "react";
import { FaKeyboard } from "react-icons/fa";
import loginImage from "../assets/signup-image.png"
import "../index.css"

const SignUpLeft = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-auto md:max-w-120 md:h-[600px] bg-leftblack p-5 md:p-10 md:gap-8 gap-4 rounded-tl-2xl rounded-bl-2xl" >
            <div className="flex  items-center gap-2 font-extrabold text-2xl md:text-3xl">
                <FaKeyboard className="text-blue-600"/>
                <h1>TypoSpeed</h1>
            </div>
            <p className="text-center md:text-left px-4 md:px-0">
                Join a community of typists dedicated to speed, accuracy, and continuous improvement. 
                Start your journey today!

            </p>
            <img src={loginImage} className="rounded-xl h-60 w-60 md:h-80 md:w-80" alt="image not found" />
        </div>
    )
}

export default SignUpLeft;