import React from 'react'
import NavBar from '../components/NavBar'
import HomeBody from './HomeBody'
import ContactUs from '../components/ContactUs'
import { useDataBase } from '../context'
import toast from 'react-hot-toast'
const Home = () => {
  const context = useDataBase();
    (context.user && context.verified === false)? toast.success("Verify Your mail"):""
  return (
    <div>{
      }
      {/* {console.log(context.user.emailVerified)} */}
        <NavBar />
        <HomeBody/>
        <ContactUs/>
    </div>

  )
}

export default Home
