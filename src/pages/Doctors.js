import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Buttons from './Buttons'
import Data from '../components/Data'
import { NavBarBottom } from '../components/Navbar'




export default function Doctors() {
  return (
    <div className='w-full'>
        <Navbar/>
        <NavBarBottom/>
          <div className='h-96 w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat'>
                <div className='w-full h-96 bg-opacity-40 py-24 text-3xl lg:text-6xl font-bold px-12 text-text_secondary tracking-wide bg-primary'>
                    <h1>Our Doctors</h1>
                </div>

            </div>
        
  <Buttons/>

<Data/>
    <Footer/>
    </div>
    


  )
}