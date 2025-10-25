import React from "react";
import SignInLeft from "../components/SignInLeft";
import SignInRight from "../components/SignInRight";

const SignInPage = () =>{
    return (
        <div className="bg-[#111827] flex align-middle items-center justify-center text-white  h-screen">
            <div className= "flex align-middle items-center justify-center   ">
                <div className="hidden md:block">
                    <SignInLeft />
                </div>
                <SignInRight />
            </div>
        </div>
    )
}
export default SignInPage;