import * as types from '../Action/actiontypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}

export const fetchAllDoctorssReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_ALL_DOCTORS_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_ALL_DOCTORS_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }

        case types.FETCH_ALL_DOCTORS_FAIL:
            return{
                ...state,
                error:action.payload,
                success:false,
                loading:false,
                resp:null
            }
        default:
            return state
    }
}

export const createDoctorReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.CREATE_DOCTOR_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.CREATE_DOCTOR_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }

        case types.CREATE_DOCTOR_FAIL:
            return{
                ...state,
                error:action.payload,
                success:false,
                loading:false,
                resp:null
            }
        default:
            return state
    }
}


