import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import {GiNurseMale} from "react-icons/gi";
import {BsChevronCompactDown} from "react-icons/bs"
import {MdPendingActions} from "react-icons/md"
import {RiHotelBedLine} from "react-icons/ri"
import {RxDotFilled} from "react-icons/rx"

export default function UsersHome() {
    const [open,setOpen]=React.useState(false)
    const records=[1,2,3,4,5,6,7,8,9,10]
  return (
    <DashboardLayout>
        <h1 className=' text-primary hover:text-secondary text-xl font-medium mb-8'>Dashboard</h1>
        <div className='lg:grid grid-cols-4 gap-6'>
            <div className='flex justify-start gap-2 mb-3 rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-300 duration-100 ease-in-out hover:bg-opacity-90'>
                <MdPendingActions size={80}/>
                <div className='py-3'>
                    <h3 className='font-bold text-xl'>220k</h3>
                    <p>Appointments</p>
                </div>
            </div>
            <div className='flex justify-start gap-2 mb-3  rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-300 duration-100 ease-in-out hover:bg-opacity-90'>
                <GiNurseMale size={80}/>
                <div className='py-3'>
                    <h3 className='font-bold text-xl'>220</h3>
                    <p>Doctors</p>
                </div>
            </div>
            <div className='flex justify-start gap-2 mb-3  rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-300 duration-100 ease-in-out hover:bg-opacity-90'>
                <MdPendingActions size={80}/>
                <div className='py-3 capitalize'>
                    <h3 className='font-bold text-xl'>220</h3>
                    <p>consultations per year</p>
                </div>
            </div>
            <div className='flex justify-start gap-2 mb-3  rounded-lg drop-shadow shadow text-secondary bg-primary cursor-pointer transition delay-300 duration-100 ease-in-out hover:bg-opacity-90'>
                <RiHotelBedLine size={80}/>
                <div className='py-3 capitalize'>
                    <h3 className='font-bold text-xl'>220</h3>
                    <p>admissions per year</p>
                </div>
            </div>

        </div>

        <div className='lg:grid grid-cols-6 gap-2 w-full my-8 py-4'>
            <div className='col-span-5 relative'>
                <div className='lg:flex justify-between text-primary'>
                    <div className='flex justify-start gap-4 flex-wrap'>
                        <h2 className='text-xl font-medium'>Appointments list</h2>
                        <div className='bg-secondary px-4 rounded-lg h-6 my-1 hover:bg-secondary cursor-pointer transition delay-300 duration-150 ease-in-out '>All</div>
                        <div className='px-4 rounded-lg h-6 my-1 hover:bg-secondary cursor-pointer transition delay-300 duration-150 ease-in-out'>Pending</div>
                        <div className='px-4 rounded-lg h-6 my-1 hover:bg-secondary cursor-pointer transition delay-300 duration-150 ease-in-out'>Completed</div>
                        <div className='px-4 rounded-lg h-6 my-1 hover:bg-secondary cursor-pointer transition delay-300 duration-150 ease-in-out'>Failed</div>


                    </div>
                    <div className='flex justify-start gap-4 relative'>
                        <label className='py-2'>Year</label>
                        <div className=' bg-secondary rounded-xl pl-4 pr-8 py-2 relative w-24' onClick={()=>setOpen(!open)}>
                            2020
                            <BsChevronCompactDown className='absolute right-2 top-3'/>
                        </div>
                        {open&&
                            <ul className='absolute w-full top-12 bg-secondary py-4 drop-shadow shadow rounded-lg text-center'>
                                <li className='px-2 py-2 cursor-pointer hover:bg-background_secondary transition delay-300 duration-150 ease-in-out'>2020</li>
                                <li className='px-2 py-2 cursor-pointer hover:bg-background_secondary transition delay-300 duration-150 ease-in-out'>2020</li>
                                <li className='px-2 py-2 cursor-pointer hover:bg-background_secondary transition delay-300 duration-150 ease-in-out'>2020</li>

                            </ul>
                            }
                    </div>
                </div>
                <div className='grid grid-cols-10 gap-2 text-primary font-medium mt-4 bg-secondary py-2 px-2 overflow-x-auto'>
                    <div className='py-1 '>#ID</div>
                    <div className='py-1  col-span-2'>Names</div>
                    <div className='py-1  col-span-2'>Department</div>
                    <div className='py-1  col-span-2'>Doctor</div>
                    <div className='py-1 col-span-2'>Date</div>
                    <div className='py-1 '>Session</div>
                </div>
                {records.map((record)=>{
                    return(
                        <div className='grid grid-cols-10 gap-2 text-primary hover:bg-text_secondary hover:drop-shadow-lg hover:shadow-lg transition delay-300 duration-150 ease-in-out py-2 px-2 relative cursor-pointer'>
                            <div className='py-1 '>#{record}</div>
                            <div className='py-1  col-span-2'>IRAFASHA GEDEON</div>
                            <div className='py-1  col-span-2'>General medecine</div>
                            <div className='py-1  col-span-2'>Dr xy</div>
                            <div className='py-1 col-span-2'>10/04/2023</div>
                            <div className='py-1 mr-2'>8:30-9:30</div>
                            <RxDotFilled size={30} className='absolute right-0 top-2'/>
                        </div>
                    )
                })}

                
                <nav aria-label="Pagination" className='my-4'>
                    <ul class="inline-flex -space-x-px">
                        <li>
                        <a href="#" class="px-3 py-2 ml-0 leading-tight text-primary hover:text-secondary bg-white border border-primary rounded-l-lg hover:bg-primary  ">Previous</a>
                        </li>
                        <li>
                        <a href="#" class="px-3 py-2 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary">1</a>
                        </li>
                        <li>
                        <a href="#" class="px-3 py-2 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary  ">2</a>
                        </li>
                        <li>
                        <a href="#" aria-current="page" class="px-3 py-2 text-secondary border border-primary bg-primary hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                        <a href="#" class="px-3 py-2 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary  ">4</a>
                        </li>
                        <li>
                        <a href="#" class="px-3 py-2 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary  ">5</a>
                        </li>
                        <li>
                        <a href="#" class="px-3 py-2 leading-tight text-primary hover:text-secondary bg-white border border-primary rounded-r-lg hover:bg-primary  ">Next</a>
                        </li>
                    </ul>
                </nav>

                
                
            </div>
            <div>
                <div className='relative px-2 py-4 w-full drop-shadow shadow bg-text_secondary rounded-lg'>
                    <h2 className='font-medium text-primary mb-3'>Most bookings by department</h2>
                    <div className='grid grid-cols-3 text-primary mb-2 '>
                        <div className='py-1'>#Rank</div>
                        <div className='col-span-2 py-1'>Department</div>
                    </div>
                    <div className='grid grid-cols-3 text-primary '>
                        <div className='py-1 font-bold'>#1</div>
                        <div className='col-span-2 py-1'>General medecine</div>
                    </div>
                    <div className='grid grid-cols-3 text-primary '>
                        <div className='py-1 font-bold'>#1</div>
                        <div className='col-span-2 py-1'>General medecine</div>
                    </div>
                </div>  
            </div>
            
        </div>
    </DashboardLayout>
  )
}
