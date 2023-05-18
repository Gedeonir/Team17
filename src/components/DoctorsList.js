import React, { useEffect } from 'react'
import Buttons from '../pages/Buttons'
import Kivin from'../img/Kivin.PNG'
import Louise from '../img/Louise.PNG'
import DefaultProfile from '../img/DefaultProfile.jpeg'
import DefaultProfileWoman from '../img/DefaultProfileWoman.jpeg'
import Zik from '../img/Zik.PNG'
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchAllDoctors} from '../redux/Action/DoctorsActions'
import {Loading2} from '../components/Loading'
import ErrorResponse from '../components/ErrorResponse'


function DoctorsList(props) {
    const navigate=useNavigate();
    const [department,setDepartment]=React.useState("");

    useEffect(()=>{
        props.fetchAllDoctors();
    },[]);

    const filterDoctors = props?.data?.allDoctors?.resp?.data?.doctors.filter((doctor)=>{
        return doctor.departmentName.toLowerCase().includes(department.toLowerCase());
    })
    
  return (
    <div className='lg:px-8 px-2 relative'>
        <Buttons setDepartment={setDepartment} department={department}/>
        {props?.data?.allDoctors?.loading?(<Loading2 message={"Fetching doctors"}/>):(
            props?.data?.allDoctors?.success?(
                <div className="grid lg:grid-cols-5 grid-cols-2 gap-4">
                    {filterDoctors.map((doctor)=>(
                        <div key={doctor._id} className="cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl" onClick={()=>navigate(`/doctors/${doctor._id}/details`)}>
                            <div className="relative flex items-end overflow-hidden h-52">
                                <img src={doctor.gender==="Male"?DefaultProfile:DefaultProfileWoman} className='h-full w-full object-cover'/>
                            </div>

                            <div className="mt-1 p-2 text-primary">
                                <h2 className="font-bold">Dr. {doctor.firstName} {doctor.lastName}</h2>
                                <p className="mt-1 text-sm text-slate-400">{doctor.departmentName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ):(
                <ErrorResponse code={props?.data?.allDoctors?.error?.code} message={props?.data?.allDoctors?.error?.message} retryFunction={props.fetchAllDoctors()}/>
            )
        )}
        
    </div>
)
}

const mapState=(data)=>({
    data:data
  });
  
  export default connect(mapState,{
    fetchAllDoctors,
  })(DoctorsList)
