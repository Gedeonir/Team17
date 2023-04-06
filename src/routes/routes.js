
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AppointmentForm from "../pages/AppointmentForm";
import Doctors from "../pages/Doctors";
import Ortho from "../pages/Ortho";
import Neu from "../pages/Neu";


const AppRoutes = (prop) => {
  
    return (
      <div className="">
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/appointment-form" index element={<AppointmentForm/>} />
          <Route path="/Doctors" element={<Doctors/>} />
          <Route path="/Ortho" element={<Ortho/>}/>
          <Route path="/Neu" element={<Neu/>}/>
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;