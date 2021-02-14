import React from "react";
import PageLanding from "../../components/PageLanding/PageLanding";
import Teams from "../../components/Teams/Teams";
import WhyUs from "../../components/WhyChooseUs/WhyUs";
import "./About.css";

function About() {
  return (
    <div className="about">
      <PageLanding image="easy-access.jpg" title="About us" />

      <div className="each__section">
        <div className="left__part">
          <img src="images/health-service.jpg" alt="" />
        </div>
        <div className="right__part">
          <h5></h5>
          <h1>Your Health Is Our Outmost Prioty</h1>
          <p className="section__word">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima impedit labore nemo beatae architecto dolor nihil, numquam,
            eos, sunt et! Reprehenderit ipsam quia ratione adipisicing elit.
            Perferendis minima impedit labore nemo beatae architecto dolor
            nihil, numquam, eos, sunt et! Reprehenderit ipsam quia ratione
          </p>
        </div>
      </div>
      <WhyUs />
      <Teams />
    </div>
  );
}

export default About;
