import React from 'react'
import Navbar, { NavBarBottom } from '../components/Navbar'
import Footer from '../components/Footer'
import { GiBed,GiNurseMale,GiCurlingVines } from "react-icons/gi";
import {RiHotelBedLine} from "react-icons/ri"
import Data from '../components/Data';

export default function AppointmentForm() {
    const [open,setOpen]=React.useState(false);
    const [department,setDepartment]=React.useState("")
  return (
    <div>
        <Navbar/>
        <NavBarBottom/>
        <div class='py-12 bg-background_secondary px-8 mb-4'>
            <h1 class='font-bold text-2xl text-text_secondary'>Make Appoinment</h1>
        </div>
        <div class='lg:px-48  w-full'>
            <form class='px-8'>
                <div class='lg:grid lg:grid-cols-2 sm:block gap-4 mb-3'>
                    <div>
                        <label class='text-background_secondary font-bold'>Firstname</label>
                        <input type='text' name="search" class='w-full bg-secondary outline-none border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                    </div>
                    <div>
                        <label class='text-background_secondary font-bold'>Lastname</label>
                        <input type='text' name="search" class='w-full bg-secondary outline-none border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                    </div>
                    <div>
                        <label className='text-background_secondary font-bold'>Email</label>
                        <input type='email' name="search" className='w-full bg-secondary outline-none border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                    </div>
                    <div className='relative'>
                        <label className='text-background_secondary font-bold'>Department</label>
                        <div  className='w-full bg-secondary outline-none border-secondary py-2 px-4 text-primary' placeholder='General medecine' onChange={(e)=>{setSearchWord(e.target.value)}} onClick={()=>setOpen(!open)}>{department===""?<p>Choose department</p>:<p>{department}</p>}</div>
                        {open&& <div id="dropdown" className="z-10 absolute text-primary w-full rounded-b-lg rounded-l-lg  shadow drop-shadow bg-text_secondary ">
                            <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                <li className='cursor-pointer py-2  px-4 hover:bg-secondary' onClick={()=>{setDepartment("General medecine"); setOpen(!open)}}>General medecine</li>
                                <li className='cursor-pointer py-2  px-4 hover:bg-secondary' onClick={()=>{setDepartment("Genycologist");setOpen(!open)}}>Genycologist</li>
                                <li className='cursor-pointer py-2  px-4 hover:bg-secondary' onClick={()=>{setDepartment("Neurosurgery"),setOpen(!open)}}>Neurosurgery</li>
                            </ul>
                        </div>}
                    </div>
                    <div>
                        <label className='text-background_secondary font-bold'>Choose data</label>
                        <input type='date' name="search" className='w-full bg-secondary outline-none border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                    </div>
                </div>
                <button class='px-2 py-2 bg-btn_primary text-secondary'>Send</button>

               

            </form>
        </div>
        <Data/>
        <Footer/>
    </div>
  )
}
