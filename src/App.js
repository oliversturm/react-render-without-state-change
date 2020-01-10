import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("Rendering");

  const [state, setState] = useState("");

  // If I run this, I see 1000 log outputs "Rendering",
  // but the state actually updates only to "done" at
  // the end.
  // If I comment the inner setState line, rendering is
  // not triggered anymore - in other words, rendering
  // is a consequence of the setState call. But what sense
  // does that make if the state is not updated?
  // Btw, on my test machine the loop runs ~4 seconds.
  // You may need to change the numbers if your machine
  // is too fast.
  const doitWithCounter = useCallback(() => {
    setState("starting");
    setTimeout(() => {
      let step = 0;
      for (let i = 0; i < 1000000000; i++) {
        if (i % 1000000 === 0) {
          step++;
          setState(`step ${step}`);
        }
      }
      setState("done");
    }, 0);
  }, [setState]);

  return (
    <div>
      <div>State: {state}</div>
      <div>
        <button onClick={doitWithCounter}>Do it with counter</button>
      </div>
    </div>
  );
}

export default App;
