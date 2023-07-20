import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Statics } from "./components/Statics";
import { Button } from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div>
        <h2>Give feedback</h2>
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      </div>
      <div>
        <h2>Statics</h2>
        <Statics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
