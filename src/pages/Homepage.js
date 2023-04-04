import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <div className='w-full'>
        <Navbar/>
        <div className='min-h-screen relative w-full'>
            <div className='h-96 w-full text-center relative bg-[url(https://api.brusselstimes.com/wp-content/uploads/2021/02/rwanda-hospital-c-city-of-kigali.jpg)] bg-cover bg-no-repeat'>
                <div className='w-full h-96 bg-opacity-40 py-24 text-3xl lg:text-6xl font-bold px-12 text-text_secondary tracking-wide bg-primary'>
                    <h1>A SevenTeen for all <br/> Your medical needs</h1>
                </div>

            </div>
            <div className='grid lg:grid-cols-3 w-full max-w-4xl mx-auto gap-4 mt-[-150px] p-3'>
                <div className='h-64 rounded-lg drop-shadow-md shadow py-4 px-4 text-secondary bg-primary'>
                    <div className='mb-3'>
                        <h3 className='text-md uppercase font-bold'>Ask for a doctor</h3>
                        <label className='font-normal text-xs'>CARE SOLUTIONS</label>
                    </div>
                    <div>
                        <p>Quality, affordable, quick medical care is just a call away on a short dial 8000. .</p>
                    </div>
                    <div className='mt-4'>
                        <button className='border border-secondary border-opacity-50 rounded-lg text-secondary  px-4 py-2 hover:bg-opacity-80 transition-all duration-200 delay-200'>Book an apointment</button>
                    </div>
                </div>
                <div className='h-64 rounded-lg drop-shadow-md shadow py-4 px-4 text-primary bg-text_secondary'>
                    <div className='mb-3'>
                        <h3 className='text-md uppercase font-bold'>opening hours</h3>
                    </div>
                    <div className='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                    <div className='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                    <div className='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                    <div className='border-b border-secondary flex justify-between pb-3 text-sm'>
                        <div>
                            <p>Mon-Fri</p>
                        </div>
                        <div>
                            <p>7:00 AM-17:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className='h-64 rounded-lg drop-shadow shadow py-4 px-4 bg-background_secondary text-text_secondary'>
                    <div className='mb-3'>
                        <h3 className='text-md uppercase font-bold'>get in touch</h3>
                    </div>
                    <div>
                        <label className='font-normal text-md'>Hotline:8000</label>
                    </div>
                    <div>
                        <p>Quality, affordable, quick medical care is just a call away on a short dial 8000. .</p>
                    </div>
                    <div className='mt-4'>
                        <button className='border border-secondary border-opacity-50 rounded-lg text-text_secondary px-4 py-2 hover:bg-opacity-80 transition-all duration-200 delay-200'>Contact us</button>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}
