import React from 'react'
import clientone from '../../assets/clientone.png'
import client7 from '../../assets/client7.png'
import clienttwo from '../../assets/clienttwo.png'
import clientthree from '../../assets/clientthree.png'
import client5 from '../../assets/client5.png'
import client6 from '../../assets/client6.png'
import client8 from '../../assets/client8.png'
import client9 from '../../assets/swwl.png'
import client10 from '../../assets/apollo.jpg'
import client11 from '../../assets/kml.png'

import Slider from "react-slick";

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="container mt-5">
      <h1 className='text-center fw-bold'>OUR <span style={{ color: "red" }}>CLIENT</span> </h1>
      <div className="d-flex flex-row">
        <hr className="line" />
        <div className="container1 mx-4 rounded-circle"></div>
        <hr className="line2" />
      </div>
      <Slider {...settings}>
        <div className="pointer">
          <img src={clientone} alt="" height={200} width={200} />
        </div>
        <div className='mt-5'>
          <img src={clienttwo} alt="" height={100} width={200} />
        </div>
        <div className="mt-5 pt-2">
          <img src={clientthree} alt="" height={100} width={300} />
        </div>
        <div>
          <img src={client5} alt="" height={200} width={200} />
        </div>
        <div>
          <img src={client6} alt="" height={200} width={200} />
        </div>
        <div>
          <img src={client11} alt="" height={170} width={200} />
        </div>
        <div>
          <img src={client7} alt="" height={200} width={200} />
        </div>
        <div>
          <img src={client8} alt="" height={200} width={200} />
        </div>
        <div>
          <img src={client9} alt="" height={200} width={200} />
        </div>
        <div>
          <img src={client10} alt="" height={200} width={200} />
        </div>
      </Slider>
    </div>
  );

}


export default Partner;