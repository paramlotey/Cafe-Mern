import React from 'react'
import './footer.css'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaCaretRight } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'

import logo from '../../Images/Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid container grid">
        <div className="footer-content">
          <a href="/" className="footer-logo">
            <img src={logo} alt="" className="footer-logo-img" />
          </a>

          <p className="footer-description">
            There are both hot and cold methods of extracting flavour and aroma from ground coffee, and the caffeine content varies with the variety of bean and method of brewing. In the manufacture of instant coffee, a liquid concentration of coffee prepared with hot water is dehydrated. Coffee consumption has been associated with various health benefits and health risks.
          </p>

          <ul className="footer-content">
            <li className="footer-contact-item">
              <AiOutlinePhone className='icon' /> +91 8395712584
            </li>

            <li className="footer-contact-item">
              <MdOutlineLocationOn className='icon' /> F- Block, B.R.S. Nagar, Ludhiana
            </li>

            <li className="footer-contact-item">
              <FaRegEnvelope className='icon' /> lovecafe@gmail.com
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#about" className="footer-link">
                <FaCaretRight className='icon' /> About Us
              </a>
            </li>

            <li>
              <a href="#menu" className="footer-link">
                <FaCaretRight className='icon' /> Menu
              </a>
            </li>

            <li>
              <a href="#features" className="footer-link">
                <FaCaretRight className='icon' /> Features
              </a>
            </li>

            <li>
              <a href="#gallery" className="footer-link">
                <FaCaretRight className='icon' /> Gallery
              </a>
            </li>

            <li>
              <a href="#team" className="footer-link">
                <FaCaretRight className='icon' /> Team
              </a>
            </li>

            <li>
              <a href="#review" className="footer-link">
                <FaCaretRight className='icon' /> Reviews
              </a>
            </li>
          </ul>
        </div>

        <div className='footer-content'>
          <h3 className="footer-title">Opening Hours</h3>

          <div className="footer-opening-hour">
            <ul className="opening-hour-list">
              <li className="opening-hour-item">
                <span>Monday:</span>
                <span>9:00AM -6:00PM</span>
              </li>

              <li className="opening-hour-item">
                <span>Tuesday:</span>
                <span>9:00AM -6:00PM</span>
              </li>

              <li className="opening-hour-item">
                <span>Wednesday:</span>
                <span>9:00AM -6:00PM</span>
              </li>

              <li className="opening-hour-item">
                <span>Thursday:</span>
                <span>9:00AM -6:00PM</span>
              </li>

              <li className="opening-hour-item">
                <span>Friday:</span>
                <span>9:00AM -6:00PM</span>
              </li>

              <li className="opening-hour-item">
                <span>Saturday:</span>
                <span>9:00AM -6:00PM</span>
              </li>

              <li className="opening-hour-item">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-content">
          <h3 className="footer-title">Newletter</h3>
          <p className="footer-description">
            Please Stay Tune For New Updates!
          </p>

          <form action="" className="subscribe-form">
            <input type="text" placeholder='Your Email' className="form-input subscribe-input" />

            <button className='btn btn-flex subscribe-btn'>
              <FaRegEnvelope /> Subscribe Now
            </button>
          </form>

          <div className="footer-socials">
            <h3 className="footer-social-follow">Follow Us:</h3>
            <div className="footer-social-links">
              <a href="/" className="footer-social-link">
                <FaFacebookF />
              </a>

              <a href="/" className="footer-social-link">
                <FaTwitter />
              </a>

              <a href="/" className="footer-social-link">
                <FaLinkedinIn />
              </a>

              <a href="/" className="footer-social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="copyright-text">
        &copy; Copyright 2023 <span>The Love Cafe</span> All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
