// Your code here!
import React from "react";
import ReactDOM from "react-dom";

function Counter() {
  return (
    <div id="container">
      <div id="navbar">Counter.js</div>
      <div id="counter">
        <h1>0</h1>
        <button>Increment</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
