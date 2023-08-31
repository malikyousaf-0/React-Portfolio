import React from "react";

export default function Progress(props) {
  return (
    <>
      <p>{props.name}</p>
      <div className="progress">
        <div
          className="progress-bar "
          role="progressbar"
          style={{ width: props.value, borderRadius: "1rem" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.value}
        </div>
      </div>
    </>
  );
}
