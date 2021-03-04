import React from "react";
import "./SideBar.css";
import logo from "../../assets/imgs/logo_rpdr.png";
import MenuSeasons from "./MenuSeasons";

function SideBar() {
  var email_icon = require("../../assets/imgs/geral/icons/email.png");
  var instagram_icon = require("../../assets/imgs/geral/icons/insta.png");

  return (
    <>
      <section className="SideBar">
        <div className="logo_area">
          <img className="logo_rpdr" src={logo} alt="Logo"></img>
          <p className="sub_title">QUIZ</p>
        </div>
        <MenuSeasons />

        <div className="div_redes_sociais">
          <a href="#">
            <img src={email_icon.default} alt="email icon" />
          </a>

          <a href='#'>
            <img src={instagram_icon.default} alt="instagram icon" />
          </a>
        </div>
      </section>
    </>
  );
}

export default SideBar;
