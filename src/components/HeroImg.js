import "./HeroImg.css";
import React from 'react'
// import { render } from "@testing-library/react";
import IntroImg from "../assets/logo-og.png";
import {Link} from "react-router-dom";
const HeroImg = () => {
    // render()
    
        return (
            <div className="hero">
                <div className="mask">
                    <img className="intro-img" src={IntroImg} alt= "IntroImg"/>
                </div>
                <div className="content">
                    <p>
                        Hi, My name is Purna Siva Sai.
                    </p>
                    <h1>
                    I am currently interning at IIT-Bombay as a DevOps Engineer.
                    </h1>
                    <div>
                        <br>  </br>
                        <br>  </br>
                        <Link to ="/Projects" className="btn">Projects</Link>
                        <Link to ="/Contact" className="btn btn-light">Contact</Link>
                    </div>
                </div>
            </div>
          )

    
  
}

export default HeroImg
