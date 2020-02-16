import React, { useCallback } from "react";
import { RecordExpense } from "../components/RecordExpense";
import { useTypedSelector } from "../common/useTypedSelector";
import { useDispatch } from "react-redux";
import { expenseOperations } from "../modules/expenseModule";

export const RecordExpenseContainer = () => {
  const title = useTypedSelector(
    state => state.expense.unrecordedExpense.title
  );
  const amount = useTypedSelector(
    state => state.expense.unrecordedExpense.amount
  );

  const dispatch = useDispatch();
  const actions = {
    onChangeTitle: useCallback(
      (title: string) => {
        dispatch(expenseOperations.changeTitle(title));
      },
      [dispatch]
    ),
    onChangeAmount: useCallback(
      (amount: string) => {
        dispatch(expenseOperations.changeAmount(amount));
      },
      [dispatch]
    ),
    onClickRecordButton: useCallback(() => {
      dispatch(expenseOperations.recordExpense());
    }, [dispatch])
  };

  return <RecordExpense title={title} amount={amount} {...actions} />;
};
