import React, { useState } from "react";
import Question from "./Question";
import data from "./data.json";

const App = () => {
  const [getIndex, setIndex] = useState(0);
  const [getData, setData] = useState(data);

  return (
    <div className="container">
      <h1 className="heading__primary">Questions and answers about login</h1>
      <div className="question-container">
        {getData.map((el, index) => {
          return <Question data={data[index]}></Question>;
        })}
      </div>
    </div>
  );
};

export default App;
