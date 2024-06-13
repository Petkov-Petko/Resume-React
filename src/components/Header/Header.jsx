import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header" id="title">
      <img src={assets.profilePhoto}></img>
      <h1>Hello. I'm Petko Petkov.</h1>
      <h2>Frontend Developer.</h2>
      <div className="contacts"></div>
      <p className="information">
        <i
          className="fa-solid fa-envelope fa-lg"
          style={{ color: "#00c3ff" }}
        ></i>
        Petkozlatilov1234@gmail.com
      </p>
      <p className="information"><i className="fa-solid fa-location-dot fa-lg" style={{color:' #00c3ff'}}></i>Varna Bulgaria</p>
      <p className="information"><i className="fa-solid fa-phone fa-lg" style={{color: '#00c3ff'}}></i>+359 892 926 593</p>
    
    </div>
  );
};

export default Header;

