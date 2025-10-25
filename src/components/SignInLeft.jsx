import React from "react";
import { FaKeyboard } from "react-icons/fa";
import loginImage from "../assets/login-image.png"
import "../index.css"

const SignInLeft = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto max-w-120 md:h-[600px]
         bg-darkblue p-5 md:p-10 md:gap-8 gap-4 rounded-tl-2xl rounded-bl-2xl" >
            <div className="flex  items-center gap-2 font-extrabold text-2xl md:text-3xl">
                <FaKeyboard className="text-blue-600"/>
                <h1>TypoSpeed</h1>
            </div>
            <p className="text-lightcolor text-center md:text-left px-4 md:px-0">
                Unleash your typing potential. Real-time speed and accuracy tracking to help you improve, one keystroke at a time.
            </p>
            <img src={loginImage} className="h-60 w-60 md:h-80 md:w-80" alt="image not found" />
        </div>
    )
}
export default SignInLeft;