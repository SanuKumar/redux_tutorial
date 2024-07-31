import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { userListReducer, viewUserReducer } from "../reducers/userReducer";
import { counterReduceer } from "../reducers/counterReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = { userList: [], viewUser: {} };

const reducer = combineReducers({
  userList: userListReducer,
  viewUser: viewUserReducer,
  counter: counterReduceer,
});
const middleware = [thunk];

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
