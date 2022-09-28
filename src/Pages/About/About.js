import React from 'react'
import Company from '../../components/Company/Company'
import Footer from '../../components/Footer/Footer'
import Partner from '../../components/partner/Partner'
import Team from '../../components/Team/Team'
import Top from '../../components/Top'

const About = () => {
  return (
    <div>
      <Top title="About Us" image="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Company/>
      <Team/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default About