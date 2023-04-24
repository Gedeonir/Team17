import React from 'react'
import Logos from '../assets/Logos.PNG'
import { Link } from 'react-router-dom'
import {BsDashLg} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='bg-primary text-secondary'>
        <div className='grid lg:grid-cols-5 sm:grid-cols-1 gap-8 py-8 px-8 w-full h-full'>
            <div className='w-full'>
                <h3 className='font-bold mb-3'>About SevenTeen</h3>
                <p className='text-justify'>Seeventeen is a private hospital located in the capital city of Rwanda. We are dedicated to providing our patients with the best care at all times during their hospital stay.</p>
                <div className='mt-3 w-48'> 
                    <img src={Logos} className='w-full h-full' alt='logo'/>
                </div>
            </div>
            <div className='w-full'>
                <h3 className='font-bold mb-3'>Quick links</h3>
                <ul>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Who we are?</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Our services</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Our doctors</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Book Appointment</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> NewsLetter</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Contact us</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold mb-3'>Latest news</h3>
                <div className='mb-3'>
                    <h3 className='text-secondary font-bold text-xs opacity-70 mb-2'>March 10,2020</h3>
                    <p className='capitalize'>Patient safety awareness week 2023</p>
                </div>
                <div className='mb-3'>
                    <h3 className='text-secondary font-bold text-xs opacity-70 mb-2'>March 10,2020</h3>
                    <p className='capitalize'>Patient safety awareness week 2023</p>
                </div>
                <div className='mb-3'>
                    <h3 className='text-secondary font-bold text-xs opacity-70 mb-2'>March 10,2020</h3>
                    <p className='capitalize'>Patient safety awareness week 2023</p>
                </div>
                
            </div>
            <div>
                <h3 className='font-bold mb-3'>Our service</h3>
                <ul className='grid justify-between'>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Who we are?</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Our services</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Our doctors</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Book Appointment</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> NewsLetter</Link>
                    </li>
                    <li>
                        <Link className='flex gap-2 justify-start'><BsDashLg size={30} color='#4ade80'/> Contact us</Link>
                    </li>
                </ul>  
            </div>
            <div className='max-h-full'>
                <h3 className='font-bold mb-3'>Subscribe to our NewsLetter</h3>
                <form className=' w-full'>
                    <input name="email" type="email" className='px-4 py-2 w-full outline-none text-primary mb-3' placeholder='Enter your email'/>
                    <button className='px-4 bg-btn_primary hover:bg-opacity-50 transition-all duration-300 mb-3 py-2'> Subscribe</button>
                </form>

            </div>
            
        </div>
        <div className='bg-footer w-full px-4 py-4 text-center text-secondary '>
            SevenTeen hospital &copy; 2023
        </div>
    </div>
    
  )
}
