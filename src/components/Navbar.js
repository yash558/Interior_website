import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
        <div className="container-fluid">
          <div className="">
            <img src={logo} alt="logo" className='mx-1 mt-2 bg-white' height={35} weight={35} />
          </div>
          <a className="navbar-brand my-0" href="/"><span style={{ color: "red" }}>D</span>eepak <span style={{ color: "red" }}>I</span>nterior</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 fs-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="appliances">APPLIANCES REPAIR</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="project">PROJECT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="Contact">CONTACT</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="about">ABOUT</Link>
              </li>
            </ul>
            <div className="justify-content-sm-center">
              <ul className='d-flex flex-row mt-3 pt-0 mx-5'>
                <button className='btn btn-outline-danger rounded-5 py-2'>💵 Payment</button>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar