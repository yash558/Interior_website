import React from 'react'
import video from '../../video/video.mp4'
import './Hero.scss'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <div className="hero-details">
                <p>India's Best Interior Decorator's</p>
                <div className="line22"></div>
                <h1><span style={{color: "red"}}>D</span>EEPAK <span style={{color: "red"}}>I</span>NTERIOR</h1>
                <div className="hero-btn">
                    <Link className="btn btn-primary mx-2 fs-5" to="/project">Our Project's</Link>
                    <Link className="btn btn-danger mx-3 fs-5" to="/contact">Work Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero