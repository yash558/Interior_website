import React from "react";
import umesh from '../../assets/umeshsir.jpg'
import rakesh from '../../assets/rajesh.jpg'
import mama from '../../assets/mama.jpg'
import './Team.css'
const Team = () => {
  return (
    <div>
      <h1 className="mt-5 text-center main-heading">
        OUR <span style={{ color: "red" }}>TEAM</span>
      </h1>
      <div className="d-flex flex-row">
        <hr className="line" />
        <div className="container1 mx-4 rounded-circle"></div>
        <hr className="line2" />
      </div>
      <div className="container d-flex flex-row">
        <div className="card">
          <div className="content">
            <div className="imgBox">
              <img src={umesh} alt="" height={300} width={300} className="rounded-circle" />
            </div>
            <div className="content_box">
                <h3>Umesh Jangara</h3>
                <p>Management Head</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBox">
              <img src={mama} alt="" height={300} width={300} className="rounded-circle" />
            </div>
            <div className="content_box">
                <h3>Deepak Kumar</h3>
                <p className="founder">Founder</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBox">
              <img src={rakesh} alt="" height={300} width={300} className="rounded-circle" />
            </div>
            <div className="content_box">
                <h3>Rajesh Jangra</h3>
                <p>Finance Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
