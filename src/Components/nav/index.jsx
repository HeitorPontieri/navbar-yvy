
import { Component } from "react";
import { ButtonCart } from "../button-cart";
import './style.css'

export const Navbar = () => {
  return (
    <>
      <div className="upper-nav">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
          <img src={process.env.PUBLIC_URL + "/home.png"} alt="" className="icon" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
          <img src={process.env.PUBLIC_URL + "/video.png"} alt="" className="icon" />
        </a>
      </div>
      <div className="button-container">

        <ButtonCart />

      </div>

      <div className="lower-nav">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
          <img src={process.env.PUBLIC_URL + "/fair.png"} alt="" className="icon" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
          <img src={process.env.PUBLIC_URL + "/profile.png"} alt="" className="icon" />
        </a>
      </div>


    </>



  )
}
