import React from 'react'
import './about.css'
import { FiCheck } from 'react-icons/fi'

import aboutImg from '../../Images/About.jpg'
import Choose from '../choose/Choose'

const About = () => {
    return (
        <section className="about section" id="about">
            <div className='about-grid container-grid'>
                <div className='about-img-wrapper'>
                    <img src={aboutImg} alt="" className='about-img' />
                </div>

                <div className="about-content">
                    <h2 className='section-title title-left' data-title='About Us'>
                        Fresh Quality And Organic Tasty Coffee House for You
                    </h2>
                    <p className="about-description">
                        Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Coffee beans will always be the central focus of a great-tasting cup of coffee.  It contains caffeine and chlorogenic acid. The caffeine in coffee works by stimulating the central nervous system (CNS), heart, and muscles.
                    </p>

                    <div className="about-details grid">
                        <p className="about-details-description">
                            <FiCheck />
                            COFFEE SHOPS BOOST YOUR CREATIVITY
                        </p>

                        <p className="about-details-description">
                            <FiCheck />
                            YOU CAN DRINK COFFEE IN SPACE
                        </p>

                        <p className="about-details-description">
                            <FiCheck />
                            THE LAST SIP
                        </p>
                    </div>

                    <a href="/team" className="btn">Our Experts</a>
                </div>
            </div>
           <Choose />
        </section>
    )
}

export default About
