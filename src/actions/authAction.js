import axios from "axios"
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USET_LOGIN_FAIL } from "../constants/userConstants"

export const loginAction = (loginCrediential)=> async (dispatch)=>{
try {
    dispatch({type:USER_LOGIN_REQUEST,isLoading:true})
    const {data} = await axios.post(`http://localhost:5000/auth/login`,loginCrediential)
    console.log(data.data);
    dispatch({type:USER_LOGIN_SUCCESS,payload:data.data})
} catch (error) {
    dispatch({type:USET_LOGIN_FAIL,payload:error})
}
}