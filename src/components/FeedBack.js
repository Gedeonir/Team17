import React from "react"
import { BiErrorCircle } from 'react-icons/bi'
import {TiTick} from 'react-icons/ti'

export default function FeedBack({error,success,errorMsg,successMsg}){
    return(
        <div className={`w-full font-bold text-primary my-2`}>
            {error && !success&&
                <div className='flex justify-start gap-2 bg-danger  px-4 py-2 bg-opacity-20 rounded-t-2xl rounded-r-2xl'><BiErrorCircle size={25}/><p>{errorMsg}</p></div>
            }
            {success&& <div className='flex justify-start gap-2 bg-primary  px-4 py-2 bg-opacity-20 rounded-t-2xl rounded-r-2xl'><TiTick size={25}/><p>{successMsg}</p></div>}
            
        </div>
    )
}