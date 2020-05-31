import { combineReducers } from "redux";

import mainReducer from "../modules/app/reducer";

export const rootReducer = combineReducers({
  main: mainReducer
});
