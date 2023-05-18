import React from 'react'
import Navbar, { NavBarBottom } from '../components/Navbar'
import Footer from '../components/Footer'
import { GiBed,GiNurseMale,GiCurlingVines } from "react-icons/gi";
import {RiHotelBedLine} from "react-icons/ri"
import Data from '../components/Data';
import { fetchAllDepartments } from '../redux/Action/DepartmentAction'
import {Loading2} from '../components/Loading'
import ErrorResponse from '../components/ErrorResponse'
import FeedBack from '../components/FeedBack'
import { connect } from "react-redux";
import {FiChevronDown,FiChevronUp} from "react-icons/fi"
import { fetchAllDoctors} from '../redux/Action/DoctorsActions'
import moment from 'moment';
import 'moment-range';
import { createAppointments } from '../redux/Action/AppointmentsAction';

function generateTimeSlots(minutes) {
    const start = moment().startOf('day').startOf('day').hours(8);
    const end = moment().endOf('day').startOf('day').hours(17);
    const timeSlots = [];

    while (start.isBefore(end)) {
      timeSlots.push(start.format('h:mm A'));
      start.add(minutes||15, 'minutes');
    }

    return timeSlots;
}


function AppointmentForm(props) {
    const [minutes,setMinutes]=React.useState(null);
    const [department,setDepartment]=React.useState("")
    const [openDepartments,setOpenDepartments]=React.useState(false);
    const [DoctorId,setDoctorId]=React.useState("");
    const [Doctor,setDoctor]=React.useState("");
    const [timeError,setTimeError]=React.useState({
        error:false,
        errorName:""
    })

    const [phoneError,setPhoneError]=React.useState({
        error:false,
        errorName:""
    })

    const [openDoctor,setOpenDoctor]=React.useState(false)
    const [doctError,setDoctorError]=React.useState({
        error:false,
        errorName:""
    })

    const [formData,setFormData]=React.useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        sessionDate:"",
        sessionTime:"",
    });
    
    React.useEffect(()=>{
        props.fetchAllDepartments();
    },[]);

    const day=new Date(formData?.sessionDate).toLocaleDateString("en-CA",{ weekday: 'long' });


    const filterDoctors = props?.data?.allDoctors?.resp?.data?.doctors.filter((doctor)=>{
        return doctor.departmentName.toLowerCase().includes(department.toLowerCase()) && doctor?.availableDays?.toLowerCase().includes(day.toLowerCase());
    })



    const timeSlots = generateTimeSlots(minutes);

    const handleSend=()=>{
        const reg = new RegExp("^((072|078|073))[0-9]{7}$", "i");
        if (!reg.test(formData.phone)) {
            setPhoneError({
                ...phoneError,
                error:true,
                errorName:"Invalid phone number, it has to start with one of 078/072/073 and it must me ten digits"
            })
        }else if (formData.sessionTime==="") {
            setTimeError({
                ...timeError,
                error:true,
                errorName:"Please choose time"
            })
        }else if (DoctorId==="") {
            setDoctorError({
                ...doctError,
                error:true,
                errorName:"Please choose time"
            })
        }else{
            props.createAppointments(DoctorId,formData)
        }
    }
    console.log(minutes);
  return (
    <div>
        <Navbar/>
        <NavBarBottom/>
        <div className='py-12 bg-background_secondary px-8'>
            <h1 className='font-bold text-2xl text-text_secondary'>Make Appoinment</h1>
        </div>
        <div className='lg:px-48  w-full py-8'>
            <form className='px-8 text-primary' onSubmit={(e)=>e.preventDefault()}>
                <div className='lg:grid lg:grid-cols-2 sm:block gap-4 mb-3'>
                    <div>
                        <label >Firstname</label>
                        <input type='text' name="search" value={formData.firstName} className='w-full bg-secondary rounded-lg outline-none border-none' required
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                firstName:e.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        <label >Lastname</label>
                        <input type='text' name="lastname" className='w-full bg-secondary rounded-lg outline-none border-none' required
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                lastName:e.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        <label >Email</label>
                        <input type='email' name="email" className='w-full bg-secondary rounded-lg outline-none border-none' required
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                email:e.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        <p className="text-danger text-xs">{phoneError.errorName}</p>

                        <label >Contact</label>
                        <input type='number' name="phone" value={formData.phone} className={`w-full bg-secondary rounded-lg outline-none ${phoneError.error?"border-1 border-danger":"border-none"}`} required
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                phone:e.target.value
                            })
                        }}/>
                    </div>
                    <div className='grid relative'>
                        <label>Department</label>
                        <div className='px-2 py-2 rounded-lg bg-secondary relative' onClick={()=>setOpenDepartments(!openDepartments)}>
                            {department===""?"Select department":department}
                            <div className='absolute top-1 right-2 py-2'>
                                {!openDepartments?<FiChevronDown size={20}/>:<FiChevronUp size={20}/>}
                            </div>
                        </div>
                        {openDepartments&&
                        <div className='rounded-lg py-2 absolute bg-secondary -top-16 left-0 right-0 w-full max-h-32 overflow-y-auto drop-shadow shadow'>
                            <div className='grid w-full px-4 mb-2 sticky top-0'>
                                <input type='text' name='firstname' placeholder='Type in keyword' className={`rounded-lg border-none w-full h-8 drop-shadow shadow`} required/>
                            </div>
                            {props?.data?.allDepartments?.loading?(<Loading2 message={"Fetching departments"}/>):(
                                props?.data?.allDepartments?.success?(
                                    props?.data?.allDepartments?.resp?.data?.departments.length===0?(<p className='text-center'>No departments found</p>
                                    ):(
                                        <ul className=''>
                                            {props?.data?.allDepartments?.resp?.data?.departments.map((department)=>(
                                            <li key={department._id} className='cursor-pointer hover:bg-primary hover:bg-opacity-10 duration-300 ease-in-out px-4 py-2' 
                                            onClick={() =>{
                                                setDepartment(department.departmentName)
                                                setMinutes(department.sessionDuration)
                                                setOpenDepartments(!openDepartments)
                                            }}>{department.departmentName}</li>
                                        ))}
                                        </ul>
                                    )
                                ):(
                                    <ErrorResponse code={props?.data?.allDepartments?.error?.code} message={props?.data?.allDepartments?.error?.message} retryFunction={props.fetchAllDepartments()}/>
                                )
                            )}
                            
                        </div>
                        }
                    </div>

                    <div>
                        <label >Choose date</label>
                        <input type='date' name="search" className='w-full bg-secondary rounded-lg outline-none border-none' required
                        // defaultValue={new Intl.DateTimeFormat("en-CA", {
                        //     year: "numeric",
                        //     month: "2-digit",
                        //     day: "2-digit",
                        //   }).format(formData.date)}
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                sessionDate:e.target.value
                            })
                        }}/>
                    </div>
                    <div className='grid relative h-10'>
                        <p className="text-danger text-xs">{doctError.errorName}</p>
                        <label>Choose Doctor</label>
                        <div className='px-2 py-2 rounded-lg bg-secondary relative' onClick={()=>setOpenDoctor(!openDoctor)}>
                            {Doctor===""?"Select doctor":Doctor}
                            <div className='absolute top-1 right-2 py-2'>
                                {!openDepartments?<FiChevronDown size={20}/>:<FiChevronUp size={20}/>}
                            </div>
                        </div>
                        {openDoctor&&
                        <div className='rounded-lg py-2 absolute bg-secondary top-20 left-0 right-0 w-full max-h-32 overflow-y-auto z-40'>
                            <div className='grid w-full px-4 mb-2 sticky top-0'>
                                <input type='text' name='firstname' placeholder='Type in keyword' className={`rounded-lg border-none w-full h-8 drop-shadow shadow`} required/>
                            </div>
                            {department===""?(<p className='text-center'>Please select department to view doctors</p>):(
                                props?.data?.allDoctors?.loading?(<Loading2 message={"Fetching doctors"}/>):(
                                props?.data?.allDoctors?.success?(
                                    filterDoctors.length===0?(<p className='text-center'>No doctors found</p>
                                    ):(
                                    <ul className=''>
                                        {filterDoctors.map((doctor)=>(
                                        <li key={department._id} className='cursor-pointer hover:bg-primary hover:bg-opacity-10 duration-300 ease-in-out px-4 py-2' 
                                        onClick={() =>{
                                            setDoctorId(doctor._id)
                                            setDoctor(`Dr. ${doctor.firstName} ${doctor.lastName}`)
                                            setOpenDoctor(!openDoctor)
                                        }}>Dr. {doctor.firstName} {doctor.lastName}</li>
                                    ))}
                                    </ul>
                                    )
                                ):(
                                    <ErrorResponse code={props?.data?.allDoctors?.error?.code} message={props?.data?.allDoctors?.error?.message} retryFunction={props.fetchAllDoctors()}/>
                                )
                            ))}
                            
                        </div>
                        }
                    </div>
                    <div>
                        <p className="text-danger">{timeError.errorName}</p>
                        <label>Choose prefered time</label>
                        <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 my-4 max-h-40 overflow-y-auto px-2 py-2'>
                            {timeSlots.map((slot,index)=>(
                                <div class="flex items-center">
                                    <input type="radio" id={slot} value="" defaultValue={formData.sessionTime} name="default-radio" class="w-4 h-4 text-primary  border-primary focus:ring-primary focus:ring-2"
                                    onClick={(e)=>{
                                        setFormData({
                                            ...formData,
                                            sessionTime:slot
                                        })
                                    }}/>
                                    <label  class="ml-2 text-sm font-medium" for={slot}>{slot}</label>
                                </div>
                                // <div className={`${department===`timeSlots[index]-timeSlots[index+1]`?"bg-primary text-text_secondary":"bg-secondary"} text-center py-1 text-xs h-8 rounded-full  hover:bg-primary cursor-pointer hover:text-text_secondary  duration-300 ease-in-out`} 
                                // onClick={()=>{
                                //     setFormData({
                                //         ...formData,
                                //         sessionTime:`${timeSlots[index]}-${timeSlots[index+1]}`

                                //     })
                                // }}>
                                //     {timeSlots[index]}-{timeSlots[index+1]}
                                // </div>
                            ))}
                        </div>
                    </div>
                </div>
                {props?.data?.createAppointment?.loading && <Loading2 message="Saving department data"/>}
                <FeedBack error={props?.data?.createAppointment?.error} success={props?.data?.createAppointment?.success} errorMsg={props?.data?.createAppointment?.error?.response?.data?.message||null} successMsg={props?.data?.createAppointment?.resp?.message||null}/>

                <button className='px-2 py-2 bg-btn_primary text-secondary' onClick={()=>handleSend()}>Send</button>
            </form>
        </div>
        <Data/>
        <Footer/>
    </div>
  )
}

const mapState=(data)=>({
    data:data
  });
  

export default connect(mapState,{
    fetchAllDepartments,
    fetchAllDoctors,
    createAppointments
})(AppointmentForm)