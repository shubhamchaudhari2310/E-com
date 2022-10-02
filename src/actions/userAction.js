import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  ALL_USER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const userSignupAction = (fromData) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/api/user/signup`,
      fromData
    );
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
  }
};
export const getAllUsersAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USER_REQUEST });
    const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/user`);
    dispatch({ type: ALL_USER_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: ALL_USER_FAIL, payload: error });
  }
};
