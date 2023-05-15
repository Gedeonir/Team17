import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Uwase from '../img/Uwase.PNG'
import { Link } from 'react-router-dom'
import add from '../img/add.png'
import phone from '../img/phone.png'
import mail from '../img/mail.png'
import { NavBarBottom } from '../components/Navbar'
import DetailsOfDoctors from "../components/DetailsOfDoctors";

export default function DoctorDetails() {
    return (
      <div class=''>
           
        <Navbar/>
        <NavBarBottom/>
        <div className='w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat bg-center'>
          <div className='w-full bg-opacity-50 py-4 text-3xl lg:text-5xl font-bold px-12 text-text_secondary tracking-wide bg-primary'>
            <h1> Dr. Yvonne Uwase</h1>
          </div>

        </div>
        <DetailsOfDoctors/>
        <Footer/>
      </div>
    )
}