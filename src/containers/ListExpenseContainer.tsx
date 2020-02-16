import React from "react";
import { useTypedSelector } from "../common/useTypedSelector";
import { ListExpenses } from "../components/ListExpenses";

export const ListExpenseContainer = () => {
  const expenses = useTypedSelector(state => state.expense.expenses);

  return <ListExpenses expenses={expenses} />;
};
