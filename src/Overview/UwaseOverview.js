import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Uwase from '../img/Uwase.PNG'
import { Link } from 'react-router-dom'
import add from '../img/add.png'
import phone from '../img/phone.png'
import mail from '../img/mail.png'
import { NavBarBottom } from '../components/Navbar'

export default function UwaseOverview() {
    return (
      <div class=''>
           
        <Navbar/>
        <NavBarBottom/>
        <div class='h-96 w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat'>
          <div class='w-full h-96 bg-opacity-40 py-14 text-3xl lg:text-6xl font-bold px-12 text-text_secondary tracking-wide bg-primary'>
            <h1>Dr. Yvonne Uwase </h1>
          </div>

        </div>


<div
  class="grid grid-cols-8 rounded-lg mx-6 mb-10 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class=" col-span-2 h-96">
     <img
    class="h-full w-full  object-cover"
    src={Uwase}
    alt="" />
  </div>
 
  <div class=" flex flex-col justify-between  w-full p-10 col-span-6 h-56">


    
    <div class=" border-b border-background_secondary py-1 flex justify-between">
      <div>
        <h5
          class="mb-3 text-xl font-bold text-primary ">
          Dr. Yvonne Uwase 
        </h5>
        <h1 class="mb-2 text-background_secondary">MD, FCSECSA</h1>
      </div>
      <div>
        
        <Link to="/AppointmentForm" class='border border-secondary border-opacity-50 text-secondary bg-primary px-4 py-1 hover:bg-opacity-80 transition-all duration-200 delay-200 ml-20' >Book an apointment</Link>

        
      </div>
   
    </div>

    <div class="flex justify-start py-1 gap-3">
      <img src={add}></img>
     
   <h1>KG 544 ST</h1>
    </div>
    <div class="flex justify-start py-1 gap-3">
      <img src={phone}></img>
    <h1>+250 784792020</h1>
    
    </div>
    <div class="flex justify-start py-1 gap-3"> 
      <img src={mail}></img>    
  
   <h1 class="text-text_primary"> uwasey7@gmail.com</h1>
    
  </div>
</div>
  
</div>

<div class="mx-6 w-full py-13">
<div class="">
  
  <h5 class="mb-3 text-lg font-bold">Overview</h5>
  <p class="mb-10 text-xl">Dr. Yvonne Uwase is an orthopedic surgeon at SevenTeen Hospital, Rwanda. Her areas of expertise are general orthopedics, hip arthroplasty and spine.</p>
</div>
<div class="">
  <u class="border-b border-background_secondary mb-12">
  <h3 class="mb-3 text-xl font-bold text-background_secondary">Education</h3>
  </u>
</div>
<div class="flex  gap-90">
<div class="">
  <div class="mb-20 ">
<input type="radio" name="theme" id="dark-mode" /><label for="dark-mode">MMED in Surgery</label>
</div>
<div class="mb-2">
<input type="radio" name="theme" id="light-mode" /><label for="light-mode">Fellowship in Orthopedics</label>
</div>
</div>

<div class="ml-96">
      <div class="mb-6">
      <h1 class="text-text_primary"> 2007-2011</h1> 
      <h1>Adventist University of <br/>Central Africa</h1> 
       
      </div>
      <div class="mb-6">
      <h1 class="text-text_primary"> 2014-2016</h1> 
      <h1>College of <br/>Surgeons of East, Central and Southern Africa</h1> 
       
      </div>
</div>
</div>
</div>
<Footer/>
  </div>
    )
}