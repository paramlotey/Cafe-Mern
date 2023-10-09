import React from 'react'
import './choose.css'

import choose from '../../Images/Choose.jpg'
import choose1 from '../../Images/Coffee Mug.png'
import choose2 from '../../Images/Coffee Bean 2.jpeg'
import choose3 from '../../Images/Coffee Bean 3.png'


const Choose = () => {
    return (
        <section className='choose section'>
            <div className="choose-grid container grid">
                <div className="choose-content">
                    <h2 className='section-title title-left' data-title='Why to Choose Us'>
                        Taste Aromatic Coffee In Our Love Cafe
                    </h2>
                    <p className='choose-description'>
                        This coffee shop runs on love, laughter, and a whole lot of strong coffee. I was taken by the power that savoring a simple cup of coffee can have in connecting people and creating community. It’s amazing how the world begins to change through the eyes of a cup of coffee. You can’t have a decent food culture without a decent coffee culture: the two things grow up together.
                    </p>

                    <div className="choose-details grid">
                        <div className="choose-details-item">
                            <div className="choose-details-img-wrapper">
                                <img src={choose1} alt="" className='choose-details-img' />
                            </div>
                            <h3 className="choose-details-title">
                                Awesome Aroma
                            </h3>
                            <p className="choose-details-description">
                                Grinding coffee increases its aroma by increasing the surface area of the coffee to release more aromatic compounds.
                            </p>
                        </div>

                        <div className="choose-details-item">
                            <div className="choose-details-img-wrapper">
                                <img src={choose2} alt="" className='choose-details-img' />
                            </div>
                            <h3 className="choose-details-title">
                                Pure Grades
                            </h3>
                            <p className="choose-details-description">
                                Each coffee-growing region has its own method of grading the coffee beans.
                            </p>
                        </div>

                        <div className="choose-details-item">
                            <div className="choose-details-img-wrapper">
                                <img src={choose3} alt="" className='choose-details-img' />
                            </div>
                            <h3 className="choose-details-title">
                                Healthy Coffee
                            </h3>
                            <p className="choose-details-description">
                                Coffee does more than boost your energy. A few daily cups of coffee may also lower your risk of type 2 diabetes and depression, support weight management, and help you live a longer life.
                            </p>
                        </div>
                    </div>
                </div>

                <img src={choose} alt="" className="choose-img" />
            </div>
        </section>
    )
}

export default Choose
