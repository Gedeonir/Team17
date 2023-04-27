import React from 'react'
import { GiBed,GiNurseMale,GiCurlingVines } from "react-icons/gi";
import {RiHotelBedLine} from "react-icons/ri"

export default function Data() {
  return (
    <div class='lg:flex justify-center gap-8 bg-secondary w-full px-2 py-4 mt-4 bg-opacity-50 drop-shadow-lg shadow-5xl'>
        <div class='flex justify-start gap-2 py-2  border-r border-background_secondary px-4 border-opacity-30'>
            <div><GiBed class=' font-normal text-primary' size={30}/></div>
            <div class='block'>
                <label class='text-sm font-bold mx-auto capitalize '>Bed capacity</label>
                <p class="text-sm font-medium word-wrap py-1 text-primary">160</p>
            </div>
            
        </div>
        <div class='flex justify-start gap-2 py-2 border-r border-background_secondary px-4 border-opacity-30'>
            <div><GiNurseMale class=' font-normal text-primary' size={30}/></div>
            <div class='block'>
                <label class='text-sm font-bold mx-auto capitalize '>Doctors</label>
                <p class="text-sm font-medium word-wrap text-primary">160</p>
            </div>
            
        </div>
        <div class='flex justify-start gap-2 py-2  border-r border-background_secondary px-4 border-opacity-30'>
            <div><GiCurlingVines class=' font-normal text-primary' size={30}/></div>
            <div class='block'>
                <label class='text-sm font-bold mx-auto capitalize '>Avg.consultations per year</label>
                <p class="text-sm font-medium word-wrap py-1 text-primary">160</p>
            </div>
            
        </div>
        <div class='flex justify-start gap-2 py-2 px-4'>
            <div><RiHotelBedLine class=' font-normal text-primary' size={30}/></div>
            <div class='block'>
                <label class='text-sm font-bold mx-auto capitalize '>Avg.Admissions per year</label>
                <p class="text-sm font-medium word-wrap py-1 text-primary">160</p>
            </div>
            
        </div>

    </div>
  )
}

