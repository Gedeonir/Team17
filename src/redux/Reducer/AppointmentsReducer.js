import * as types from '../Action/actiontypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}

export const fetchAllAppointmentsReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_ALL_APPOINTMENT_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_ALL_APPOINTMENT_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_ALL_APPOINTMENT_FAIL:
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


export const createAppointmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.CREATE_APPOINTMENT_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.CREATE_APPOINTMENT_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.CREATE_APPOINTMENT_FAIL:
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
