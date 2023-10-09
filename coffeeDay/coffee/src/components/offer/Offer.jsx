import React from 'react'
import './offer.css'
import { offer } from '../../Data'

const Offer = () => {
    return (
        <section className='offer section' id='offer'>
            <h2 className='offer section-title'>
                Special Offers
            </h2>

            

            <div className='offer-grid container grid'>
                {offer.map(({ img, title, discount, description }, index) => {
                    return (
                        <div className="offer-item" key={index}>
                            <img src={img} alt="" className='offer-img' />
                            <div className='offer-items'>
                                <h3 className="offer-title">{title}</h3>
                                <span className="offer-discount">{discount}</span>
                                <p className="offer-description">{description}</p>
                                <a href="/" className='btn'>Order Now</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Offer
