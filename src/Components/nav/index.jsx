
import { Component } from "react";
import { ButtonCart } from "../button-cart";
import './style.css'
import HomeImg from '../../imgs/home.png'
import VideoImg from '../../imgs/video.png'
import FairImg from '../../imgs/fair.png'
import ProfileImg from '../../imgs/profile.png'

export const Navbar = () => {
  return (
    <>
      <div className="upper-nav">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
          <img src={HomeImg} alt="" className="icon" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
          <img src={VideoImg} alt="" className="icon" />
        </a>
      </div>
      <div className="button-container">

        <ButtonCart />

      </div>

      <div className="lower-nav">
        <a href="">
          <img src={FairImg} alt="" className="icon" />
        </a>
        <a href="">
          <img src={ProfileImg} alt="" className="icon" />
        </a>
      </div>


    </>



  )
}
