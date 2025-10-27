import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDataBase } from "../context";
import toast from "react-hot-toast";
import "../index.css"
import { sendEmailVerification } from "firebase/auth";


const SignUpRight = () => {
    const navigate = useNavigate();
    const context = useDataBase();
    const [username , setUsername] = useState('');
    const [mail , setMail] = useState('');
    const [password , setPassword] = useState('');
    const handleSignup = async (e) => {
        e?.preventDefault();
        try {
            if(!validateForm(mail , password)){
                console.log("form Validation Fail");
                return;
            }
            const available = await context.isUsernameAvailable(username);
            if(!available){
                console.log("username exists");
                toast.error("username already exists");
                return;
            }
            const userCred = await context.signupUserWithEmailAndPassword(mail, password);
            console.log(userCred);
            const user = userCred.user;
            await sendEmailVerification(user);
            toast.success("Verification link send to your mail")

            await context.createUserProfileInFirestore(mail, user.uid ,username , password);
            context.setUid(userCred.user);
        } catch (err) {
            console.error("signup error", err);
            alert(err.message || "Signup failed");
        }
        finally{
            setUsername("");
            setPassword("");
            setMail("");
        }
    }
    const validateForm = (mail , password) => {
        // if (!formData.fullname.trim()) return toast.error("Full name is required");
        if (!mail.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(mail)) return toast.error("Invalid email format");
        if (!password) return toast.error("Password is required");
        if (password.length < 8) return toast.error("Password must be at least 8 characters");
        return true;
    }
    return (
        <div className="flex flex-col items-center justify-center p-3 md:p-10 min-w-100 h-[600px] bg-rightblack gap-3 md:gap-3 rounded-2xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl">
            <h1 className=" text-xl md:text-2xl font-bold">Create Account</h1>
            <p className="text-sm md:text-base">Lets get you started!</p>

            <div className="flex flex-col w-80 max-w-sx">
                <label>Username</label>
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <FaUser className="size-5 ml-3 mr-1 "/>
                    <input onChange={e => setUsername(e.target.value)} value={username} type="text" className="outline-0 w-full rounded-[10px] h-10" placeholder="Enter a username" />
                </div>
            </div>
            <div className="flex flex-col w-80 max-w-sx">
                <label>Email Address</label>
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <IoMail className="size-7 ml-2 "/>
                    <input onChange={ e => setMail(e.target.value)} value={mail} type="email" className="outline-0 w-full rounded-[10px] h-10" placeholder="you@example.com" />
                </div>
            </div>
            <div className="w-full max-w-xs">
                <div className="flex justify-between">
                    <label>Password</label>
                </div>
                
                <div className="focus:outline-blue-500 flex items-center border-2 rounded-[10px] h-10 gap-2">
                    <FaLock className="size-5 ml-2 mr-1 "/>
                    <input onChange = {e => setPassword(e.target.value)} value={password} type="password" className="outline-0 w-full rounded-[10px] h-10" placeholder="Minumim 8 characters" />
                </div>
            </div>
            <button className="flex items-center justify-center rounded-[10px] p-1.5 gap-x-2 font-bold 
            w-full max-w-xs bg-blue-600 hover:bg-blue-500 active:bg-blue-600" 
            // onClick={ async (e) => {
            //     // if(validateForm(mail , password)) return;
            //     // console.log(validateForm());
            //     await context.signupUserWithEmailAndPassword(mail , password);
            //     await context.createUserProfileInFirestore(mail,username ,"Anonymous")
            //     // context.putData('user/' + username , {mail , password});
            // }}>
            onClick={handleSignup}>
                Create Account
            </button>
            <div id = "or-div" className="flex items-center justify-center gap-x-2 w-full">
                <div className="h-px flex-1 md:min-w-[75px] bg-white"></div>
                <p>OR</p>
                <div className="h-px flex-1 md:min-w-[75px] bg-white"></div>
            </div>
            <button className="flex items-center align-middle justify-center bg-white hover:bg-[#95979c] active:bg-white p-1.5 rounded-[10px] gap-x-2 text-black w-full max-w-xs font-bold md:w-80">
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
                <a className="" onClick={e => navigate("/login")}>Sign In</a>
            </div>

        </div>
    )
}

export default SignUpRight;