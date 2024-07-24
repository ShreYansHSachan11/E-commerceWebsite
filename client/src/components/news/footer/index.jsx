import React from 'react'
import './footer.css'
import fb from './images/fb.png'
import insta from './images/insta.png'
const footer = () => {
  return (
    <footer>
    <div className="footernav mg-130">
      <div className="footernav-left">
      <h3><span>Guardians</span> </h3>
      </div>
      
      <div className="footernav-center">
          <ul>
          <li><a href="/">HOME</a></li>
                <li><a href="/chat">CHAT</a></li>
                <li><a href="/donate">DONATE</a></li>
                <li><a href="/map">MAP</a></li>
                <li><a href="/training">TRAINING</a></li>
                <li><a href="/services">SERVICES</a></li>
                
          </ul>
      </div>
      
      <div className="footernav-right">
          <div className="fb">
            <img src={fb} alt="" srcset="" />
          </div>
          <div className="insta">
            <img src={insta} alt="" srcset="" />
          </div>
      </div>
  </div>
  <hr className='mg-13'/>
</footer>
)
  
}

export default footer