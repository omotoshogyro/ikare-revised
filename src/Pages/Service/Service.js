import React from "react";
import "./Service.css";

function Service() {
  const services = [
    {
      icon: "wound.svg",
      title: "Woundcare",
      word:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nulla fugiat? Dolore officiis non, fugiat saepe temporibus ratione",
    },
    {
      icon: "injection.svg",
      title: "vaccination",
      word:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nulla fugiat? Dolore officiis non, fugiat saepe temporibus ratione",
    },
    {
      icon: "Catherization.svg",
      title: "catherization",
      word:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nulla fugiat? Dolore officiis non, fugiat saepe temporibus ratione",
    },
    {
      icon: "Chemotography.svg",
      title: "Chemotography",
      word:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nulla fugiat? Dolore officiis non, fugiat saepe temporibus ratione",
    },
    {
      icon: "healthcare.svg",
      title: "Geruatrucs care",
      word:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nulla fugiat? Dolore officiis non, fugiat saepe temporibus ratione",
    },
    {
      icon: "teeth-checkup.svg",
      title: "dental care",
      word:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nulla fugiat? Dolore officiis non, fugiat saepe temporibus ratione",
    },
  ];

  return (
    <div className="services">
      <div
        className="page__landing"
        style={{
          backgroundImage: `url(images/health-service.jpg)`,
        }}
      >
        <h1 className="page__title">What we offer</h1>
      </div>

      <div className="each__section">
        <div className="right__part">
          <h5>services</h5>
          <h1>Get the best medical aid at home</h1>
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
        <div className="left__part">
          <img src="images/appointment.jpg" alt="" />
        </div>
      </div>

      <div className="services__section">
        <div className="service__headers">
          <h4 className="services__head">Our Services</h4>
          <h1 className="services__mainheader">Health Services we offer</h1>
        </div>

        <div className="service__lists">
          {services.map(({ icon, title, word }) => {
            return (
              <div className="service__list">
                <div className="list__icon">
                  <img src={`images/icons/${icon}`} alt=""/>
                  </div>
                <h4 className="list__title">{title}</h4>
                <p className="list__word">{word}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
