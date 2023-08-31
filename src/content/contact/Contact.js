import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container ">
        <div className="contact">
          <div className="row">
            <div className="col-md-6 text-dark p-5">
              <div className="form-heading mb-2">Send message</div>
              <input
                type="text"
                className="form-control my-3"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="form-control my-3"
                placeholder="Email"
              />
              <input
                type="text"
                className="form-control my-3"
                placeholder="Subject"
              />
              <textarea
                className="form-control"
                name="message"
                id="message"
                cols="30"
                rows="3"
                placeholder="Message"
              ></textarea>
              <div className="btn btn-primary mt-3">Send Message</div>
            </div>

            <div className="col-md-6 text-dark px-5 py-md-5">
              <div className="form-heading mb-2">Get in Touch</div>
              <div className="address my-2">
                <i className="fas fa-map-marker-alt me-3"> </i>
                Faisalabad, Punjab, Pakistan. 38000
              </div>
              <div className="phone my-2">
                <i className="fas fa-phone me-3"></i>
                03007917729
              </div>
              <div className="email my-2">
                <i className="fas fa-envelope me-3"></i>
                malikyousaf.live@gmail.com
              </div>
              <div className="icons my-5">
                <a
                  href="https://www.facebook.com/malik.yousaf.73594479"
                  target="_blank"
                >
                  <i className="fab fa-facebook  mx-2"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=03007917729"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp mx-2"></i>
                </a>

                <a href="https://github.com/malikyousaf-0" target="_blank">
                  <i className="fab fa-github mx-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center">
          <p>©2023, All Rights Reserved </p>
          <p>
            Developed by <b>Malik Yousaf Awan</b>
          </p>
        </footer>
      </div>
    </>
  );
}
