import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Buttons from './Buttons'
import Kivin from'../img/Kivin.PNG'
import Louise from '../img/Louise.PNG'
import Uwase from '../img/Uwase.PNG'
import Zik from '../img/Zik.PNG'
import Data from '../components/Data'
import { NavBarBottom } from '../components/Navbar'

export default function Ortho() {
  return (
    <div className='w-full'>
         
        <Navbar/>
        <NavBarBottom/>
        <div className='h-96 w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat'>
                <div className='w-full h-96 bg-opacity-40 py-24 text-3xl lg:text-6xl font-bold px-12 text-text_secondary tracking-wide bg-primary'>
                    <h1> Orthopedics Doctors</h1>
                </div>

            </div>
<Buttons/>


<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
  <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
	<div class="relative flex items-end overflow-hidden ">
	  <img src={Uwase}/>
	 
	</div>

	<div class="mt-1 p-2">
	  <h2 class="text-slate-700">Dr. Uwase Yvone</h2>
	  <p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

	</div>
  </div>

  <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
	<div class="relative flex items-end overflow-hidden ">
	  <img src={Zik}/>
	 
	</div>

	<div class="mt-1 p-2">
	  <h2 class="text-slate-700">Dr. Zikama Emmanuel</h2>
	  <p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

	</div>
  </div>
  <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
	<div class="relative flex items-end overflow-hidden ">
	  <img src={Kivin}/>
	 
	</div>

	<div class="mt-1 p-2">
	  <h2 class="text-slate-700">Dr. Kivin Niyitegeka</h2>
	  <p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

	</div>
  </div>
  <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
	<div class="relative flex items-end overflow-hidden ">
	  <img src={Louise}/>
	 
	</div>

	<div class="mt-1 p-2">
	  <h2 class="text-slate-700">Dr. Louise Rwema</h2>
	  <p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

	</div>
  </div>
 
</div>
    <Data/>
    <Footer/>
    </div>
    


  )
}