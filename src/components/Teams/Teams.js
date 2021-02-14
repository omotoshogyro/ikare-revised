import React from "react";
import TeamProfile from "../../components/TeamProfile/TeamProfile";
import "./Teams.css";

function Teams() {
  const teams = [
    {
      picture: "doctor1.jpg",
      name: "thaddeus Mercy",
      title: "Co-founder & CEO",
    },
    {
      picture: "doctor2.jpg",
      name: "Akinlade Shotiyo",
      title: "Founder",
    },
    {
      picture: "doctor1.jpg",
      name: "thaddeus Mercy",
      title: "Co-founder & CEO",
    },
    {
      picture: "doctor1.jpg",
      name: "Akinlade Shotiyo",
      title: "Founder",
    },
  ];

  return (
    <div className="teams">
      <div className="teams__section">
        <h1 className="teams__header">Meet the Team</h1>

        <div className="teams__details">
          {teams.map(({ picture, name, title }) => {
            return <TeamProfile picture={picture} name={name} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
