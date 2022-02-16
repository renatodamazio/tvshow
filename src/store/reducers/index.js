/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer.js";

export const Reducers = combineReducers({
  searchReducer,
});
