import React from 'react'
import './review.css'
import { testimonials } from '../../Data'

import { FaStar } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'

const Review = () => {
    return (
        <section className="review container section" id='reviews'>
            <h2 className="section-title" data-title='Reviews'>
                Feedback
            </h2>

            <div className='review-grid container grid'>
                {testimonials.map(({ img, title, service, description }, index) => {
                    return (
                        <div className="review-item" key={index}>
                            <div className="review-quote">
                                <p className="review-description">{description}</p>
                                <VscTriangleDown className='review-icon' />
                            </div>

                            <div className="review-content">
                                <img src={img} alt="" className="review-img" />
                            </div>

                            <div>
                                <h3 className="review-title">{title}</h3>
                                <p className="review-service">{service}</p>
                            </div>

                            <div className="review-rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Review
