import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import {BsChevronCompactDown} from "react-icons/bs"
import { CiSearch } from 'react-icons/ci'
import DoctorsList from '../components/DoctorsList'
import { GiNurseMale } from 'react-icons/gi'
import Uwase from '../img/Uwase.PNG'
import { createDoctors } from '../redux/Action/DoctorsActions'
import {IoMdArrowBack} from "react-icons/io"
import {FiChevronDown,FiChevronUp} from "react-icons/fi"
import { connect } from "react-redux";
import { fetchAllDepartments } from '../redux/Action/DepartmentAction'
import {Loading2} from '../components/Loading'
import ErrorResponse from '../components/ErrorResponse'
import FeedBack from '../components/FeedBack'
import DefaultProfile from '../img/DefaultProfile.jpeg'


 function DoctorsListUsers(props) {
    const [open,setOpen]=React.useState(false)
    const [openDepartments,setOpenDepartments]=React.useState(false)
    const records=[1,2,3,4,5,6]
    const [searchWord,setSearchWord] = React.useState("");
    const [phoneError,setPhoneError]=React.useState({
        error:false,
        errorName:""
    })

    const [deptError,setDepartmentError]=React.useState({
        error:false,
        errorName:""
    })

    const days=["Monday","Tuesday","Wednesday","Thursday","Sunday"];

    const [formData,setFormData]=React.useState({
        firstName:"",
        lastName:"",
        gender:"",
        email:"",
        telNumber:"",
        departmentId:"",
        departmentName:"",
        availableDays:""
    });


    React.useEffect(()=>{
        props.fetchAllDepartments();
    },[]);

    const handleRegister=()=>{
        const reg = new RegExp("^((072|078|073))[0-9]{7}$", "i");
        if (!reg.test(formData.telNumber)) {
            setPhoneError({
                ...phoneError,
                error:true,
                errorName:"Invalid phone number, it has to start with one of 078/072/073 and it must me ten digits"
            })
        }else if(formData.departmentName===""){
            setDepartmentError({
                ...deptError,
                error:true,
                errorName:"Please select department"
            })
        }else{
            props.createDoctors(formData);
        }
    }

  return (
    <DashboardLayout setOpen={setOpen} open={open}>
        <div className='grid grid-cols-10 gap-4 text-primary lg:px-8 px-2'>
            <div className='flex justify-start gap-4 flex-wrap col-span-8'>
                <h2 className='text-xl font-medium'>Doctors list</h2>
            </div>

            <div className='relative w-full col-span-2'>
                <input type='text' name="search" placeholder='Type in keyword' className='w-full hidden lg:block drop-shadow pr-12 rounded-2xl outline-none border border-secondary' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <CiSearch size={40} className='absolute top-0 right-0 text-secondary bg-primary p-2 rounded-2xl'/>
            </div>
        </div>
        <div className='pb-12'>
            <DoctorsList/>        
            <div className={`py-4 lg:px-6 px-2 absolute bg-secondary z-40 top-0 left-0 right-0 min-h-screen max-h-screen transform duration-700 delay-100 ease-in-out overflow-y-auto ${open?'translate-x-0':'translate-x-full'}`}>
                <div className='flex justify-start gap-4 text-primary '>
                    <IoMdArrowBack size={25} onClick={()=>setOpen(!open)}/>
                    <h1 className='text-lg font-medium'>Add new doctor</h1>
                </div>
                <div className='w-full grid lg:grid-cols-6 gap-4'>
                    <div className='lg:col-span-4'>
                        <div className='px-2 rounded-lg py-4'>
                            <div className='grid lg:grid-cols-6 gap-2 mb-3 w-full'>
                                <div className="overflow-hidden h-24 w-24 rounded-full mx-auto">
                                    <img src={DefaultProfile} className='h-full w-full object-cover rounded-full'/>
                                </div>
                                <div className='lg:col-span-3 flex justify-between'>
                                    <div>
                                        <h3 className='text-primary text-lg font-medium'>Upload your picture</h3>
                                        <p className='text-background_secondary'>For best results, use an image at least 600px by 600px in either .jpg or .png format</p>
                                    </div>
                                </div>
                                <div className='flex lg:justify-center gap-4 lg:col-span-2 py-4'>
                                    <button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 text-secondary h-8'>Upload</button>
                                    <button className='px-4 max-w-sm rounded-md bg-background_secondary hover:bg-opacity-50 transition-all delay-100 duration-700 text-primary h-8'>Remove</button>
                                </div>
                            </div>

                            <form onSubmit={(e)=>e.preventDefault()}>
                                {props?.data?.registerDoctor?.loading && <Loading2 message="Saving Doctor data"/>}

                                <FeedBack error={props?.data?.registerDoctor?.error} success={props?.data?.registerDoctor?.success} errorMsg={props?.data?.registerDoctor?.error?.response?.data?.message||null} successMsg={props?.data?.registerDoctor?.resp?.message||null}/>

                                <div className='grid lg:grid-cols-2 gap-2 text-primary mb-3 '>
                                    <div className='grid'>
                                        <label>FirstName</label>
                                        <input type='text' name='firstname' value={formData.firstName} required placeholder='firstName' className='px-2 py-2 rounded-lg bg-text_secondary border-none'
                                        onChange={(e) =>
                                            setFormData({
                                            ...formData,
                                            firstName: e.target.value,
                                            })
                                        }/>
                                    </div>
                                    <div className='grid'>
                                        <label>LastName</label>
                                        <input type='text' value={formData.lastName} name='lastname' required placeholder='LastName' className='px-2 py-2 rounded-lg bg-text_secondary border-none'
                                        onChange={(e) =>
                                            setFormData({
                                            ...formData,
                                            lastName: e.target.value,
                                            })
                                        }/>
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-2 text-primary mb-3'>
                                    <div className='grid'>
                                        <label>Email</label>
                                        <input type='email' name='email' value={formData.email} required placeholder='Email' className='px-2 py-2 rounded-lg bg-text_secondary border-none'
                                        onChange={(e) =>
                                            setFormData({
                                            ...formData,
                                            email: e.target.value,
                                            })
                                        }/>
                                    </div>
                                    <div className='grid'>
                                        <p className="text-danger text-xs">{phoneError.errorName}</p>
                                        <label>Contact</label>
                                        <input type='number' name='Telephone' value={formData.telNumber} required placeholder='Telephone' className={`px-2 py-2 rounded-lg bg-text_secondary ${phoneError.error?"border-1 border-danger":"border-none"}`}
                                        onChange={(e) =>
                                            setFormData({
                                            ...formData,
                                            telNumber: e.target.value,
                                            })
                                        }/>
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-2 text-primary mb-3'>
                                    <div className='grid relative'>
                                        <p className="text-danger text-xs">{deptError.errorName}</p>
                                        <label>Department</label>
                                        <div className='px-2 py-2 rounded-lg bg-text_secondary relative' onClick={()=>setOpenDepartments(!openDepartments)}>
                                            {formData.departmentName===""?"Select department":formData.departmentName}
                                            <div className='absolute top-1 right-2 py-2'>
                                                {!openDepartments?<FiChevronDown size={20}/>:<FiChevronUp size={20}/>}
                                            </div>
                                        </div>
                                        {openDepartments&&
                                        <div className='rounded-lg py-2 absolute bg-text_secondary top-20 left-0 right-0 w-full max-h-32 overflow-y-auto'>
                                            <div className='grid w-full px-4 mb-2 sticky top-0'>
                                                <input type='text' name='firstname' placeholder='Type in keyword' className={`rounded-lg border-none w-full h-8 drop-shadow shadow`} required/>
                                            </div>
                                            {props?.data?.allDepartments?.loading?(<Loading2 message={"Fetching departments"}/>):(
                                                props?.data?.allDepartments?.success?(
                                                    <ul className=''>
                                                        {props?.data?.allDepartments?.resp?.data?.departments.map((department)=>(
                                                        <li key={department._id} className='cursor-pointer hover:bg-primary hover:bg-opacity-10 duration-300 ease-in-out px-4 py-2' 
                                                        onClick={() =>{
                                                            setFormData({
                                                            ...formData,
                                                            departmentId:department._id,
                                                            departmentName: department.departmentName,
                                                            })
                                                            setOpenDepartments(!openDepartments)
                                                        }}>{department.departmentName}</li>
                                                    ))}
                                                    </ul>
                                                ):(
                                                    <ErrorResponse code={props?.data?.allDepartments?.error?.code} message={props?.data?.allDepartments?.error?.message} retryFunction={props.fetchAllDepartments()}/>
                                                )
                                            )}
                                            
                                        </div>
                                        }
                                    </div>
                                    <div className='grid'>
                                        <label>Gender</label>
                                        <select className='rounded-lg px-2 py-2 border-none bg-text_secondary'
                                        required
                                        onChange={(e) =>
                                            setFormData({
                                            ...formData,
                                            gender: e.target.value,
                                            })
                                        }>
                                            <option>Please select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>I prefer not to say</option>
                                        </select>                                    
                                    </div>
                                    <div className='grid'>
                                        <label>Day of the week</label>
                                        <select className='rounded-lg px-2 py-2 border-none bg-text_secondary'
                                        defaultValue={formData.availableDays}
                                        onChange={(e) =>
                                            setFormData({
                                            ...formData,
                                            availableDays: e.target.value,
                                            })
                                        }
                                        required
                                        >
                                            <option value={formData.availableDays}>{formData.availableDays===""?"Select WeekDay":formData.availableDays}</option>
                                            {days?.map((day)=>(
                                                <option key={day} value={day}>{day}</option>
                                            ))}
                                        </select>                                    
                                    </div>
                                </div>
                                <button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 text-secondary py-2 lg:w-1/4 w-full' onClick={()=>handleRegister()}>Add doctor</button>
                            </form>
                        </div>
                        

                    </div>
                    <div className='px-2 rounded-lg pb-32 lg:col-span-2 max-h-screen overflow-y-auto'>
                    {records.map((record)=>{
                        return(
                        <div className='grid lg:grid-cols-5 gap-2 mb-3 w-full'>
                            <div className="overflow-hidden rounded-lg mx-auto">
                                <img src={Uwase} className='h-full w-full object-cover rounded-lg'/>
                            </div>
                            <div className='lg:col-span-4 lg:text-left text-center'>
                                <div>
                                    <h3 className='text-primary text-lg font-medium'>Dr Uwase Yvonne</h3>
                                    <p className='text-background_secondary'>ORTHOPEDICS</p>
                                </div>
                            </div>
                        </div>
                    )})}
                    </div>
                </div>
            </div>

        </div>

    </DashboardLayout>
  )
}

const mapState=(data)=>({
    data:data
  });
  

export default connect(mapState,{
    fetchAllDepartments,
    createDoctors
})(DoctorsListUsers)
