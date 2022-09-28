import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
import './Whatsapp.css'
const Whatsapp = () => {
  return (
    <div className="whatsapp_float">
        <a href="https://api.whatsapp.com/send?phone=919911825013"  target="_blank" rel='noreferrer'><img src={whatsapp} alt="" width={60} /></a>
    </div>
  )
}

export default Whatsapp