import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import  {BiHomeAlt2} from "react-icons/bi";
import {GiNurseMale} from "react-icons/gi";
import {AiOutlineCalendar} from "react-icons/ai"
import {MdPendingActions} from "react-icons/md"
import {RxSwitch} from "react-icons/rx"

export default function DashboardLayout({children}) {
    const [status,setStatus] =React.useState("")
  return (
    <div className='w-full min-h-screen max-h-screen border overflow-y-auto  bg-secondary'>
        <div className='flex justify-between px-4 py-2 sticky z-10 top-0 bg-secondary bg-opacity-90'>
            <div className='w-56 h-12'> 
                <img src={logo} className='w-full h-full' alt='logo'/>
            </div>
            <button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all duration-300 mb-3 py-2 text-secondary'>Logout</button>
        </div>
        <div className='lg:grid grid-cols-6 w-full'>
            <div className='px-2 py-4 fixed left-0 min-h-screen w-56 hidden lg:block'>
                <ul className='font-medium py-2 text-primary'>
                    <li className='mb-3 transition delay-150 duration-100 ease-in-out hover:text-btn_primary '>
                        <Link className='flex gap-2 justify-start'><BiHomeAlt2 size={28}/><span className='p-1'>Dashboard</span></Link>
                    </li>
                    <li className='mb-3'>
                        <Link className='flex gap-2 justify-start'><GiNurseMale size={28}/><span className='p-1'> Doctors</span></Link>
                    </li>
                    <li className='mb-3'>
                        <Link className='flex gap-2 justify-start'><MdPendingActions size={28}/><span className='p-1'> Appointments</span></Link>
                    </li>
                    <li className='mb-3'>
                        <Link className='flex gap-2 justify-start'><AiOutlineCalendar size={28}/><span className='p-1'> Sessions</span></Link>
                    </li>
                </ul>
                <div className='flex gap-4 justify-start text-primary absolute bottom-24'>
                    <RxSwitch size={30} className={`transition delay-200 duration-300 ease-in-out`}/>
                    <p>Status</p>
                </div>
            </div>
            <div className='lg:col-span-5 relative lg:left-56 min-h-screen bg-text_secondary px-4 py-4'>{children}</div>
        </div> 
    </div>
   
  )
}
