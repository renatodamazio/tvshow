/* eslint-disable import/prefer-default-export */
import { UPDATE_SEARCH } from "./actionType";

export const searchUpdate = (value) => ({
  type: UPDATE_SEARCH,
  newValue: value,
});
