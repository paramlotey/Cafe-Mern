import React from 'react'
import './home.css';

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className="home-container container">
                <div className="home-content">
                    <span className='home-subtitle'>
                        Welcome To The Love Cafe!
                    </span>
                    <h1 className='home-title'>
                        Discover Amazing Coffee and Boost Yourself
                    </h1>
                    <p className='home-description'>
                        Coffee is one of the world’s most popular beverages. Coffee is more than a beverage, however, it is a memory, an anticipation, a lifetime of consoling moments of the modest pleasure woven in to our lives. We also serves variety in coffee and new innovation in coffee.
                    </p>

                    <div className="home-btns">
                        <a href="/menu" className="btn">
                            Check Menu
                        </a>

                        <a href="/reserve" className="btn home-btn">
                            Book Table
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
