import React from 'react'
import DefaultProfile from '../img/DefaultProfile.jpeg'
import DefaultProfileWoman from '../img/DefaultProfileWoman.jpeg'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router'

export default function DoctorCard({doctor,handleOpenDeleteModal}) {
    const [open,setOpen]=React.useState(false);
    const navigate=useNavigate();

  return (
    <div key={doctor._id} className="cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl relative">
        <div onClick={()=>navigate(`doctors/${doctor._id}/details`)}>
            <div className="relative flex items-end overflow-hidden h-52">
                <img src={doctor.gender==="Male"?DefaultProfile:DefaultProfileWoman} className='h-full w-full object-cover'/>
            </div>

            <div className="mt-1 p-2 text-primary">
                <h2 className="font-bold">Dr. {doctor.firstName} {doctor.lastName}</h2>
                <p className="mt-1 text-sm text-slate-400">{doctor.departmentName}</p>
            </div>
        </div>
        {location.pathname==="/doctorsUsers" &&
        <button className='absolute top-0 right-0 flex justify-start gap-2 z-40 py-2 rounded-full px-2 cursor-pointer text-primary'>
            <BiDotsVerticalRounded size={25} onClick={()=>setOpen(!open)} className='hover:opacity-50 duration-100 ease-in-out'/>
            {open&&
            <ul className='shadow-lg bg-secondary absolute rounded-l-lg rounded-b-lg top-10 right-5 py-2 w-32'>
                <li className='text-primary font-bold px-2 text-left cursor-pointer hover:bg-background_secondary hover:bg-opacity-20 duration-200 ease-in-out'>Edit</li>
                <li onClick={()=>handleOpenDeleteModal(doctor._id,doctor.firstName+" "+doctor.lastName)} className='text-danger font-bold px-2 text-left cursor-pointer hover:bg-background_secondary hover:bg-opacity-20 duration-200 ease-in-out'>Delete</li>
            </ul>}
        </button>}
    </div>
  )
}
