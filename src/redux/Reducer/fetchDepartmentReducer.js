import * as types from '../Action/actiontypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}

export const fetchAllDepartmentsReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_ALL_DEPARTMENTS_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_ALL_DEPARTMENTS_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_ALL_DEPARTMENTS_FAIL:
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


export const createDepartmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.CREATE_DEPARTMENT_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.CREATE_DEPARTMENT_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.CREATE_DEPARTMENT_FAIL:
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

export const updateDepartmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.UPDATE_DEPARTMENT_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.UPDATE_DEPARTMENT_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.UPDATE_DEPARTMENT_FAIL:
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

export const deleteDepartmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.DELETE_DEPARTMENT_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.DELETE_DEPARTMENT_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.DELETE_DEPARTMENT_FAIL:
            return{
                ...state,
                error:action.payload,
                success:false,
                loading:false,
                resp:null
            }
        default:
            return state;

            
    }
}

export const getOneDepartmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_ONE_DEPARTMENT_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_ONE_DEPARTMENT_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_ONE_DEPARTMENT_FAIL:
            return{
                ...state,
                error:action.payload,
                success:false,
                loading:false,
                resp:null
            }
        default:
            return state;

            
    }
}