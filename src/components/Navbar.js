import React from 'react'
import {AiOutlinePhone,AiOutlineInstagram} from 'react-icons/ai'
import {GiAmbulance} from 'react-icons/gi'
import {BsVirus} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {CiTwitter} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'
import {BiArrowBack} from 'react-icons/bi'
import Logo from '../assets/Logos.PNG'

export function NavBarBottom(){
    const [searchWord,setSearchWord] = React.useState("");

    return(
        <div className='w-full bg-text_secondary sticky top-0 z-10 lg:px-8 grid  grid-cols-2 lg:grid-cols-6 gap-2 bg-opacity-90 py-2'>
            <div className='w-24 h-8'> 
                <img src={Logo} className='w-full h-full' alt='logo'/>
            </div>
            <ul className='col-span-3 lg:px-4 flex justify-start gap-4 font-bold text-primary'>
                <li className='hover:text-btn_primary'>
                    <Link to="/" className='flex gap-2 justify-start px-2 py-2'> Home</Link>
                </li>
                <li className='hover:text-btn_primary px-2 py-2'>
                    <Link to="/doctors" className='flex gap-2 justify-start'> Our doctors</Link>
                </li>
                <li className='hover:text-btn_primary px-2 py-2'>
                    <Link to="/login" className='flex gap-2 justify-start'> Login</Link>
                </li>
                <li className='hover:text-btn_primary rounded-lg px-2 py-2'>
                    <Link to="/appointment-form" className='flex gap-2 justify-start'> Book Appointment</Link>
                </li>
            </ul>
            <div className='relative w-full col-span-2'>
                <input type='text' name="search" placeholder='Type in keyword' className='w-full drop-shadow pr-12 rounded-2xl outline-none border border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <CiSearch size={40} className='absolute top-0 right-0 text-secondary bg-primary p-2 rounded-2xl'/>
            </div>
        </div>
    )
}

export default function Navbar() {

  return (
    <div className='w-full relative'>
        <div className='lg:px-8 grid  grid-cols-2 lg:grid-cols-4 gap-2 justify-between py-2 bg-primary text-secondary'>
            <div className='flex justify-start gap-2 border-r border-secondary border-opacity-10 font-bold  flex-wrap'>
                <AiOutlinePhone size={24}/>
                <div className='lg:flex justify-start'>
                    <p>8000</p>
                    <p className='text-xs opacity-60 py-1'>(24 Hour hot line)</p>
                </div>
            </div>
            <div className='flex justify-start gap-2 border-r border-secondary border-opacity-10 font-bold  flex-wrap lg:text-md'>
                <GiAmbulance size={24}/>
                <div className='lg:flex justify-start'>
                    <p>+2507888888888</p>
                    <p className='text-xs opacity-60 py-1'>(Emergency Services)</p>
                </div>
                
            </div>
            <div className='flex justify-start gap-2 border-r border-secondary border-opacity-10 font-bold '>
                <BsVirus size={24}/>
                <p className='text-sm'>COVID-19 UPDATES</p>
            </div>
            <div className='flex justify-between gap-2 border-secondary border-opacity-10 font-bold'>
                <FaFacebookF size={20} className='border rounded-full text-sm p-1'/>
                <CiTwitter size={20} className='border rounded-full text-sm p-1'/>
                <AiOutlineInstagram size={20} className='border rounded-full text-sm p-1'/>

            </div>
        </div>
    </div>
  )
}
