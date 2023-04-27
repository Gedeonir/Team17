import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import {BsChevronCompactDown} from "react-icons/bs"
import { CiSearch } from 'react-icons/ci'
import DoctorsList from '../components/DoctorsList'
import { GiNurseMale } from 'react-icons/gi'
import AddNewDoctorModal from '../components/addNewDoctorModal'
import Uwase from '../img/Uwase.PNG'


export default function DoctorsListUsers() {
    const [open,setOpen]=React.useState(false)
    const records=[1,2,3,4,5,6]
    const [searchWord,setSearchWord] = React.useState("");

  return (
    <DashboardLayout setOpen={setOpen} open={open}>
        <div className='grid grid-cols-10 gap-4 text-primary lg:px-8 px-2'>
            <div className='flex justify-start gap-4 flex-wrap col-span-8'>
                <h2 className='text-xl font-medium'>Doctors list</h2>
            </div>

            <div className='relative w-full col-span-2'>
                <input type='text' name="search" placeholder='Type in keyword' className='w-full hidden lg:block drop-shadow pr-12 rounded-2xl outline-none border border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <CiSearch size={40} className='absolute top-0 right-0 text-secondary bg-primary p-2 rounded-2xl'/>
            </div>
        </div>
        <div className='pb-12'>
            <DoctorsList/>        
            <div className={`py-4 lg:px-6 px-2 absolute bg-secondary z-40 top-0 left-0 right-0 min-h-screen max-h-screen transform duration-700 delay-100 ease-in-out overflow-y-auto ${open?'translate-x-0':'translate-x-full'}`}>
                <div>
                    <h1 className='text-primary mb-4 text-lg font-medium'>Add new doctor</h1>
                </div>
                <div className='w-full grid lg:grid-cols-6 gap-4'>
                    <div className='lg:col-span-4'>
                        <div className='px-2 rounded-lg py-4'>
                            <div className='grid lg:grid-cols-6 gap-2 mb-3 w-full'>
                                <div class="overflow-hidden h-24 w-24 rounded-full mx-auto">
                                    <img src={Uwase} className='h-full w-full object-cover rounded-full'/>
                                </div>
                                <div className='lg:col-span-3 flex justify-between'>
                                    <div>
                                        <h3 className='text-primary text-lg font-medium'>Upload your picture</h3>
                                        <p className='text-background_secondary'>For best results, use an image at least 600px by 600px in either .jpg or .png format</p>
                                    </div>
                                </div>
                                <div className='flex lg:justify-center gap-4 lg:col-span-2 py-4'>
                                    <button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 text-secondary h-8'>Upload</button>
                                    <button className='px-4 max-w-sm rounded-md bg-background_secondary hover:bg-opacity-50 transition-all delay-100 duration-700 text-primary h-8'>Remove</button>
                                </div>
                            </div>

                            <form>
                                <div className='grid lg:grid-cols-2 gap-2 text-primary mb-3 '>
                                    <div className='grid'>
                                        <label>FirstName</label>
                                        <input type='text' name='firstname' placeholder='firstName' className='px-2 py-2 rounded-lg'/>
                                    </div>
                                    <div className='grid'>
                                        <label>LastName</label>
                                        <input type='text' name='firstname' placeholder='LastName' className='px-2 py-2 rounded-lg'/>
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-2 text-primary mb-3'>
                                    <div className='grid'>
                                        <label>Email</label>
                                        <input type='email' name='firstname' placeholder='Email' className='px-2 py-2 rounded-lg'/>
                                    </div>
                                    <div className='grid'>
                                        <label>LastName</label>
                                        <input type='number' name='firstname' placeholder='Telephone' className='px-2 py-2 rounded-lg'/>
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-2 text-primary mb-3'>
                                    <div className='grid'>
                                        <label>Department</label>
                                        <select className='rounded-lg px-2 py-2'>
                                            <option>General medecine</option>
                                            <option>General medecine</option>
                                            <option>General medecine</option>
                                        </select>
                                    </div>
                                    <div className='grid'>
                                        <label>Gender</label>
                                        <select className='rounded-lg px-2 py-2'>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>I prefer not to say</option>
                                        </select>                                    
                                    </div>
                                </div>
                                <button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 text-secondary py-2 lg:w-1/4 w-full'>Add doctor</button>
                            </form>
                        </div>
                        

                    </div>
                    <div className='px-2 rounded-lg pb-32 lg:col-span-2 max-h-screen overflow-y-auto'>
                    {records.map((record)=>{
                        return(
                        <div className='grid lg:grid-cols-5 gap-2 mb-3 w-full'>
                            <div class="overflow-hidden rounded-lg mx-auto">
                                <img src={Uwase} className='h-full w-full object-cover rounded-lg'/>
                            </div>
                            <div className='lg:col-span-4 lg:text-left text-center'>
                                <div>
                                    <h3 className='text-primary text-lg font-medium'>Dr Uwase Yvonne</h3>
                                    <p className='text-background_secondary'>ORTHOPEDICS</p>
                                </div>
                            </div>
                        </div>
                    )})}
                    </div>
                </div>
            </div>

        </div>

    </DashboardLayout>
  )
}
