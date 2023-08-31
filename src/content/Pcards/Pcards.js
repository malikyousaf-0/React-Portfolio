import React from "react";
import Pcard from "../../components/portfoliocard/Pcard";
export default function Pcards(props) {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Pcard
              img={props.entities.imges[0]}
              title={props.entities.titles[0]}
              discription={props.entities.discription[0]}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Pcard
              img={props.entities.imges[1]}
              title={props.entities.titles[1]}
              discription={props.entities.discription[1]}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Pcard
              img={props.entities.imges[2]}
              title={props.entities.titles[2]}
              discription={props.entities.discription[2]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
