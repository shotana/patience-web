import { createStore, combineReducers } from "redux";
import { expenseReducer } from "./modules/expenseModule/reducers";
import { AppState } from "./types";

const store = createStore(
  combineReducers<AppState>({
    expense: expenseReducer
  })
);

export default store;
