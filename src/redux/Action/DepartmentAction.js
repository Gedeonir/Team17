import React from "react";
import * as types from "./actiontypes";
import axios from "./axiosConfig";

export const fetchAllDepartments=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_ALL_DEPARTMENTS_LOADING
        });

        const data=await axios.get(`${process.env.BACKEND_URL}/departments`);
        dispatch({type:types.FETCH_ALL_DEPARTMENTS_SUCCESS,payload:data.data})
    } catch (error) {
        dispatch({type:types.FETCH_ALL_DEPARTMENTS_FAIL,payload:error})
    }
}

export const createDepartments=(formBody)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.CREATE_DEPARTMENT_LOADING
        });

        const res = await axios.post(`${process.env.BACKEND_URL}/departments/addNew`,formBody,{
            headers: {
              "Content-type": "application/json",
            }
          });

        dispatch({
            type:types.CREATE_DEPARTMENT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({type:types.CREATE_DEPARTMENT_FAIL,payload:error})
    }
}

export const updateDepartments=(id,formBody)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.UPDATE_DEPARTMENT_LOADING
        });

        const res = await axios.put(`${process.env.BACKEND_URL}/departments/${id}`,formBody,{
            headers: {
              "Content-type": "application/json",
            }
          });

        dispatch({
            type:types.UPDATE_DEPARTMENT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({type:types.UPDATE_DEPARTMENT_FAIL,payload:error})
    }
}

export const deleteDepartment=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.DELETE_DEPARTMENT_LOADING
        })

        const res=await axios.delete(`${process.env.BACKEND_URL}/departments/${id}`);

        dispatch({
            type:types.DELETE_DEPARTMENT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({type:types.DELETE_DEPARTMENT_FAIL,payload:error})
    }
}

export const getOneDepartment=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_ONE_DEPARTMENT_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/departments/${id}`);

        dispatch({
            type:types.FETCH_ONE_DEPARTMENT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({type:types.FETCH_ONE_DEPARTMENT_FAIL,payload:error})
    }
}