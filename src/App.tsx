import React from "react";
import "./App.css";
import { RecordExpenseContainer } from "./containers/RecordExpenseContainer";
import { ListExpenseContainer } from "./containers/ListExpenseContainer";

function App() {
  return (
    <div className="App">
      <RecordExpenseContainer />
      <hr />
      <ListExpenseContainer />
    </div>
  );
}

export default App;
