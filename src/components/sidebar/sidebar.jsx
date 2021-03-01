import React from "react";
import "./SideBar.css";
import logo from '../../assets/imgs/logo_rpdr.png'

function SideBar() {
  return (
  <>
    <section className="SideBar">
      <div className='logo_area'>
        <img className='logo_rpdr' src={logo} alt='Logo'></img>
        <p className='sub_title'>QUIZ</p>
      </div>
        
    </section>
  </>
  );
}

export default SideBar;
