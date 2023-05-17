
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AppointmentForm from "../pages/AppointmentForm";
import Doctors from "../pages/Doctors";
import UsersHome from "../pages/UsersHome";
import DoctorsListUsers from "../pages/DoctorsListUsers";
import AppointmentsLists from "../pages/AppointmentsLists";
import DoctorDetails from "../pages/DoctorDetails";
import Departments from "../pages/Departments";
// import UsersHome from "../pages/UsersHome";
import UwaseDetails from "../Details/UwaseDetails";
import Login from "../components/Login";
import DashboardLayout from "../components/DashboardLayout";

const AppRoutes = (prop) => {
  
    return (
      <div class="">
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/AppointmentForm" element={<AppointmentForm/>} />
          <Route path="/Doctors" element={<Doctors/>} />
          <Route path="/Doctors/1/details" element={<DoctorDetails/>}/>
          <Route path="/appointment-form" element={<AppointmentForm/>} />
          <Route path="dashboard" element={<UsersHome/>}></Route>
          <Route path="/doctorsUsers" element={<DoctorsListUsers/>}></Route>
          <Route path="/appointments-list" element={<AppointmentsLists/>}></Route>
          <Route path="/departments" element={<Departments/>}></Route>
          <Route path="UwaseDetails"  element={<UwaseDetails/>} />
          <Route path="/appointment-form" element={<AppointmentForm/>} />
          <Route path="/DashboardLayout" element={<DashboardLayout/>}/>
          <Route path="/Login" element={<Login/>}></Route>
          
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;