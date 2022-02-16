/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { UPDATE_SEARCH } from "../actions/actionType";

const initalValue = {};

export const searchReducer = (state = initalValue, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
