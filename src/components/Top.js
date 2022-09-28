import React from "react";
import './Top.css'
const Top = (props) => {
  return (
    <div className="top_title">
      <div className="top_img">
        <img src={props.image} alt={props.title} height={500} width={1520}/>
      </div>
      <div className="top_details">
        <div className="top_details_title">
          <h1>{props.title}</h1>
        </div>
        <div className="design">
          <div className="l2"></div>
          <div className="l3"></div>
          <div className="l4"></div>
        </div>
        <div className="top_details_title">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
