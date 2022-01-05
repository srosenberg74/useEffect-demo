import UseEffectPractice from "./components/UseEffectPractice";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPractice, setShowPractice] = useState(false);

  function togglePractice() {
    setShowPractice(!showPractice);
  }

  return (
    <div className="App">
      {showPractice && <UseEffectPractice />}
      <button onClick={togglePractice}>Toggle Practice</button>
    </div>
  );
}

export default App;
