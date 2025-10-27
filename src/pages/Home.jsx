import React from 'react'
import NavBar from '../components/NavBar'
import HomeBody from './HomeBody'
import ContactUs from '../components/ContactUs'
import { useDataBase } from '../context'
const Home = () => {
  const context = useDataBase();
  return (
    <div>
      {/* {console.log(context.user.emailVerified)} */}
        <NavBar />
        <HomeBody/>
        <ContactUs/>
    </div>

  )
}

export default Home
