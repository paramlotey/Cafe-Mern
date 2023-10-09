import React from 'react'
import './menu.css'
import { menu } from '../../Data'
import Offer from '../offer/Offer'
import Figures from '../figures/Figures'

const Menu = () => {
    return (
        <section className='menu section' id='menu'>
            <h2 className='section-title' data-title='Our Menu'>
                Let's Check The Menu
            </h2>

            <div className="menu-grid container grid">
                {menu.map(({ img, title, description, price }, index) => {
                    return (
                        <div className='menu-item grid' key={index}>
                            <div className="menu-img-wrapper">
                                <img src={img} alt="" className="menu-img" />
                            </div>

                            <div className="menu-data">
                                <div>
                                    <h3 className="menu-title">{title}</h3>
                                    <p className="menu-description">{description}</p>
                                </div>

                                <span className='menu-price'>Rs.{price}</span>
                            </div>
                        </div>
                    )
                })}
                <div className="home-btns">
                    <a href="/reserve" className="btn home-btn">
                        Book Table
                    </a>
                </div>
            </div>
            <Offer/>
            <Figures/>
        </section>
    )
}

export default Menu
