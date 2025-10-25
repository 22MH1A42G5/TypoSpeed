import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "../index.css"

const SignInRight = () => {
    return (
        <div className="flex flex-col items-center justify-center p-3 md:p-10 
        min-w-100 h-[600px] bg-lightblue gap-3 md:gap-5 text-lightcolor rounded-2xl md:rounded-tl-none md:rounded-bl-none 
        md:rounded-tr-2xl md:rounded-br-2xl overflow-hidden">
            <h1 className="text-white text-xl md:text-2xl font-bold">Welcome Back!</h1>
            <p className="text-sm md:text-base">Sign in to Continue your journey.</p>

            <div className="flex flex-col md:w-80 w-17/20 max-w-sx ">
                <label>Email Address</label>
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <IoMail className="size-7 ml-2 "/>
                    <input type="email" className="outline-0 w-full rounded-[10px] h-10" />
                </div>
            </div>
            <div className="w-full max-w-xs">
                <div className="flex justify-between">
                    <label>Password</label>
                    <a href="" className="text-white">Forgot password?</a>
                </div>
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <FaLock className="size-5 ml-3 mr-1 "/>
                    <input type="password" className="outline-0 w-full rounded-[10px] h-10" />
                </div>
            </div>
            <button className="flex items-center justify-center bg-lightorange active:bg-lightorange hover:bg-[#f3b448] rounded-[10px] p-1.5 gap-x-2 font-bold w-full max-w-xs">
                Sign In
            </button>
            <div id = "or-div" className="flex items-center justify-center gap-x-2 w-full">
                <div className="h-px flex-1 md:min-w-[75px] bg-lightcolor"></div>
                <p>OR</p>
                <div className="h-1px flex-1 md:min-w-[75px] bg-lightcolor"></div>
            </div>
            <button className="flex items-center align-middle justify-center bg-white p-1.5 rounded-[10px] gap-x-2 text-black w-full max-w-xs font-bold md:w-80">
                <FaGoogle />
                Continue With Google
            </button>
            <div className="flex gap-2 text-sm md:text-base">
                <p>Don't Have an account?</p>
                <a className="text-white" href="http://localhost:5173/signup">Sign Up</a>
            </div>

        </div>
    )
}

export default SignInRight;