import React from "react";
import * as types from "./actiontypes";
import axios from "./axiosConfig";

export const fetchAllUsers=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_ALL_DOCTORS_LOADING
        });

        const data=await axios.get(`${process.env.BACKEND_URL}/users`);
        dispatch({type:types.FETCH_ALL_DOCTORS_SUCCESS,payload:data.data});
    } catch (error) {
        dispatch({type:types.FETCH_ALL_DOCTORS_FAIL,payload:error});
    }
}