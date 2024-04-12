import React, { useState } from "react";

function App() {
  const [counter, setCount] = useState(0);
  return (
    <>
      <h3>This is Clicker : {counter}</h3>
      <button
        onClick={() => {
          setCount(counter + 1);
        }}
      >
        Click me!
      </button>
    </>
  );
}

export default App;
