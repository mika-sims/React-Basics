import React from "react";

export default function FunctionalGreetingComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}! </h1>
      <h2>I'm a simple functional component!</h2>
    </div>
  );
}
