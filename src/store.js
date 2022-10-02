import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userSignupReducer } from "./reducers/userReducer";
import { getAllProductReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { loginReducer } from "./reducers/authReducer";
const rootReducer = combineReducers({
  user:userSignupReducer,
  products:getAllProductReducer,
  cart:cartReducer,
  login:loginReducer
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
