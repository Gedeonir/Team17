import React from 'react'
import {AiOutlinePhone,AiOutlineInstagram} from 'react-icons/ai'
import {GiAmbulance} from 'react-icons/gi'
import {BsVirus} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {CiTwitter} from 'react-icons/ci'

export default function Navbar() {
  return (
    <div className='sticky top-0 py-4 lg:px-4 grid  grid-cols-2 lg:grid-cols-4 justify-between bg-primary drop-shadow z-10 text-secondary'>
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
  )
}
