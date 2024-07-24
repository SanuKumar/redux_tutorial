import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { userListReducer, viewUserReducer } from "../reducers/userReducer";

const initialState = { value: 0 };
const reducer = combineReducers({
  userList: userListReducer,
  viewUser: viewUserReducer,
});
const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
