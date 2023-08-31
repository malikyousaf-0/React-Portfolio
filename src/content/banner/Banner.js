import React from "react";

export default function Banner(props) {
  const mediaQuery = window.matchMedia("(max-width: 588px)");

  return (
    <>
      <div
        className="banner"
        style={{
          height: mediaQuery.matches ? props.mblsize : props.size,
        }}
      >
        <div className="mainContent d-flex justify-content-center align-items-center flex-column">
          <div className="container">{props.content}</div>
        </div>
      </div>
      <div
        className="bannerblur"
        style={{ height: mediaQuery.matches ? props.mblsize : props.size }}
      ></div>
    </>
  );
}
