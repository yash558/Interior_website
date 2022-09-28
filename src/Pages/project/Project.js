import React from 'react'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import Top from '../../components/Top'
const Project = () => {
  return (
    <div>
      <Top image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" title="Our Project" desc="We provide India best Services in Interior Design"/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Project