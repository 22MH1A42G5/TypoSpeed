import React from "react";
import SignUpLeft from "../components/SignUpLeft";
import SignUpRight from "../components/SignUpRight";

const SignUpPage = () => {
    return (
       <div className= "flex flex-col md:flex-row min-h-screen align-middle items-center justify-center  text-white bg-black">
            <div className="hidden md:block">
                <SignUpLeft />
            </div>
            <SignUpRight />
        </div>
    )
}
export default SignUpPage;