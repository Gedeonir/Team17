import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import {BsChevronCompactDown} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
import Uwase from '../img/Uwase.PNG'



export default function AppointmentsLists() {
    const [open,setOpen]=React.useState(false)
    const records=[1,2,3,4,5,6,7,8,9,10]


  return (
    <DashboardLayout>
        <div className='lg:px-8 px-2 overflow-y-auto max-h-screen pb-24'>
            <div className='lg:grid gap-2 w-full my-2 py-4'>
                <div className='col-span-5 relative'>
                    <div className='lg:flex justify-between text-primary relative'>
                        <div className='flex justify-start gap-4 flex-wrap'>
                            <h2 className='text-xl font-medium'>Appointments</h2>
                            {/* <div className='bg-text_secondary px-4 rounded-lg h-6 my-1 hover:bg-text_secondary cursor-pointer transition delay-100 duration-700 ease-in-out '>All</div>
                            <div className='px-4 rounded-lg h-6 my-1 hover:bg-text_secondary cursor-pointer transition delay-100 duration-700 ease-in-out'>Pending</div>
                            <div className='px-4 rounded-lg h-6 my-1 hover:bg-text_secondary cursor-pointer transition delay-100 duration-700 ease-in-out'>Completed</div>
                            <div className='px-4 rounded-lg h-6 my-1 hover:bg-text_secondary cursor-pointer transition delay-100 duration-700 ease-in-out'>Failed</div> */}


                        </div>
                        <div className='flex justify-start gap-4 relative'>
                            <label className='py-2'>Year</label>
                            <div className=' bg-secondary rounded-xl pl-4 pr-8 py-2 relative w-24' onClick={()=>setOpen(!open)}>
                                2020
                                <BsChevronCompactDown className='absolute right-2 top-3'/>
                            </div>
                            {open&&
                                <ul className='absolute w-full top-12 bg-secondary py-4 drop-shadow shadow rounded-lg text-center z-10'>
                                    <li className='px-2 py-2 cursor-pointer hover:bg-background_secondary hover:bg-opacity-20 transition delay-100 duration-700 ease-in-out'>2020</li>
                                    <li className='px-2 py-2 cursor-pointer hover:bg-background_secondary hover:bg-opacity-20 transition delay-100 duration-700 ease-in-out'>2020</li>
                                    <li className='px-2 py-2 cursor-pointer hover:bg-background_secondary hover:bg-opacity-20 transition delay-100 duration-700 ease-in-out'>2020</li>

                                </ul>
                                }
                        </div>
                    </div>
                    <div className='grid grid-cols-10 gap-2 text-primary font-medium bg-secondary py-2 px-2 overflow-x-auto relative'>
                        <div className='py-1 '>#ID</div>
                        <div className='py-1  col-span-2'>Names</div>
                        <div className='py-1  col-span-2'>Department</div>
                        <div className='py-1  col-span-2'>Doctor</div>
                        <div className='py-1 col-span-2'>Date</div>
                        <div className='py-1 '>Session</div>
                    </div>
                    {records.map((record)=>{
                        return(
                            <div className='grid grid-cols-10 gap-2 text-primary hover:bg-background_secondary hover:bg-opacity-20 transition delay-100 duration-700 ease-in-out  px-2 py-1 relative cursor-pointer rounded-lg'>
                                <div className='py-1 '>#{record}</div>
                                <div className='py-1  col-span-2'>IRAFASHA GEDEON</div>
                                <div className='py-1  col-span-2'>General medecine</div>
                                <div className='py-1  col-span-2 flex justify-start gap-2'>
                                    <div className="relative flex items-end overflow-hidden h-6 w-6 rounded-full ">
                                        <img src={Uwase} className='h-full w-full rounded-full'/>
                                    </div>
                                    Dr xy
                                </div>
                                <div className='py-1 col-span-2'>10/04/2023</div>
                                <div className='py-1 mr-2'>8:30-9:30</div>
                                {/* <RxDotFilled size={24} className='absolute right-0 top-0'/> */}
                            </div>
                        )
                    })}

                    
                    <nav aria-label="Pagination" className='my-4'>
                        <ul className="inline-flex -space-x-px">
                            <li>
                            <a href="#" className="px-3 ml-0 leading-tight text-primary hover:text-secondary bg-white border border-primary rounded-l-lg hover:bg-primary  ">Previous</a>
                            </li>
                            <li>
                            <a href="#" className="px-3 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary">1</a>
                            </li>
                            <li>
                            <a href="#" className="px-3 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary  ">2</a>
                            </li>
                            <li>
                            <a href="#" aria-current="page" className="px-3 text-secondary border border-primary bg-primary hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                            <a href="#" className="px-3 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary  ">4</a>
                            </li>
                            <li>
                            <a href="#" className="px-3 leading-tight text-primary hover:text-secondary bg-white border border-primary hover:bg-primary  ">5</a>
                            </li>
                            <li>
                            <a href="#" className="px-3 leading-tight text-primary hover:text-secondary bg-white border border-primary rounded-r-lg hover:bg-primary  ">Next</a>
                            </li>
                        </ul>
                    </nav>

                    
                    
                </div>                
            </div>
        </div>
    </DashboardLayout>
  )
}
