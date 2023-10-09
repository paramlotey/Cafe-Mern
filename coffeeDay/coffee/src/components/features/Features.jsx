import React from 'react'
import './features.css'
import { features } from '../../Data'

import shape from '../../Images/Shape 1.png'

const Features = () => {
    return (
        <section className='features section' id='features'>
            <h2 className='section-title' data-title='Features'>
                Best Features For You
            </h2>

            <div className="features-grid container-grid">
                {features.map(({ img, title, description }, index) => {
                    return (
                        <div className="features-item" key={index}>
                            <img src={img} alt="" className='feature-img' />

                            <h3 className="features-title">
                                {title}
                            </h3>
                            <p className='feature-description'>
                                {description}
                            </p>
                            <img src={shape} alt='' className='feature-shape' />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Features
