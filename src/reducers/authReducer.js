import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USET_LOGIN_FAIL } from "../constants/userConstants"

export const loginReducer = (state= {loginInfo:{}},{payload,type})=>{
    switch(type){
        case  USER_LOGIN_REQUEST:
            return {isLoading:true}
        case USER_LOGIN_SUCCESS:
            return {loginInfo:payload,isLoading:false}
        case USET_LOGIN_FAIL:
            return{loginInfoError:payload,isLoading:false}
        default:
            return state;
    }
}