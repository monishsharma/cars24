import itemReducer from "./Reducers/Items";
import UIReducer from "./Reducers/UI";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  items: itemReducer,
  UI: UIReducer
});


export default rootReducer;
