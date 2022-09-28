import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="">

      <footer className="text-center text-lg-start bg-black text-muted">        

        <section className="pt-4">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">

                <h6 className=" fw-bold mb-4 fs-5">
                  <img src={logo} alt="logo" className="rounded-circle mx-2" height={40} width={40} />
                  <span style={{ color: "red" }}>D</span>eepak <span style={{ color: "red" }}>I</span>nterior
                </h6>
                <p>
                  Our company provide best services in the field of Interior Designing, Aluminium Partition, Gypsum, Partition and wooden Partition etc.
                </p>
                <div class="social-links">
                  <a href="/" className="bg-white"><i className="fab fa-facebook-f"></i></a>
                  <a href="/" className="bg-white"><i className="fab fa-instagram"></i></a>
                  <a href="/" className="bg-white"><i className="fab fa-twitter"></i></a>
                  <a href="/" className="bg-white"><i className="fab fa-github"></i></a>
                  <a href="/" className="bg-white"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">

                <h6 className="text-uppercase fw-bold mb-4">
                 USEFUL LINKS
                </h6>
                <p>
                  <a href="#!" className="text-reset">Private Policy</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help and Contact Us</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Tern of Services</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Contact</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">

                <h6 className="text-uppercase fw-bold mb-4">
                  MENU LINKS
                </h6>
                <p>
                  <Link to="product" className="text-reset">Product</Link>
                </p>
                <p>
                  <Link to="repair" className="text-reset">Appliances Repair</Link>
                </p>
                <p>
                  <a href="#!" className="text-reset">Contact</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">About</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">

                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> Shop No.G-34, Shivaji Complex ,Becharaji, Mahasana (Gujarat) , 384210</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  deepakinterior17@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> 7486865244</p>
                <p><i className="fas fa-mobile me-3"></i> 9911825013</p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4 text-white bg-dark">
        Copyright ©2022 All rights reserved by Deepak Interior | Made ❤️ by 
          <a className="text-reset fw-bold" href="/"> Yash Sharma.</a>
        </div>

      </footer>

    </div>
  )
}

export default Footer