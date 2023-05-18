import React from "react"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Loading2} from '../components/Loading'
import { connect } from "react-redux";
import { fetchAllDepartments } from '../redux/Action/DepartmentAction'

function divs(props) {
    const options = {
        nav: true,
        navText: ["<div className='nav-div owl-prev absolute w-8 h-8 drop-shadow shadow rounded-full text-lg top-1 lg:left-[-15px] left-[-8px] bg-primary text-text_secondary'>‹</div>", "<div className='nav-div owl-next absolute w-8 h-8 drop-shadow shadow rounded-full text-lg top-1 lg:right-[-15px] right-[-8px] bg-primary text-text_secondary'>›</div>"],
        // autoplay: true,
        dots: false,
        // autoplayTimeout: 8500,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        },
      };

    React.useEffect(()=>{
        props.fetchAllDepartments();
    },[]);

    console.log(props);

    return (


        <div className="text-primary mt-10 mb-2 flex">
            {props?.data?.allDepartments?.loading?(<Loading2 message={"Fetching departments"}/>):(
                props?.data?.allDepartments?.success?(
                    <OwlCarousel className="full text-xs" {...options} >
                        <div className={`text-center  font-semibold py-2 px-4 border border-primary  h-10 hover:bg-primary cursor-pointer hover:text-text_secondary  duration-300 ease-in-out`} onClick={()=>props.setDepartment("")}>
                            All
                        </div>
                    {props?.data?.allDepartments?.resp?.data?.departments.map((department)=>(
                        <div key={department._id} className={`text-center font-semibold py-2 px-4 border border-primary  h-10  hover:bg-primary cursor-pointer hover:text-text_secondary  duration-300 ease-in-out`} onClick={()=>props.setDepartment(department.departmentName)}>
                           {department.departmentName}
                        </div>
                    ))}
                    </OwlCarousel>
                ):(
                    <p>{props?.data?.allDepartments?.error?.message}</p>
                )
            )}
        </div>
    )
}

const mapState=(data)=>({
    data:data
  });
  
  export default connect(mapState,{
    fetchAllDepartments
  })(divs)