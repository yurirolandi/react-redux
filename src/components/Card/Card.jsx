import React from "react";

import "./card.css";

export default function Card(props) {
  function getColor() {
    if (props.red) return "red";
    if (props.green) return "green";
    if (props.blue) return "blue";
    if (props.purple) return "purple";

    return "";
  }
  return (
    <div className={`card ${getColor(props)}`}>
      <div className="card__header">
        <div className="card__title">{props.title}</div>
      </div>
      <div className="card__content">{props.children}</div>
    </div>
  );
}
