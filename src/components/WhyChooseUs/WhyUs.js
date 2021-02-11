import React from "react";
import "./WhyUs.css";

function WhyUs() {

  const whyus__options = [
    {
      icon: '',
      title: 'Qualified doctors',
      word: 'Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor\
      cididunt facilisis.'
    },
    {
      icon: '',
      title: 'Certified services',
      word: 'Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor\
      cididunt facilisis.'
    },
    {
      icon: '',
      title: 'Emergency care',
      word: 'Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor\
      cididunt facilisis.'
    }
  ]
  return (
    <div className="why__us">
      <h3 className="head">Why Choose Us ?</h3>
      <h1 className="main__header">What we Provide</h1>

      <div className="whyus__options">

        {whyus__options.map(({icon,title,word}) => {
          return (
            <div className="whyus__option">
            <div className="whyus__icon">{icon}</div>
            <h2 className="whyus__title">{title}</h2>
            <p className="whyus__word">
              {word}
            </p>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default WhyUs;
