import React from 'react'
import { GiBed,GiNurseMale,GiCurlingVines } from "react-icons/gi";
import {RiHotelBedLine} from "react-icons/ri"

export default function Data() {
  return (
    <div className='lg:flex justify-center gap-8 bg-secondary w-full px-2 py-4 mt-4 bg-opacity-50 drop-shadow-lg shadow-5xl'>
        <div className='flex justify-start gap-2 py-2  border-r border-background_secondary px-4 border-opacity-30'>
            <div><GiBed className=' font-normal text-primary' size={30}/></div>
            <div className='block'>
                <label className='text-sm font-bold mx-auto capitalize '>Bed capacity</label>
                <p className="text-sm font-medium word-wrap py-1 text-primary">160</p>
            </div>
            
        </div>
        <div className='flex justify-start gap-2 py-2 border-r border-background_secondary px-4 border-opacity-30'>
            <div><GiNurseMale className=' font-normal text-primary' size={30}/></div>
            <div className='block'>
                <label className='text-sm font-bold mx-auto capitalize '>Doctors</label>
                <p className="text-sm font-medium word-wrap text-primary">160</p>
            </div>
            
        </div>
        <div className='flex justify-start gap-2 py-2  border-r border-background_secondary px-4 border-opacity-30'>
            <div><GiCurlingVines className=' font-normal text-primary' size={30}/></div>
            <div className='block'>
                <label className='text-sm font-bold mx-auto capitalize '>Avg.consultations per year</label>
                <p className="text-sm font-medium word-wrap py-1 text-primary">160</p>
            </div>
            
        </div>
        <div className='flex justify-start gap-2 py-2 px-4'>
            <div><RiHotelBedLine className=' font-normal text-primary' size={30}/></div>
            <div className='block'>
                <label className='text-sm font-bold mx-auto capitalize '>Avg.Admissions per year</label>
                <p className="text-sm font-medium word-wrap py-1 text-primary">160</p>
            </div>
            
        </div>

    </div>
  )
}

