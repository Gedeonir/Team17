import React, { useEffect } from 'react'
import Buttons from '../pages/Buttons'
import Kivin from'../img/Kivin.PNG'
import Louise from '../img/Louise.PNG'
import Zik from '../img/Zik.PNG'
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchAllDoctors} from '../redux/Action/DoctorsActions'
import {Loading2} from '../components/Loading'
import ErrorResponse from '../components/ErrorResponse'
import DoctorCard from './DoctorCard'
import DeleteModal from './deleteModal'
import { deleteDoctor } from '../redux/Action/DoctorsActions'
import FeedBack from './FeedBack'

function DoctorsList(props) {
    const navigate=useNavigate();
    const [department,setDepartment]=React.useState("");
    const [openModal,setOpenModal]=React.useState(false)

    const [deleteData,setDeleteData]=React.useState({
        id:"",
        department:""
    })

    const handleDelete=(id)=>{
        props.deleteDoctor(id)
        setOpenModal(!openModal);
    }

    const handleOpenDeleteModal=(id,doctorName)=>{
        setOpenModal(!openModal);
        setDeleteData({
            ...deleteData,
            id:id,
            department:doctorName
        })

    }

    useEffect(()=>{
        props.fetchAllDoctors();
    },[props?.data?.registerDoctor?.success,props?.data?.deleteDoctor?.success]);

    const filterDoctors = props?.data?.allDoctors?.resp?.data?.doctors.filter((doctor)=>{
        return doctor.departmentName.toLowerCase().includes(department.toLowerCase());
    })
    
  return (
    <div className='lg:px-8 px-2 relative'>
        <Buttons setDepartment={setDepartment} department={department}/>
        {props?.data?.deleteDoctor?.loading && <Loading2 message="Deleting doctor"/>}
        <FeedBack error={props?.data?.deleteDoctor?.error} success={props?.data?.deleteDoctor?.success} errorMsg={props?.data?.deleteDoctor?.error?.response?.data?.message||null} successMsg={props?.data?.deleteDoctor?.resp?.message||null}/>
        {props?.data?.allDoctors?.loading?(<Loading2 message={"Fetching doctors"}/>):(
            props?.data?.allDoctors?.success?(
                <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 pb-2">
                    {filterDoctors.map((doctor)=>(
                        <DoctorCard doctor={doctor} handleOpenDeleteModal={handleOpenDeleteModal}/>
                    ))}
                </div>
            ):(
                <ErrorResponse code={props?.data?.allDoctors?.error?.code} message={props?.data?.allDoctors?.error?.message} retryFunction={props.fetchAllDoctors()}/>
            )
        )}
        {openModal&&<DeleteModal deleteData={deleteData} setOpen={setOpenModal} open={openModal} handleDelete={handleDelete}/>}

    </div>
)
}

const mapState=(data)=>({
    data:data
  });
  
  export default connect(mapState,{
    fetchAllDoctors,
    deleteDoctor
  })(DoctorsList)
