import React from "react";
import photo from "../images/Photo.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={photo} className="info--img" />
      <h1 className="info--name">Enrique Saracho Félix</h1>
      <h3 className="info--ocup1">Frontend developer</h3>
      <h3 className="info--ocup2">Industrial Engineer</h3>
      <div className="info--btns">
        <button className="info--btns--email">
          <i className="fas fa-envelope"></i>Email
        </button>
        <button className="info--btns--linkedin">
          <i class="fab fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
