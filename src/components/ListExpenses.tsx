import React from "react";
import { Expenses } from "../modules/expenseModule/types";

type Props = {
  expenses: Expenses;
};

export const ListExpenses = ({ expenses }: Props) => {
  const expenseList = expenses.map(expense => (
    <li key={expense.title}>
      <span>{expense.title}</span>
      &nbsp;
      <span>{expense.amount}</span>円
    </li>
  ));

  return (
    <section>
      <ul>{expenseList}</ul>
    </section>
  );
};
