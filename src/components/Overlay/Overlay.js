import React from "react";
import ReactDom from 'react-dom'
import "./Overlay.css";

function Overlay() {
  const content = <div className="overlay"></div>;

  return ReactDom.createPortal(content, document.getElementById('overlay'))
}

export default Overlay;
