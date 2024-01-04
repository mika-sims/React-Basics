import React, { useState } from "react";

export default function HooksComponent(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello, {props.name}. I'm a functional componenet with hooks! </h1>
      <h2>You've clicked {count} times</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Counter
      </button>
    </div>
  );
}
