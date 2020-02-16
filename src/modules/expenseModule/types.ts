import { PickActionType } from "../types";
import { actionCreators } from "./actions";

/** 出費 */
export type Expense = {
  /** 何にお金を使ったか */
  title: string;
  /** いくら使ったか */
  amount: string;
};

export type Expenses = Expense[];

export type ExpenseState = {
  unrecordedExpense: Expense;
  expenses: Expenses;
};

export type ExpenseAction = PickActionType<typeof actionCreators>;
