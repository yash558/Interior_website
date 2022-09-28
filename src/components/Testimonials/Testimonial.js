import React from 'react'
import './Testimonial.scss'
import mukund from '../../assets/mukund.jpg'
import ramesh from '../../assets/ramesh.jpg'
import satyam from '../../assets/satyam.jpg'
import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="testimonials my-5">
            <h1 className="text-center">OUR <span style={{color:"red"}}>TESTIMONIAL</span></h1>

            <div className="d-flex flex-row">
                <hr className="line" />
                <div className="container1 mx-4 rounded-circle">
                </div>
                <hr className="line2" />
            </div>
            <div className="container">
                <Slider {...settings}>
                    <div className="slide-col">
                        <div className="user-text bg-success text-bg-dark">
                            <p className="mt-5">Deepak Interior Provides the best services for my office decorating and satisfied my all requirement's </p>
                            <h3>Mukund</h3>
                            <p>Sara Solution's pvt Ltd</p>
                        </div>
                        <div className="user-img">
                            <img src={mukund} alt="" height={200} width={300} />
                        </div>
                    </div>
                    <div className="slide-col ">
                        <div className="user-text bg-warning text-bg-dark">
                            <p className="mt-5">We need a aluminium partiton work for our company after lot of searches we found a deepak interior .This company complete's their work on time and working Cost is very low. This happily satisfied our company for their work.</p>
                            <h3>Ramesh</h3>
                            <p>JK Builder's</p>
                        </div>
                        <div className="user-img">
                            <img src={ramesh} alt="" height={200} width={200} />
                        </div>
                    </div>
                    <div className="slide-col">
                        <div className="user-text bg-danger text-bg-dark">
                            <p className="mt-5">Deepak Interior's services are very good. They understand the customer budget and requirement. After that they provide their best work to satisfied Customer's. I am happy for the services they provided.</p>
                            <h3>Satyam</h3>
                            <p>Zara Tech pvt Ltd</p>
                        </div>
                        <div className="user-img">
                            <img src={satyam} alt="" height={200} width={200} />
                        </div>
                    </div>
                    
                </Slider>
            </div>
        </div>
    );
}

export default Testimonial