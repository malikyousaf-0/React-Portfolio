import React from "react";

export default function Divider(props) {
  return (
    <>
      <div id={props.id} className="container text-center my-5">
        <h1 className="dividerHeading">{props.name}</h1>
        <div className="dividerLine">{props.line}</div>
      </div>
    </>
  );
}
