import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import {GiNurseMale} from "react-icons/gi";
import {BsChevronCompactDown} from "react-icons/bs"
import {MdPendingActions} from "react-icons/md"
import {RiHotelBedLine} from "react-icons/ri"
import {RxDotFilled} from "react-icons/rx"

export default function UsersHome() {
    const [open,setOpen]=React.useState(false)
  return (
    <DashboardLayout>
        <div className='lg:px-8 px-2'>
            <h1 className=' text-primary hover:text-secondary text-xl font-medium mb-8'>Dashboard</h1>
            <div className='lg:grid grid-cols-4 gap-6 mb-3'>
                <div className='flex justify-start gap-2 px-4 py-3 mb-3 rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-100 duration-700 ease-in-out hover:bg-opacity-90'>
                    <MdPendingActions size={50}/>
                    <div className=''>
                        <h3 className='font-bold text-xl'>220k</h3>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex justify-start gap-2 px-4 py-3 mb-3  rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-100 duration-700 ease-in-out hover:bg-opacity-90'>
                    <GiNurseMale size={50}/>
                    <div className=''>
                        <h3 className='font-bold text-xl'>220</h3>
                        <p>Doctors</p>
                    </div>
                </div>
                <div className='flex justify-start gap-2 px-4 py-3 mb-3  rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-100 duration-700 ease-in-out hover:bg-opacity-90'>
                    <MdPendingActions size={50}/>
                    <div className='capitalize'>
                        <h3 className='font-bold text-xl'>220</h3>
                        <p>consultations per year</p>
                    </div>
                </div>
                <div className='flex justify-start gap-2 px-4 py-3 mb-3  rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-100 duration-700 ease-in-out hover:bg-opacity-90'>
                    <RiHotelBedLine size={50}/>
                    <div className='capitalize'>
                        <h3 className='font-bold text-xl'>220</h3>
                        <p>admissions per year</p>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-8'>
                <div class=" lg:col-span-5 relative flex flex-col items-center w-full max-w-screen-md p-4 pb-6 bg-white rounded-lg sm:p-8">
                    <div className='lg:flex justify-between text-primary w-full mb-3'>
                        <div className='flex justify-start gap-4 flex-wrap'>
                            <h2 className='text-xl font-medium'>Appointments by gender</h2>
                        </div>
                        <div className='flex justify-start gap-4 relative h-8'>
                            <label className='py-1'>Year</label>
                            <div className='rounded-xl pl-4 pr-8 py-1 relative w-24 bg-text_secondary cursor-pointer' onClick={()=>setOpen(!open)}>
                                2020
                                <BsChevronCompactDown className='absolute right-2 top-2'/>
                            </div>
                            {open&&
                                <ul className='absolute w-full top-10 z-40 bg-text_secondary py-4 drop-shadow shadow rounded-lg text-center'>
                                    <li className='px-2 py-2 cursor-pointer hover:bg-secondary transition delay-300 duration-150 ease-in-out'>2020</li>
                                    <li className='px-2 py-2 cursor-pointer hover:bg-secondary transition delay-300 duration-150 ease-in-out'>2020</li>
                                    <li className='px-2 py-2 cursor-pointer hover:bg-secondary transition delay-300 duration-150 ease-in-out'>2020</li>

                                </ul>
                                }
                        </div>
                    </div>
                    <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3 relative text-primary">
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">37,500</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-8 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-6 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-16 bg-bar_yellow"></div>	
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Jan</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">45,000</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-10 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-6 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-20 bg-bar_yellow"></div>	
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Feb</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">47,500</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-10 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-8 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-20 bg-bar_yellow"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Mar</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">50,000</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-10 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-6 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-24 bg-bar_yellow"></div>	
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Apr</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">47,500</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-10 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-8 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-20 bg-bar_yellow"></div>		
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">May</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">55,000</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-12 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-8 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-24 bg-bar_yellow"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Jun</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">60,000</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-12 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-16 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-20 bg-bar_yellow"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Jul</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">57,500</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-12 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-10 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-24 bg-bar_yellow"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Aug</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">67,500</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-12 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-10 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-32 bg-bar_yellow"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Sep</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">65,000</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-12 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-12 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow bg-bar_yellow h-28"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Oct</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">70,000</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-8 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-8 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-40 bg-bar_yellow"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Nov</span>
                        </div>
                        <div class="relative flex flex-col items-center flex-grow pb-5 group">
                            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">1000</span>
                            <div class="flex items-end w-full">
                                <div class="relative flex justify-center flex-grow h-12 bg-bar_blue"></div>
                                <div class="relative flex justify-center flex-grow h-8 bg-primary"></div>
                                <div class="relative flex justify-center flex-grow h-40 bg-bar_yellow"></div>
                            </div>
                            <span class="absolute bottom-0 text-xs font-bold">Dec</span>
                        </div>
                    </div>
                    <div class="flex w-full mt-3">
                        <div class="flex items-center ml-auto">
                            <span class="block w-4 h-4 bg-bar_yellow"></span>
                            <span class="ml-1 text-xs font-medium">Existing</span>
                        </div>
                        <div class="flex items-center ml-4">
                            <span class="block w-4  h-4 bg-primary"></span>
                            <span class="ml-1 text-xs font-medium">Female</span>
                        </div>
                        <div class="flex items-center ml-4">
                            <span class="block w-4  h-4 bg-bar_blue"></span>
                            <span class="ml-1 text-xs font-medium">New</span>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-3 bg-text_secondary p-16'>
                    <div className='w-full h-full'>

                    </div>
                </div>  
            </div>
        </div>
    </DashboardLayout>
  )
}
