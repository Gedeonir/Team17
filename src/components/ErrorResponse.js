import React from 'react'
import {BiErrorCircle} from "react-icons/bi"

export default function ErrorResponse(props) {
  return (
    <div className='lg:flex justify-start gap-4 mx-auto w-1/2 text-primary'>
      <div className='relative py-2'>
        <BiErrorCircle size={100} className='mx-auto'/>
      </div>
      <div className='py-2 text-center'>
        <h1 className='py-2 font-bold text-xl'>{props?.code}</h1>
        <p>{props?.message}</p>
      </div>
      <button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 text-secondary py-2 lg:w-1/4 w-full' onClick={()=>props.retryFunction}>Reload</button>
    </div>
  )
}
