import { ExpenseState, ExpenseAction } from "./types";
import { actionTypes } from "./actions";

const initialState: ExpenseState = {
  unrecordedExpense: {
    title: "",
    amount: ""
  },
  expenses: []
};

export const expenseReducer = (
  state: ExpenseState = initialState,
  action: ExpenseAction
) => {
  switch (action.type) {
    case actionTypes.CHANGE_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        unrecordedExpense: { ...state.unrecordedExpense, title }
      };
    }
    case actionTypes.CHANGE_AMOUNT: {
      const { amount } = action.payload;
      return {
        ...state,
        unrecordedExpense: { ...state.unrecordedExpense, amount }
      };
    }
    case actionTypes.RECORD_EXPENSE: {
      const { title, amount } = state.unrecordedExpense;
      const expenses = [...state.expenses, { title, amount }];
      return { unrecordedExpense: { title: "", amount: "" }, expenses };
    }
    default: {
      return state;
    }
  }
};
