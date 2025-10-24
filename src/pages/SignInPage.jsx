import React from "react";
import SignInLeft from "../components/SignInLeft";
import SignInRight from "../components/SignInRight";

const SignInPage = () =>{
    return (
        <div className= "flex h-screen align-middle items-center justify-center  text-white bg-black">
            <div className="hidden md:block">
                <SignInLeft />
            </div>
            <SignInRight />
        </div>
    )
}
export default SignInPage;