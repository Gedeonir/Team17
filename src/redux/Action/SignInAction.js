import React from "react";
import * as types from "./actiontypes";
import axios from './axiosConfig';



export const LoginAction=(loginData)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:types.SIGNIN_LOADING,
        });

        const login=await axios.post(`${process.env.BACKEND_URL}/users/login`,loginData,{headers:{"Content-Type":"application/json"}})
        dispatch({type:types.SIGNIN_SUCCESS,payload:login.data});
        sessionStorage.setItem('token', JSON.stringify(login.data.token));
    } catch (error) {
        dispatch({type:types.SIGNIN_FAIL,payload:error})
    }
}