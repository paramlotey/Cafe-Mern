import React from 'react'
import './team.css'

import chef from '../../Images/Team 1.jpeg'
import chef1 from '../../Images/Team 2.jpeg'
import chef2 from '../../Images/Team 3.jpg'
import chef3 from '../../Images/Team 4.jpg'

import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Team = () => {
    return (
        <section className='team section' id='team'>
            <h2 className="section-title" data-title='Our Team'>
                Meet Our Experts
            </h2>

            <div className="team-grid grid container">
                <div className="team-item">
                    <img src={chef} alt="" className='team-img' />

                    <div className="team-data">
                        <h3 className="team-title">Stella</h3>
                        <p className="team-position">Senior Chef</p>
                    </div>

                    <div className="team-socials">
                        <a href="/" className="team-social-link">
                            <FaFacebook />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaLinkedin />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="team-item">
                    <img src={chef1} alt="" className='team-img' />

                    <div className="team-data">
                        <h3 className="team-title">Dhruv</h3>
                        <p className="team-position">Senior Chef</p>
                    </div>

                    <div className="team-socials">
                        <a href="/" className="team-social-link">
                            <FaFacebook />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaLinkedin />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="team-item">
                    <img src={chef2} alt="" className='team-img' />

                    <div className="team-data">
                        <h3 className="team-title">Ranbir</h3>
                        <p className="team-position">Senior Chef</p>
                    </div>

                    <div className="team-socials">
                        <a href="/" className="team-social-link">
                            <FaFacebook />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaLinkedin />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="team-item">
                    <img src={chef3} alt="" className='team-img' />

                    <div className="team-data">
                        <h3 className="team-title">Aaliyah</h3>
                        <p className="team-position">Senior Chef</p>
                    </div>

                    <div className="team-socials">
                        <a href="/" className="team-social-link">
                            <FaFacebook />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaLinkedin />
                        </a>

                        <a href="/" className="team-social-link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
