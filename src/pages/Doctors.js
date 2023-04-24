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
import { useNavigate } from 'react-router-dom'

export default function Ortho() {
	const navigate=useNavigate();

  return (
    <div className='w-full'>
         
        <Navbar/>
        <NavBarBottom/>
        <div className='h-32 w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat bg-center'>
			<div className='w-full h-32 bg-opacity-50 py-4 text-3xl lg:text-5xl font-bold px-12 text-text_secondary tracking-wide bg-primary'>
				<h1> Our Doctors</h1>
			</div>

		</div>
		<div className='px-8'>
			<Buttons/>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
				<div class="cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl" onClick={()=>navigate('/doctors/1/details')}>
					<div class="relative flex items-end overflow-hidden h-96 ">
					<img src={Uwase} className='h-full w-full object-cover'/>
					</div>

					<div class="mt-1 p-2">
					<h2 class="text-slate-700">Dr. Uwase Yvone</h2>
					<p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

					</div>
				</div>

				<div class="cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl" onClick={()=>navigate('/doctors/1/details')}>
					<div class="relative flex items-end overflow-hidden h-96">
					<img src={Zik} className='h-full w-full object-cover'/>
					
					</div>

					<div class="mt-1 p-2">
					<h2 class="text-slate-700">Dr. Zikama Emmanuel</h2>
					<p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

					</div>
				</div>
				<div class="cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl" onClick={()=>navigate('/doctors/1/details')}>
					<div class="relative flex items-end overflow-hidden h-96">
					<img src={Kivin} className='h-full w-full object-cover'/>
					
					</div>

					<div class="mt-1 p-2">
					<h2 class="text-slate-700">Dr. Kivin Niyitegeka</h2>
					<p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

					</div>
				</div>
				<div class="cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl">
					<div class="relative flex items-end overflow-hidden h-96">
					<img src={Louise} className='h-full w-full object-cover'/>
					
					</div>

					<div class="mt-1 p-2">
					<h2 class="text-slate-700">Dr. Louise Rwema</h2>
					<p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

					</div>
				</div>
			
			</div>
		</div>




		<Data/>
		<Footer/>
    </div>
    


  )
}