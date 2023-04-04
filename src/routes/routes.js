
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";


const AppRoutes = (prop) => {
  
    return (
      <div className="">
        <Routes>
          <Route path="/" index element={<Homepage />} />
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;