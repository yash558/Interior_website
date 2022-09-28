import React from "react";
import contact from "../../assets/contact.jpg";
import Footer from "../../components/Footer/Footer";
import Top from "../../components/Top";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Top title="Contact Us" desc="if you have any queries, pls freely contact Us !!!" image="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 mx-3 p-5 text-center">
            <h1>
              CONTACT <span>US</span>
            </h1>

            <div className="contact-info ">
              <div>
                <span>
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <span>Phone No:</span>
                <span className="text">+91-9911825013</span>
              </div>
              <div>
                <span>
                  <i className="fas fa-envelope-open"></i>
                </span>
                <span>Email:</span>
                <span className="text">deepakinterior17@gmail.com</span>
              </div>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>Address</span>
                <span className="text">Mahasana (Gujarat), India</span>
              </div>
              <div>
                <span>
                  <i className="fas fa-clock"></i>
                </span>
                <span>Opening Hours</span>
                <span className="text">Monday-Friday (9:00 AM to 8:00 PM)</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-0">
            <img src={contact} alt="Contact Us" height={500} width={600} />
          </div>
          <div className="col-md-6">
            <form action="">
              <div className="mb-3">
                <label for="exampleForm" className="form-label fw-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="yash sharma"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="yashsharm06033@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Phone No
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+91 8298292...."
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label fw-bold"
                >
                  Ask Your Doubt?
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="7"
                ></textarea>
              </div>
              <button type="btn" className="btn btn-outline-danger px-4 text">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
