import {
  ALL_USER_FAIL,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

export const userSignupReducer = (state = { info: {} , users:[] }, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case USER_SIGNUP_SUCCESS:
      return {...state, info: payload, isLoading: false };
    case USER_SIGNUP_FAIL:
      return { error: payload, isLoading: false };
      case ALL_USER_REQUEST:
      return { ...state, isLoading: true };
    case ALL_USER_SUCCESS:
      return {...state, users: payload, isLoading: false };
    case ALL_USER_FAIL:
      return { error: payload, isLoading: false };
    default:
      return state;
  }
};
// export const getAlluserReducer = (state = { users: [] }, { type, payload }) => {
//   switch (type) {
//     case ALL_USER_REQUEST:
//       return { ...state, isLoading: true };
//     case ALL_USER_SUCCESS:
//       return { iusers: payload, isLoading: false };
//     case ALL_USER_FAIL:
//       return { error: payload, isLoading: false };
//     default:
//       return state;
//   }
// };
