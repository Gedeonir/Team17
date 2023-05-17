import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Data from '../components/Data'
import { NavBarBottom } from '../components/Navbar'
import DoctorsList from '../components/DoctorsList'

export default function Doctors() {

  return (
    <div class='w-full'>
         
        <Navbar/>
        <NavBarBottom/>
        <div className='w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat bg-center'>
			<div className='w-full bg-opacity-50 py-4 text-3xl lg:text-5xl font-bold px-12 text-text_secondary tracking-wide bg-primary'>
				<h1> Our Doctors</h1>
			</div>

		</div>
		<DoctorsList/>
		<Data/>
		<Footer/>
    </div>
    


  )
}

