import React from 'react'
import Navbar, { NavBarBottom } from '../components/Navbar'
import Footer from '../components/Footer'
import { GiBed,GiNurseMale,GiCurlingVines } from "react-icons/gi";
import {RiHotelBedLine} from "react-icons/ri"
import Data from '../components/Data';

export default function AppointmentForm() {
  return (
    <div className='w-full'>
        <Navbar/>
        <NavBarBottom/>
        <div className='py-12 bg-background_secondary px-8 mb-4'>
            <h1 className='font-bold text-2xl text-text_secondary'>Make Appoinment</h1>
        </div>
        <div className='lg:px-48  w-full'>
            <form className='px-8'>
                <div className='lg:grid lg:grid-cols-2 sm:block gap-4 mb-3'>
                    <div>
                        <label className='text-background_secondary font-bold'>Firstname</label>
                        <input type='text' name="search" className='w-full bg-secondary outline-none border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                    </div>
                    <div>
                        <label className='text-background_secondary font-bold'>Lastname</label>
                        <input type='text' name="search" className='w-full bg-secondary outline-none border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                    </div>
                    <div>
                        <label className='text-background_secondary font-bold'>Email</label>
                        <input type='text' name="search" className='w-full bg-secondary outline-none border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                    </div>
                    <div>
                        <label className='text-background_secondary font-bold'>Department</label>
                        <input type='text' name="search" className='w-full bg-secondary outline-none border-secondary' placeholder='General medecine' onChange={(e)=>{setSearchWord(e.target.value)}} disabled/>
                    </div>
                    <div className='col-span-2 mt-4'>
                     <textarea id="comment" rows="4" className="px-2 w-full text-sm text-text_secondary drop-shadow bg-secondary border-0 " placeholder="Any clarifications......" required></textarea>
                    </div>
                </div>
                <button className='px-2 py-2 bg-btn_primary text-secondary'>Send</button>

               

            </form>
        </div>
        <Data/>
        <Footer/>
    </div>
  )
}
