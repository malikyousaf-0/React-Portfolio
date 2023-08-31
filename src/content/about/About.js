import React from "react";
import profileimg from "../../asset/profileimg.png";
import Progress from "../../components/progressbar/Progress";
export default function About(props) {
  return (
    <>
      <div id={props.id} className="container mt-5 about">
        <div className="row">
          <div className=" col-lg-6">
            <div className="row">
              <div className="col-sm-5 display-sm-none text-center">
                <img
                  src={profileimg}
                  style={{ width: "17rem" }}
                  alt="profile img"
                />
              </div>
              <div className="col-sm-7 mt-5">
                <p>
                  <b>Name: </b>Malik Yousaf Awan
                </p>
                <p>
                  <b>Who I Am: </b> I am a front End Web Developer used advance
                  languages to built eye catching sites.
                </p>
                <p>
                  <b>Email: </b>malikyousaf.live@gmail.com
                </p>
                <p>
                  <b>Phone: </b>03007917729
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Skills</h3>
                <Progress name="HTML" value="95%" />
                <Progress name="CSS" value="90%" />
                <Progress name="SCSS" value="90%" />
                <Progress name="JavaScript" value="70%" />
                <Progress name="React" value="70%" />
                {/* <Progress name="Git & Git Hub" value="80%" /> */}
              </div>
            </div>
          </div>
          <div className=" col-lg-6 p-4">
            <h2 className="aboutHeading"> About me</h2>
            <p className="aboutPara ">
              Passionate Teacher with more than 5 years of experience developing
              and implementing diverse curriculum covering wide range of IT
              subjects. Highly skilled at motivating students through positive
              encouragement and reinforcement of concepts via interactive
              classroom instruction and observation. Successful in helping
              students develop strong literacy, numeracy, social and learning
              skills. <br /> Self-motivated Senior Web and Mobile App Developer
              with a high level of experience working on multiple projects.
              Passionate and hardworking with a penchant for meeting deadlines.{" "}
              <br /> Interested in role with the company promoting best
              practices and offering diverse customer projects. Experienced
              mobile app developer who has the ability to always look for ways
              to improve upon an already existing app to keep people downloading
              it and enjoying it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
