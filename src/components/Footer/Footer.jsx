import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1 className='logo'>Hyder's Delight</h1>
            <p>Discover a world of flavor at Hyder's Delight, where every dish is crafted with passion and tradition. Join us on a culinary journey that transcends ordinary dining, bringing the finest tastes to your table.</p>
            <div className="footer-social-icons">
                <a href="https://web.facebook.com/Lt.Hyder" target='_blank'><img src={assets.facebook_icon} alt="Facebook Icon" /></a>
                <a href="https://twitter.com/LegitDrops" target='_blank'><img src={assets.twitter_icon} alt="Twitter Icon" /></a>
                <a href="https://www.linkedin.com/in/zeeshan-hyder-736a0a247/" target='_blank'><img src={assets.linkedin_icon} alt="LinkedIn Icon" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+923113189066</li>
                <li>zeeshan.bscsses21@iba-suk.edu.pk</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Hyder'sDelight.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
