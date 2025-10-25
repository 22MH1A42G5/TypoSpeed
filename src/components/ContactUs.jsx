import React from 'react'
import { FaKeyboard } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className='bg-[#111827] text-contactgrey py-15 flex px-40 w-full'>
      <div className='flex gap-20 flex-wrap pb-20 '>
        <div className='flex flex-col gap-5 max-w-[260px]'>
            <div className="flex items-center gap-2 ">
                <div className='w-10 h-10 bg-primary flex items-center justify-center rounded-md'>
                    <FaKeyboard className='text-xl text-white' />
                </div>
                <h1 className='text-2xl font-bold text-white '>TypoSpeed</h1>
            </div>
            <p>
                The ultimate typing test platform for speed, accuracy, and improvement tracking.
            </p>
            <div className='flex gap-5 text-xl'>
                <FaTwitter />
                <FaFacebook />
                <FaInstagramSquare />
                <IoLogoGithub />
            </div>
        </div>
        <div className='flex justify-between gap-50 flex-wrap'>
            <div className='flex flex-col  gap-2'>
                <h1 className='text-xl mb-2 font-bold text-white '>Product</h1>
                <p>Typing Test</p>
                <p>Analytics</p>
                <p> Competitions</p>
                <p>Leaderboard</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl mb-2 font-bold  text-white'>Support</h1>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p> Bug Report</p>
                <p>Feature Request</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl mb-2 font-bold text-white'>Legal</h1>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p> Cookie Policy</p>
                <p>GDPR</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
