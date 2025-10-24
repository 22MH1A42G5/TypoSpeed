import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import "../index.css"

const SignUpRight = () => {
    return (
        <div className="flex flex-col items-center justify-center p-3 md:p-10 min-w-100 h-[600px] bg-secondary gap-3 md:gap-3 text-lightcolor rounded-2xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl">
            <h1 className="text-white text-xl md:text-2xl font-bold">Create Account</h1>
            <p className="text-sm md:text-base">Lets get you started!</p>

            <div className="flex flex-col w-80 max-w-sx">
                <label>Display Name</label>
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <FaUser className="size-5 ml-3 mr-1 "/>
                    <input type="text" className="outline-0 w-full rounded-[10px] h-10" placeholder="Your Name" />
                </div>
            </div>
            <div className="flex flex-col w-80 max-w-sx">
                <label>Email Address</label>
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <IoMail className="size-7 ml-2 "/>
                    <input type="email" className="outline-0 w-full rounded-[10px] h-10" placeholder="you@example.com" />
                </div>
            </div>
            <div className="w-full max-w-xs">
                <div className="flex justify-between">
                    <label>Password</label>
                </div>
                
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <FaLock className="size-5 ml-2 mr-1 "/>
                    <input type="password" className="outline-0 w-full rounded-[10px] h-10" placeholder="Minumim 8 characters" />
                </div>
            </div>
            <button className="flex items-center justify-center bg-blue-400 rounded-[10px] p-1.5 gap-x-2 font-bold w-full max-w-xs">
                Create Account
            </button>
            <div id = "or-div" className="flex items-center justify-center gap-x-2 w-full">
                <div className="h-[1px] flex-1 md:min-w-[75px] bg-lightcolor"></div>
                <p>OR</p>
                <div className="h-[1px] flex-1 md:min-w-[75px] bg-lightcolor"></div>
            </div>
            <button className="flex items-center align-middle justify-center bg-white p-1.5 rounded-[10px] gap-x-2 text-black w-full max-w-xs font-bold md:w-80">
                <FaGoogle />
                Continue With Google
            </button>
            <p className="text-[10px] flex gap-1">
                By signing up, you agree to our
                <a href="" className="underline"> Terms of Service</a> 
                and 
                <a href="" className="underline">Privacy Policy. </a>
            </p>

            <div className="flex gap-2 text-sm md:text-base">
                <p>Already Have an account?</p>
                <a className="text-blue-500" href="http://localhost:5173/login">Sign Up</a>
            </div>

        </div>
    )
}

export default SignUpRight;