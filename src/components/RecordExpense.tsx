import React from "react";

type Props = {
  title: string;
  amount: string;
  onChangeTitle: (title: string) => void;
  onChangeAmount: (amount: string) => void;
  onClickRecordButton: () => void;
};

export const RecordExpense = ({
  title,
  amount,
  onChangeTitle,
  onChangeAmount,
  onClickRecordButton
}: Props) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeTitle(e.target.value);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeAmount(e.target.value);
  const handleClickRecordButton = () => onClickRecordButton();

  return (
    <>
      <h2>出費を登録する画面だよ</h2>
      <section>
        <section className="title-input">
          <span>品目</span>
          <input type="text" value={title} onChange={handleTitleChange} />
        </section>
        <section className="amount-input">
          <span>金額</span>
          <input type="text" value={amount} onChange={handleAmountChange} />
        </section>
        <section className="record-button">
          <button onClick={handleClickRecordButton}>登録</button>
        </section>
      </section>
    </>
  );
};
