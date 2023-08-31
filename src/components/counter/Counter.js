import React from "react";

export default function Counter() {
  return (
    <>
      <div className="row counter text-center">
        <div className="col-sm-3 counter-part">
          <i className="fas fa-heart"></i>

          <div className="amount">5+</div>
          <div className="counter-box">BIG PROJECT</div>
        </div>
        <div className="col-sm-3 counter-part">
          <i className="far fa-calendar-alt"></i>

          <div className="amount">1+</div>
          <div className="counter-box">YEARS OF EXPERIENCE</div>
        </div>
        <div className="col-sm-3 counter-part">
          <i className="fas fa-users"></i>

          <div className="amount">20+</div>
          <div className="counter-box ">HAPPY CLIENT</div>
        </div>
        <div className="col-sm-3 counter-part">
          <i className="fas fa-window-restore"></i>

          <div className="amount">100+</div>
          <div className="counter-box">SMALL PROJECTS</div>
        </div>
      </div>
    </>
  );
}
