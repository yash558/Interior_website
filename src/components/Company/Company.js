import React from 'react'
import company from '../../assets/company.jpg'
import './Company.scss'

const Company = () => {
  return (
    <div className="company">
      <div className="container p-1 d-flex flex-row">
        <div className="company_details">
          <h1 className="text-center mt-5">Welcome to <span style={{ color: '#FD1C03' }}>D</span>eepak <span style={{ color: '#FD1C03' }}>I</span>nterior</h1>
          <p>We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients. To those wanting to make an impact with design. </p>
          <h5>Completed Projects in <span>16+ companies</span></h5>
          <div className="company-data">
            <div className="data1">
              <h1>950+</h1>
              <h6>Projects Completed</h6>
            </div>
            <div className="data1">
              <h1>27</h1>
              <h6>Expert Workers</h6>
            </div>
            <div className="data1">
              <h1>264</h1>
              <h6>Happy Client's</h6>
            </div>
          </div>
          <button className='btn btn-danger'>LEARN MORE</button>
        </div>
        <div className="company_img">
          <img src={company} alt="" height={700} width={500} />
        </div>
        <div className="company_cont">
          <div className="cont">
            <h4> <span>D</span>eepak <span>I</span>nterior <br/> Modern Design</h4>
            <h5>year <br /> experience</h5>
            <h1>15</h1>
            <div className="cont1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company