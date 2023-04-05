import React from 'react'
import {AiOutlinePhone,AiOutlineInstagram} from 'react-icons/ai'
import {GiAmbulance} from 'react-icons/gi'
import {BsVirus} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {CiTwitter} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'
import {BiArrowBack} from 'react-icons/bi'

export function NavBarBottom(){
    const [searchWord,setSearchWord] = React.useState("");

    return(
        <div className='w-full bg-text_secondary sticky top-0 z-10 lg:px-4 grid  grid-cols-2 lg:grid-cols-6 gap-2 bg-opacity-90 py-4'>
            {/* <div className='mt-3 w-8 h-8'> 
                <img src={logo} className='w-full h-full' alt='logo'/>
            </div> */}
            <ul className='col-span-3 px-4 flex justify-start gap-4 font-bold py-2 text-primary'>
                <li>
                    <Link className='flex gap-2 justify-start'> Home</Link>
                </li>
                <li>
                    <Link className='flex gap-2 justify-start'> Our doctors</Link>
                </li>
                <li>
                    <Link className='flex gap-2 justify-start'> Book Appointment</Link>
                </li>
            </ul>
            <div className='relative w-full col-span-2 px-4'>
                <input type='text' name="search" placeholder='Type in keyword' className='w-full drop-shadow pr-12 rounded-2xl outline-none border border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <CiSearch size={40} className='absolute top-0 right-3 text-secondary bg-primary p-2 rounded-full'/>
            </div>
        </div>
    )
}

export default function Navbar() {

  return (
    <div className='w-full relative'>
        <div className='lg:px-4 grid  grid-cols-2 lg:grid-cols-4 justify-between py-2 bg-primary text-secondary'>
            <div className='flex justify-start gap-2 border-r border-secondary border-opacity-10 font-bold p-3 flex-wrap'>
                <AiOutlinePhone size={24}/>
                <div className='lg:flex justify-start'>
                    <p>3939</p>
                    <p className='text-xs opacity-60 py-1'>(24 Hour hot line)</p>
                </div>
            </div>
            <div className='flex justify-start gap-2 border-r border-secondary border-opacity-10 font-bold p-3 flex-wrap lg:text-md'>
                <GiAmbulance size={24}/>
                <div className='lg:flex justify-start'>
                    <p>+2507888888888</p>
                    <p className='text-xs opacity-60 py-1'>(Emergency Services)</p>
                </div>
                
            </div>
            <div className='flex justify-start gap-2 border-r border-secondary border-opacity-10 font-bold p-3'>
                <BsVirus size={24}/>
                <p className='text-sm'>COVID-19 UPDATES</p>
            </div>
            <div className='flex justify-start gap-2 border-secondary border-opacity-10 font-bold p-3'>
                <FaFacebookF size={30} className='border rounded-full text-sm p-1'/>
                <CiTwitter size={30} className='border rounded-full text-sm p-1'/>
                <AiOutlineInstagram size={30} className='border rounded-full text-sm p-1'/>

            </div>
        </div>
    </div>
  )
}
