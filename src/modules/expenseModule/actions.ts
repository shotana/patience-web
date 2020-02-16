import { Expense } from "./types";

export const actionTypes = {
  CHANGE_TITLE: "recordExpense/CHANGE_TITLE",
  CHANGE_AMOUNT: "recordExpense/CHANGE_AMOUNT",
  RECORD_EXPENSE: "recordExpense/RECORD_EXPENSE"
} as const;

export const actionCreators = {
  changeTitle: (title: Expense["title"]) => ({
    type: actionTypes.CHANGE_TITLE,
    payload: { title }
  }),
  changeAmount: (amount: Expense["amount"]) => ({
    type: actionTypes.CHANGE_AMOUNT,
    payload: { amount }
  }),
  recordExpense: () => ({
    type: actionTypes.RECORD_EXPENSE
  })
};
