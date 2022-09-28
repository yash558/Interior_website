import React from "react";
import "./Facility.scss";

const Facility = () => {
  return (
    <div className="home mt-5">
      <h1 className="text-center">
        OUR <span style={{ color: "red" }}>SERVICES</span>
      </h1>
      <div className="d-flex flex-row">
        <hr className="line" />
        <div className="container mx rounded-circle"></div>
        <hr className="line2" />
      </div>
      <div className="decoration d-flex flex-row">
        <div className="decor_img">
          <img
            src="https://images.pexels.com/photos/4846433/pexels-photo-4846433.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            height={650}
            width={550}
          />
        </div>
        <div className="home1 container d-flex flex-column">
          <div className="home_details">
            <div className="home1_img rounded-circle">
              {/* <i class="fa-solid fa-lamp bg-danger text-bg-secondary"></i> */}

              <i className="fas fa-chair bg-danger text-bg-secondary"></i>
            </div>
            <h5 className="mt-2">Office Furniture</h5>
          </div>
          <div className="home_details">
            <div className="home1_img  rounded-circle">
              <i className="fa-solid fa-couch bg-warning text-bg-secondary"></i>
            </div>
            <h5 className="mt-2">Interior Decorator</h5>
          </div>
          <div className="home_details">
            <div className="home1_img  rounded-circle">
              <i className="fas fa-door-open bg-success text-bg-secondary"></i>
            </div>
            <h5 className="mt-2">Wooden Partition</h5>
          </div>
          <div className="home_details">
            <div className="home1_img  rounded-circle">
              <i className="fas fa-house-user bg-primary text-bg-secondary"></i>
            </div>
            <h5 className="mt-2">Aluminium Partition</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
