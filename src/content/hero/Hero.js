import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Btn from "../../components/buttons/Btn";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="mainContent d-flex justify-content-center align-items-center flex-column">
          <h1 className="mainHeading">I am Malik yousaf</h1>
          <p className="mainLine">Web Developer and Designer</p>
          <Btn name="Have a project" />
        </div>
      </div>
      <div className="blur"></div>
    </>
  );
}
