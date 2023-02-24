
import { Component } from "react";
import './style.css'

export const Navbar = () => {
  return (
    <>
      <div className="upper-nav">
        <img src={process.env.PUBLIC_URL + "/home.png"} alt="" className="icon"/>
        <img src={process.env.PUBLIC_URL + "/video.png"} alt="" className="icon"/>
      </div>

    
      <div className="lower-nav">
        <img src={process.env.PUBLIC_URL + "/fair.png"} alt="" className="icon"  />
        <img src={process.env.PUBLIC_URL + "/profile.png"} alt="" className="icon"/>

        <div className="circle"></div>
      </div>
    </>



  )
}
