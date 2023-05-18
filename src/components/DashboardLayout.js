import React from 'react'
import Logos from '../assets/Logos.PNG';
import { Link } from 'react-router-dom';
import  {BiHomeAlt2} from "react-icons/bi";
import {GiNurseMale} from "react-icons/gi";
import {AiOutlineCalendar} from "react-icons/ai"
import {MdPendingActions} from "react-icons/md"
import {RxSwitch} from "react-icons/rx"
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  }

export default function DashboardLayout({children,open,setOpen}) {
    const [status,setStatus] =React.useState("")
    const [page,setPage] =React.useState("");
    const [doctorModal,setOpenDoctorModal]=React.useState(false);
    const token = getToken();
    const navigate=useNavigate()

    const parseToken=(jwtToken)=>{
        try {
          return JSON.parse(atob(jwtToken.split('.')[1]));
        } catch (error) {
          return null
        }
      }


    React.useEffect(() => {
        if (!token) {
          navigate("/login",{state:{message:'You must sign in first!'}});
        }else{
          const decodedJwt = parseToken(token);
          if (decodedJwt.exp * 1000 < Date.now()) {
            sessionStorage.clear();
            navigate("/login",{state:{message:'Your session expired!'}});
          }
        }
      }, [token])

    return (
        <div className='w-full min-h-screen max-h-screen overflow-hidden  bg-text_secondary'>
            <div className='flex justify-between lg:px-8 px-2 py-2 sticky z-10 top-0 bg-text_secondary'>
                <div className='w-24 h-8'> 
                    <img src={Logos} className='w-full h-full' alt='logo'/>
                </div>
                <button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 py-2 text-secondary'>Logout</button>
            </div>
            <div className='lg:grid grid-cols-6 w-full'>
                <div className='px-8 py-4 fixed left-0 min-h-screen w-56 hidden lg:block'>
                    <ul className='font-medium py-2 text-primary text-lg'>
                        <li className='mb-3 transition delay-150 duration-100 ease-in-out hover:text-btn_primary '>
                            <Link className='flex gap-2 justify-start' to="/dashboard"><BiHomeAlt2 size={30}/><span className='p-1'>Dashboard</span></Link>
                        </li>
                        <li className='mb-3' onClick={()=>setPage("Doctors")}>
                            <Link className='flex gap-2 justify-start' to="/doctorsUsers"><GiNurseMale size={30}/><span className='p-1'> Doctors</span></Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='flex gap-2 justify-start' to="/appointments-list"><MdPendingActions size={30}/><span className='p-1'> Appointments</span></Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='flex gap-2 justify-start' to="/departments"><AiOutlineCalendar size={30}/><span className='p-1'> Departments</span></Link>
                        </li>
                    </ul>
                    <div className='flex gap-4 justify-start text-primary absolute bottom-24'>
                        <RxSwitch size={30} className={`transition delay-200 duration-300 ease-in-out`}/>
                        <p>Status</p>
                    </div>
                </div>
                <div className={`lg:col-span-5 relative lg:left-56 min-h-screen max-h-screen overflow-hidden bg-secondary py-4`}>
                    {children}                
                </div> 

               {location.pathname==="/doctorsUsers" &&
                <div className=' flex justify-start text-text_secondary cursor-pointer py-1 absolute right-12  bottom-12 drop-shadow-xl shadow-xl w-12 h-12 rounded-lg hover:w-52 mx-auto bg-primary duration-700 delay-300 ease-in-out overflow-hidden' onClick={()=>setOpen(!open)}>
                    <div className='w-12 mx-2'>
                        <GiNurseMale size={35}/>
                    </div>
                    <p className='py-2 truncate uppercase text-sm'>Add new doctor</p>
                </div>
                }
            </div> 
        </div>
    
    )
}
