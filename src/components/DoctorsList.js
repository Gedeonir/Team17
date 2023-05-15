import React, { useEffect } from 'react'
import Buttons from '../pages/Buttons'
import Kivin from'../img/Kivin.PNG'
import Louise from '../img/Louise.PNG'
import Uwase from '../img/Uwase.PNG'
import Zik from '../img/Zik.PNG'
import { useNavigate } from 'react-router-dom'
import { fetchAllUsers } from "../redux/Action/fetchAllUsers";
import { connect } from "react-redux";
import { fetchAllDepartments } from '../redux/Action/DepartmentAction'


function DoctorsList(props) {
    const navigate=useNavigate();
    useEffect(()=>{
        props.fetchAllDepartments();
        props.fetchAllUsers();
    },[]);

    console.log(props?.data?.allUsers)

    
  return (
    <div className='lg:px-8 px-2 relative'>
        <Buttons departments={props?.data?.allDepartments}/>
        <div class="grid lg:grid-cols-5 grid-cols-2 gap-4">
            <div class="cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl" onClick={()=>navigate('/doctors/1/details')}>
                <div class="relative flex items-end overflow-hidden h-52">
                    <img src={Uwase} className='h-full w-full object-cover'/>
                </div>

                <div class="mt-1 p-2 text-primary">
                    <h2 class="font-bold">Dr. Uwase Yvone</h2>
                    <p class="mt-1 text-sm text-slate-400">ORTHOPEDICS</p>

                </div>
            </div>        
        </div>
    </div>
)
}

const mapState=(data)=>({
    data:data
  });
  
  export default connect(mapState,{
    fetchAllUsers,
    fetchAllDepartments
  })(DoctorsList)
