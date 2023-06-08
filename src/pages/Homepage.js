import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'
import {BiArrowBack} from 'react-icons/bi'
import {NavBarBottom}  from '../components/Navbar'

export default function Homepage() {

  return (
    <div class=''>
        {/* <Navbar/> */}
        <NavBarBottom/>
        <div className='min-h-screen relative w-full'>
            <div className='h-96 w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat'>
                <div className='w-full h-96 bg-opacity-80 py-24 text-3xl lg:text-5xl font-bold lg:px-12 text-text_secondary tracking-wide bg-primary'>
                    <h1>Doctor Appointment System</h1>
                </div>

            </div>
            <div class='grid lg:grid-cols-3 w-full max-w-4xl mx-auto gap-4 mt-[-150px] p-3'>
                <div class='h-64 rounded-lg drop-shadow-md shadow py-4 px-4 text-secondary bg-primary'>
                    <div class='mb-3'>
                        <h3 class='text-md uppercase font-bold'>Ask for a doctor</h3>
                        <label class='font-normal text-xs'>CARE SOLUTIONS</label>
                    </div>
                    <div>
                        <p>Quality, affordable, quick medical care is just a call away on a short dial 8000. .</p>
                    </div>
                    <div class='mt-4'>
                    <a href='Doctors'>
                        <button class='border border-secondary border-opacity-50 rounded-lg text-secondary  px-4 py-2 hover:bg-opacity-80 transition-all duration-200 delay-200'>Book an apointment</button>
                        </a>
                    </div>
                </div>
                <div class='h-64 rounded-lg drop-shadow-md shadow py-4 px-4 text-primary bg-text_secondary'>
                    <div class='mb-3'>
                        <h3 class='text-md uppercase font-bold'>opening hours</h3>
                    </div>
                    <div class='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                    <div class='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                    <div class='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                    <div class='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                </div>
                <div class='h-64 rounded-lg drop-shadow shadow py-4 px-4 bg-background_secondary text-text_secondary'>
                    <div class='mb-3'>
                        <h3 class='text-md uppercase font-bold'>get in touch</h3>
                    </div>
                    <div>
                        <label class='font-normal text-md'>Hotline:8000</label>
                    </div>
                    <div>
                        <p>Quality, affordable, quick medical care is just a call away on a short dial 8000. .</p>
                    </div>
                    <div class='mt-4'>
                        <button class='border border-secondary border-opacity-50 rounded-lg text-text_secondary px-4 py-2 hover:bg-opacity-80 transition-all duration-200 delay-200'>Contact us</button>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}
