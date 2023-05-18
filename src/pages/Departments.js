import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { CiSearch } from 'react-icons/ci'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { GiShieldDisabled } from 'react-icons/gi'
import { connect } from "react-redux";
import { fetchAllDepartments } from '../redux/Action/DepartmentAction'
import ErrorResponse from '../components/ErrorResponse'
import Loading from '../components/Loading'
import { createDepartments,updateDepartments } from '../redux/Action/DepartmentAction'
import { BiErrorCircle } from 'react-icons/bi'
import { deleteDepartment } from '../redux/Action/DepartmentAction'
import { getOneDepartment } from '../redux/Action/DepartmentAction'
import DeleteModal from '../components/deleteModal'
import {Loading2} from '../components/Loading'
import FeedBack from '../components/FeedBack'

function Departments(props) {
    const [search,showSearch]=useState(false)
    const records=[1,2,3,4,5,6,7,8,9,10]
    const [formData,setFormData]=useState({
        departmentName:"",
        session_lenght:""
    })

    const [ID,getID]=React.useState("");

    const departmentData=props?.data?.oneDepartment?.resp?.data?.department;


    const [openModal,setOpenModal]=React.useState(false)
    const [deleteData,setDeleteData]=React.useState({
        id:"",
        department:""
    })
    const [button,toogleButtons]=React.useState("")

    React.useEffect(()=>{
        props.fetchAllDepartments();
    },[props?.data?.createDepartment?.success,props?.data?.deleteDepartment?.success,props?.data?.updateDepartment?.success]);


    const handleSubmit=()=>{
        props.createDepartments(formData);
    }

    const handleDelete=(id)=>{
        props.deleteDepartment(id)
        setOpenModal(!openModal);
    }

    const handleUpdate=()=>{
        props.updateDepartments(ID,formData);
    }

    const handleGetDepartment=async(id)=>{
        toogleButtons("Update");
        getID(id)
        props.getOneDepartment(id);

        console.log(props?.data?.oneDepartment);

        props?.data?.oneDepartment?.success && 
            await setFormData({
                departmentName:props?.data?.oneDepartment?.resp?.data?.department?.departmentName,
                fees:props?.data?.oneDepartment?.resp?.data?.department?.fees,
                session_lenght:props?.data?.oneDepartment?.resp?.data?.department?.sessionDuration
            })
    }

    const handleOpenDeleteModal=(id,departmentName)=>{
        setOpenModal(!openModal);
        setDeleteData({
            ...deleteData,
            id:id,
            department:departmentName
        })

    }

  return (
    <DashboardLayout>
        <div className="lg:w-4/5 w-full mx-auto px-4 py-8 relative">
            {props?.data?.oneDepartment?.loading && <Loading2 message="Fetching department data"/>}
            <FeedBack error={props?.data?.oneDepartment?.error} success={props?.data?.oneDepartment?.success} errorMsg={props?.data?.oneDepartment?.error?.response?.data?.message||null} successMsg={props?.data?.oneDepartment?.resp?.message||null}/>
            <form className='relative' onSubmit={(e)=>e.preventDefault()}>

                {props?.data?.createDepartment?.loading && <Loading2 message="Saving department data"/>}
                {props?.data?.updateDepartment?.loading && <Loading2 message="Updating department data"/>}

                <FeedBack error={props?.data?.createDepartment?.error} success={props?.data?.createDepartment?.success} errorMsg={props?.data?.createDepartment?.error?.response?.data?.message||null} successMsg={props?.data?.createDepartment?.resp?.message||null}/>
                <FeedBack error={props?.data?.updateDepartment?.error} success={props?.data?.updateDepartment?.success} errorMsg={props?.data?.updateDepartment?.error?.response?.data?.message||null} successMsg={props?.data?.updateDepartment?.resp?.message||null}/>
                <input type='text' name='name' value={ID} placeholder='ID' className='px-2 py-2 rounded-lg' onChange={(e)=>{getID(e.target.value)}} hidden/>
                <div className='grid lg:grid-cols-2 gap-2 text-primary mb-3 '>
                    <div className='grid'>
                        <label>DepartmentName</label>
                        <input type='text' name='name' value={formData.departmentName} placeholder='Department name' className='px-2 py-2 rounded-lg' onChange={(e)=>{setFormData({...formData,departmentName:e.target.value})}} required/>
                    </div>

                    <div className='grid'>
                        <label>Session duration(Minutes)</label>
                        <input type='number' name='session_length' value={formData.session_lenght} placeholder='Minutes of session' className='px-2 py-2 rounded-lg' onChange={(e)=>{setFormData({...formData,session_lenght:e.target.value})}} required/>
                    </div>
                    
                </div>
                {button!=="Update"?(<button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 text-secondary py-2 lg:w-1/4 w-full' onClick={()=>handleSubmit()}>Add</button>)
                :
                (<button className='px-4 max-w-sm rounded-md bg-primary hover:bg-opacity-50 transition-all delay-100 duration-700 text-secondary py-2 lg:w-1/4 w-full' onClick={()=>handleUpdate()}>Update</button>)}

            </form>
            <div className='my-4 py-2 relative overflow-y-auto'>
                {props?.data?.deleteDepartment?.loading && <Loading2 message="Deleting department"/>}
                {openModal&&<DeleteModal deleteData={deleteData} setOpen={setOpenModal} open={openModal} handleDelete={handleDelete}/>}
                <FeedBack error={props?.data?.deleteDepartment?.error} success={props?.data?.deleteDepartment?.success} errorMsg={props?.data?.deleteDepartment?.error?.response?.data?.message||null} successMsg={props?.data?.deleteDepartment?.resp?.message||null}/>
                <div className='flex justify-between gap-2'>
                    <div className='px-2 py-2 text-primary font-bold w-full'>
                        <h1>Departments</h1>
                    </div>
                    <div className='flex justify-end px-2 py-2 relative w-full'>
                        <input type='text' name='firstname' placeholder='Type in keyword' className={`px-2 py-2 h-8 rounded-l-md rounded-b-md w-full absolute top-10 right-4 duration-300 ease-in-out drop-shadow shadow ${search?('block'):("hidden")}`} required/>
                        <CiSearch size={30} className='text-primary rounded-2xl z-40' onClick={()=>showSearch(!search)}/>
                    </div>
                </div>
                <div className='w-full max-h-96 overflow-y-auto bg-text_secondary relative pb-24'>
                {props?.data?.allDepartments?.loading?(<Loading2 message={"Fetching departments"}/>):(
                    props?.data?.allDepartments?.success?(
                        <div>
                            <div className='grid grid-cols-10 gap-2 text-primary sticky top-0 z-10 font-medium bg-secondary py-2 px-2 overflow-x-auto'>
                                <div className=''>#ID</div>
                                <div className=' col-span-4'>Department</div>
                                <div className=' col-span-2'>Session Duration</div>
                                <div className='col-span-2'>Actions</div>
                            </div>
                            {props?.data?.allDepartments?.resp?.data?.departments.length===0?(<p className='text-center'>No doctors found</p>):(
                                props?.data?.allDepartments?.resp?.data?.departments.map((department,index)=>{
                                    return(
                                        <div className='grid grid-cols-10 gap-2 text-primary font-medium px-2 overflow-x-auto relative my-4' key={index+1}>
                                            <div className='my-2'>{index+1}</div>
                                            <div className=' col-span-4'>{department.departmentName}</div>
                                            <div className=' col-span-2'>{department.sessionDuration} Min</div>
                                            <div className='flex justify-start gap-4 overflow-x-auto col-span-2'>
                                                <FaEdit size={25} className='cursor-pointer hover:opacity-50 duration-100 ease-in-out' onClick={()=>handleGetDepartment(department._id)}/>
                                                <AiFillDelete size={25} className='text-danger cursor-pointer hover:opacity-50 duration-100 ease-in-out' onClick={()=>handleOpenDeleteModal(department._id,department.departmentName)}/>
                                            </div>
                                        </div>
                                    )
                            }))}
                        </div>
                    ):(
                        <ErrorResponse code={props?.data?.allDepartments?.error?.code} message={props?.data?.allDepartments?.error?.message} retryFunction={props.fetchAllDepartments()}/>
                    )
                )}
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
    createDepartments,
    deleteDepartment,
    getOneDepartment,
    updateDepartments
})(Departments)
