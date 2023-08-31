import React from "react";
import Card from "../../components/card/Card";
export default function Cards() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Card
              name="Html"
              line="Writing HTML in a professional manner involves adhering to best practices and maintaining clean and readable code"
              btn="Check This"
              icon="fa-html5"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card
              name="CSS"
              line="Eye Catching and responsie Design that will impress you custommer and force them to buy your services and product"
              btn="Check This"
              icon="fa-css3-alt"
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card
              name="React"
              line="Add Functionality with the most usable javascript library. It help us to create and modify website easily"
              btn="Check This"
              icon="fa-react"
            />
          </div>
        </div>
      </div>
    </>
  );
}
