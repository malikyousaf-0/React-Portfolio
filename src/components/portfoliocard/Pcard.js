import React from "react";

export default function Pcard(props) {
  return (
    <>
      <div className="card mt-3">
        <img src={props.img} className="card-img-top" alt="dljfdskj" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.discription}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </>
  );
}
