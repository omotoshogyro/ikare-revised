import React from "react";
import "./Sections.css";

function Sections() {
  return (
    <div className="sections">
          <div className="welcome__section">
        <div className="center__part">
          <h3>Welcome to iKarely</h3>
          <h1>Best Care For Your Good Health</h1>
          <p className="welcome__word">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima impedit labore nemo beatae architecto dolor nihil, numquam,
            eos, sunt et! Reprehenderit ipsam quia ratione.
          </p>

          <button className="eachsection__btn">Read more</button>
        </div>
      </div>

      <div className="each__section">
        <div className="left__part">
          <img src="images/easy-access.jpg" alt="" />
        </div>
        <div className="right__part">
          <h5>About Us</h5>
          <h1>Your health is our outmost prioty</h1>
          <p className="section__word">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima impedit labore nemo beatae architecto dolor nihil, numquam,
            eos, sunt et! Reprehenderit ipsam quia ratione.
          </p>

          <button className="eachsection__btn">read more</button>
        </div>
      </div>

      <div className="each__section">
        <div className="right__part">
          <h5>Services</h5>
          <h1>Emergency care with clinical services</h1>
          <p className="section__word">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima impedit labore nemo beatae architecto dolor nihil, numquam,
            eos, sunt et! Reprehenderit ipsam quia ratione.
          </p>

          <button className="eachsection__btn">read more</button>
        </div>

        <div className="left__part">
          <img src="images/special-care.jpg" alt="" />
        </div>
      </div>

      <div className="each__section">
        <div className="left__part">
          <img src="images/appointment.jpg" alt="" />
        </div>
        <div className="right__part">
          <h5>Blogs</h5>
          <h1>Clinical and health related articles</h1>
          <p className="section__word">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima impedit labore nemo beatae architecto dolor nihil, numquam,
            eos, sunt et! Reprehenderit ipsam quia ratione.
          </p>

          <button className="eachsection__btn">read more</button>
        </div>
      </div>

      
    </div>
  );
}

export default Sections;
