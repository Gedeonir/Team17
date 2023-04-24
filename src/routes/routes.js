
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AppointmentForm from "../pages/AppointmentForm";
import Doctors from "../pages/Doctors";
import UsersHome from "../pages/UsersHome";

const AppRoutes = (prop) => {
  
    return (
      <div className="">
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/appointment-form" index element={<AppointmentForm/>} />
          <Route path="/Doctors" element={<Doctors/>} />
          <Route path="/Doctors/1/details"/>
          <Route path="/appointment-form" element={<AppointmentForm/>} />
          <Route path="dashboard" element={<UsersHome/>}></Route>
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;