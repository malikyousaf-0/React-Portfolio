import React from "react";

export default function Testimonial(props) {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner text-center">
          <div className="carousel-item my-5 active">
            <h1>Private Client</h1>
            <div className="carosal-lines">
              "Working with Malik Yousaf as our web developer has been a
              game-changer for our online presence. Their expertise and
              attention to detail brought our vision to life in a way that
              exceeded our expectations."
            </div>
          </div>
          <div className="carousel-item my-5">
            <h1>Private Client</h1>
            <div className="carosal-lines">
              "I am truly grateful for Yousaf 's exceptional web development
              skills. They seamlessly integrated complex functionality and sleek
              design, resulting in a website that not only looks stunning but
              also delivers an exceptional user experience."
            </div>
          </div>
          <div className="carousel-item my-5">
            <h1>Private Client</h1>
            <div className="carosal-lines">
              "Working with Yousaf was an absolute pleasure. Their proficiency
              in various web development technologies, along with their strong
              communication skills, ensured a smooth collaboration from start to
              finish.."
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
