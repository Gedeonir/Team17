import React from 'react'
import Navbar, { NavBarBottom } from '../components/Navbar'
import Footer from '../components/Footer'
import Doctors from './Doctors'
import Buttons from './Buttons'
import Data from '../components/Data'


export default function Neu() {
  return (
    <div className='w-full'>
         
        <Navbar/>
        <NavBarBottom/>
        <div className='h-96 w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat'>
                <div className='w-full h-96 bg-opacity-40 py-24 text-3xl lg:text-6xl font-bold px-12 text-text_secondary tracking-wide bg-primary ml-1'>
                    <h1>Neurosurgery Doctors</h1>
                </div>

            </div>
<Buttons/>
<div className='grid grid-cols-10 mb-10 mt-10 p-10'>
<div class="h-40 w-40  drop-shadow ">
  <img class="w-full" src="/img/hono.jpg" alt="....."/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dr.ISHIMWE</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Neurosurgery</span>
   
  </div>
</div>
<div class="h-40 w-40 drop-shadow  ">
  <img class="w-full" src="hono.jpg" alt="....."/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dr.ISHIMWE</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Neurosurgery</span>
   
  </div>
</div>
<div class="h-40 w-40  drop-shadow ">
  <img class="w-full" src="/img/hono.jpg" alt="....."/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dr.ISHIMWE</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Neurosurgery</span>
   
  </div>
</div>
<div class="h-40 w-40 drop-shadow  ">
  <img class="w-full" src="hono.jpg" alt="....."/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dr.ISHIMWE</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Neurosurgery</span>
   
  </div>
</div>
<div class="h-40 w-40  drop-shadow ">
  <img class="w-full" src="/img/hono.jpg" alt="....."/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dr.ISHIMWE</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Neurosurgery</span>
   
  </div>
</div>
<div class="h-40 w-40 drop-shadow  ">
  <img class="w-full" src="hono.jpg" alt="....."/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dr.ISHMWE</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Neurosurgery</span>
   
  </div>
</div>

    </div>
    <Data/>
    <Footer/>
    </div>
    


  )
}