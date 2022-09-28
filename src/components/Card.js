import React from "react";
import Slider from "react-slick";

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (
    <div>
      <h2  className="text-center"> Project Details </h2>
      <Slider {...settings}>        
        <div className="container  bg-white mx-3">          
          <img src="https://images.pexels.com/photos/315658/pexels-photo-315658.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={300} width={400} />          
        </div>           
        <div className="container bg-white mx-3">
          <img src="https://images.pexels.com/photos/315658/pexels-photo-315658.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={300} width={400} />          
        </div>        
        <div className="container bg-white">
          <img src="https://images.pexels.com/photos/315658/pexels-photo-315658.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={300} width={400} />          
        </div>        
      </Slider>
    </div>
  );
}


export default Card


   
   