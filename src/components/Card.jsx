import React from "react";
import CardItems from "./CardItems";

function Card(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.tell}</h1>
    </>
  );
}

export default Card;
