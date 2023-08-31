import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card1 shadow text-center mt-5">
        <i className={`fab ${props.icon} mt-3`}></i>
        <div className="card-body mt-2 ">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.line}</p>
          <a href="#" className="btn btn-primary">
            {props.btn}
          </a>
        </div>
      </div>
    </>
  );
}
