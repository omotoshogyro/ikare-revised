import React from "react";
import "./TeamProfile.css";

function TeamProfile({ picture, name, title }) {
  return (
    <figure class="doctor__detail">
      <img src={`images/${picture}`} alt="" />
      <figcaption>
        <div className="doctor__info">
          <h2 className="doctor__name">{name}</h2>
          <h5 className="doctors__title">{title}</h5>
        </div>
      </figcaption>
    </figure>
  );
}

export default TeamProfile;
