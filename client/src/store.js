import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import {
  getAllPizzasReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  editPizzaReducer,
} from "./reducers/pizzaReducers";
import {
  registerUserReducer,
  loginUserReducer,
  UserListReducer,
  EditUserReducer,
  UserFindById,
} from "./reducers/userReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerReducer: registerUserReducer,
  loginReducer: loginUserReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  UserListReducer: UserListReducer,
  EditUserReducer: EditUserReducer,
  UserFindById: UserFindById,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initilaState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initilaState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
