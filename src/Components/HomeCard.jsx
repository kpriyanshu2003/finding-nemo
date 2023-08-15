import React from "react";
import "../styles/Home.css";
import Button from "../Components/Button";
import img from "../assets/l&f.png";
import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
const HomeCard = () => {
  return (
    <div className="HomeCard">
    <div className="Cardimg">
        <img src={img} width="100%" draggable="false" alt="Card"/>
    </div>
      <div className="Cardb">
      <img src={logo} width="100%" draggable="false" alt="Card "/>
        <div className="hbtn">
        <Link to="/Lostitems" style={{ textDecoration: 'none' }}>
          <Button button="Let's get started!" className="homeButton"/></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
