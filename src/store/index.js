/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { createStore } from "redux";
import { Reducers } from "./reducers";

export const Store = createStore(Reducers);
