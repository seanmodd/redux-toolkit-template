import { combineReducers } from "redux";
import usersReducer from "./users";
import counterReducer from "./counter";

export default combineReducers({
  users: usersReducer,
  counter: counterReducer,
});
