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
import { BiMenu } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

export function NavBarBottom(){
    const [searchWord,setSearchWord] = React.useState("");
    const [open,setOpen]=React.useState(false);

    return(
        <div className='w-full bg-text_secondary sticky top-0 z-10 lg:px-8 px-2 grid  grid-cols-2 lg:grid-cols-6 gap-2 py-2'>
            <div className='w-24 h-8'> 
                <img src={Logo} className='w-full h-full' alt='logo'/>
            </div>
            <ul className='col-span-3 lg:px-4 lg:flex justify-start gap-4 font-bold text-primary hidden'>
                <li className='hover:text-btn_primary'>
                    <Link to="/" className='flex gap-2 justify-start px-2 py-2'> Home</Link>
                </li>
                <li className='hover:text-btn_primary px-2 py-2'>
                    <Link to="/doctors" className='flex gap-2 justify-start'> Our doctors</Link>
                </li>
                <li className='hover:text-btn_primary px-2 py-2'>
                    <Link to="/Login" className='flex gap-2 justify-start'> Login</Link>
                </li>
                <li className='hover:text-btn_primary rounded-lg px-2 py-2'>
                    <Link to="/appointment-form" className='flex gap-2 justify-start'> Book Appointment</Link>
                </li>
                
            </ul>
            <div className='relative w-full col-span-2 hidden lg:block'>
                <input type='text' name="search" placeholder='Type in keyword' className='w-full drop-shadow pr-12 rounded-2xl outline-none border border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <CiSearch size={40} className='absolute top-0 right-0 text-secondary bg-primary p-2 rounded-2xl'/>
            </div>
            <div className='flex justify-end text-btn_primary lg:hidden' onClick={()=>setOpen(!open)}>
                <BiMenu size={30}/>
            </div>

            {open&&
            <ul className='col-span-3 lg:px-4 block gap-4 font-bold text-secondary py-52 bg-primary w-full absolute min-h-screen max-h-screen'>
                <li className='hover:text-btn_primary'>
                    <Link to="/" className='flex gap-2 justify-center px-2 py-2'> Home</Link>
                </li>
                <li className='hover:text-btn_primary px-2 py-2'>
                    <Link to="/doctors" className='flex gap-2 justify-center'> Our doctors</Link>
                </li>
                <li className='hover:text-btn_primary px-2 py-2'>
                    <Link to="/Login" className='flex gap-2 justify-center'> Login</Link>
                </li>
                <li className='hover:text-btn_primary rounded-lg px-2 py-2'>
                    <Link to="/appointment-form" className='flex gap-2 justify-center'> Book Appointment</Link>
                </li>

                <li className='hover:text-btn_primary rounded-lg px-2 py-2 my-8'>
                    <div onClick={()=>setOpen(!open)} className='flex gap-2 justify-center h-12 w-12 rounded-full border-secondary border mx-auto p-2'><MdClose size={30}/></div>
                </li>
                
            </ul>}

        </div>
    )
}

export default function Navbar() {

  return (
    <div className='w-full relative'>
        <div className='lg:px-8 px-2 grid  grid-cols-2 lg:grid-cols-4 gap-2 justify-between py-2 bg-primary text-secondary'>
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
