import { combineReducers } from "redux";
import reducer from "./SongsReducer";

export default combineReducers({
  data: reducer
});
