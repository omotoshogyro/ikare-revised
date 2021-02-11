import React from "react";
import TeamProfile from "../../components/TeamProfile/TeamProfile";
import WhyUs from "../../components/WhyChooseUs/WhyUs";
import "./About.css";

function About() {
  const teams = [
    {
      picture: "doctor1.jpg",
      name: "thaddeus Mercy",
      title: "Neurologist",
    },
    {
      picture: "doctor2.jpg",
      name: "Akinlade Shotiyo",
      title: "Pharmacist",
    },
    {
      picture: "doctor1.jpg",
      name: "thaddeus Mercy",
      title: "Neurologist",
    },
    {
        picture: "doctor1.jpg",
        name: "Akinlade Shotiyo",
        title: "Neurologist",
      }
  ];

  return (
    <div className="about">
      <div
        className="page__landing"
        style={{
          backgroundImage: `url(images/easy-access.jpg)`,
        }}
      >
        <h1 className="page__title">About Us</h1>
      </div>

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

          {/* <button className="eachsection__btn">
                        read more
                    </button> */}
        </div>

        
        
      </div>
      <WhyUs />

      <div className="teams__section">
        <h1 className="teams__header">Meet the team</h1>

        <div className="teams__details">
          {teams.map(({ picture, name, title }) => {
            return (
              <TeamProfile picture={picture} name={name} title={title}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
