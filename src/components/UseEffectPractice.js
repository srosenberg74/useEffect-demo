import React, { useState, useEffect } from "react";

function UseEffectPractice() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("count1: ", count1);
  }, [count1]);

  useEffect(() => {
    console.log("count2: ", count2);
  }, [count2]);

  useEffect(() => {
    console.log("On Initial Mount");
    return () => console.log("Unmount");
  }, []);

  useEffect(() => {
    console.log("Every Render");
  });

  function incrementCounter1() {
    setCount1(count1 + 1);
  }

  function incrementCounter2() {
    setCount2(count2 + 1);
  }
  return (
    <div>
      <h1>Practicing UseEffect</h1>
      <button onClick={incrementCounter1}>Increment Counter1</button>
      <button onClick={incrementCounter2}>Increment Counter2</button>
    </div>
  );
}

export default UseEffectPractice;
