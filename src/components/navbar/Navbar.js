import React, { useState } from "react";

export default function Navbar() {
  const [bg, setBg] = useState("none");
  const [scroll, setScroll] = useState("");
  const [margin, setMargin] = useState("pt-3");
  const [menu, setMenue] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      setScroll("scroll");
      setMargin("mt-0");
      setBg("light shadow");
    } else {
      setBg("none");
      setScroll("unscroll");
      setMargin("pt-3");
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${bg} fixed-top ${margin}`}>
        <div className="container">
          <a className="navbar-brand scroll" href="#">
            MY Awan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => (menu === false ? setMenue(true) : setMenue(false))}
          >
            <i
              className={`menu-button fas ${
                menu ? "fa-times" : "fa-ellipsis-v"
              }`}
            ></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  className={`nav-link ${scroll}`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${scroll}`} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${scroll}`} href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${scroll}`} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${scroll}`} href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${scroll}`} href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
