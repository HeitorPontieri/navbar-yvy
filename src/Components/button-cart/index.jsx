import { Component } from "react";
import './style.css'


export const ButtonCart = () => {
    return (
        <>
            <div className="main-circle">
                <div className="inner-circle">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
                        <img src={process.env.PUBLIC_URL + "/cart.png"} alt="" className="icon-cart" />
                    </a>
                </div>
            </div>
        </>
    )
}

