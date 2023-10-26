import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddReducer from "./AddRedux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddReducer />
    </div>
  );
};

export default ReduxExamples;