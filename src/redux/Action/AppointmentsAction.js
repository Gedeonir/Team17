import React from "react";
import * as types from "./actiontypes";
import axios from "./axiosConfig";

export const fetchAllAppointmentss=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_ALL_APPOINTMENT_LOADING
        });

        const data=await axios.get(`${process.env.BACKEND_URL}/appointments`);
        dispatch({type:types.FETCH_ALL_APPOINTMENT_SUCCESS,payload:data.data})
    } catch (error) {
        dispatch({type:types.FETCH_ALL_APPOINTMENT_FAIL,payload:error})
    }
}

export const createAppointments=(doctorId,formBody)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.CREATE_APPOINTMENT_LOADING
        });

        const res = await axios.post(`${process.env.BACKEND_URL}/appointments/send_appointment/${doctorId}`,formBody,{
            headers: {
              "Content-type": "application/json",
            }
          });

        dispatch({
            type:types.CREATE_APPOINTMENT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({type:types.CREATE_APPOINTMENT_FAIL,payload:error})
    }
}
