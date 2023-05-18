import React from 'react'
import loading from '../Assets/loading.gif'
import loading2 from '../Assets/loading2.webp'


export default function Loading(props) {
  return (
    <div className='w-full absolute top-2 left-0 right-0 items-center bg-opacity-50'>
        <div className='flex mx-auto lg:w-1/3 w-4/5 text-primary bg-secondary my-auto px-2 py-2 rounded-lg relative top-1/2'>
            <div className='relative w-12 h-12'>
                <img src={loading} className='w-full h-full'/>
            </div>
            <div className='w-full px-4 text-md py-2 font-medium'>
              <label>{props.message}</label>
            </div>
        </div>
    </div>
  )
}


export function Loading2(props) {
  return (
    <div className='w-full bg-bar_yellow rounded-lg'>
      <div className='flex lg:w-1/3 w-4/5 text-primary px-2 rounded-lg relative'>
          <div className='relative w-8 h-8'>
              <img src={loading2} className='w-full h-full'/>
          </div>
          <div className='w-full text-lg font-medium px-4'>
            <label>{props.message}</label>
          </div>
      </div>
    </div>
  )
}
