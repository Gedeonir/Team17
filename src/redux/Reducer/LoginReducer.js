import * as types from '../Action/actiontypes';

const initialState={
    error:null,
    resp:null,
    success:false,
    loading:false
}

export const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SIGNIN_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.SIGNIN_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.SIGNIN_FAIL:
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