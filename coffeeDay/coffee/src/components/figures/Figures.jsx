import React from 'react'
import './figures.css'

import figure from '../../Images/Coffee Shop.jpeg'
import figure1 from '../../Images/Experience.jpeg'
import figure2 from '../../Images/Coffee Cup.png'
import figure3 from '../../Images/Chef.png'

const Figures = () => {
  return (
    <section className="figures section">
      <div className="figures-grid container grid">
        <div className="figures-item">
          <div className="figures-img-wrapper">
            <img src={figure} alt="" className='figures-img' />
          </div>

          <div>
            <p className='figures-no'>
              1000
            </p>
            <h3 className='figures-title'>
              Total Branches
            </h3>
          </div>
        </div>

        <div className="figures-item">
          <div className="figures-img-wrapper">
            <img src={figure2} alt="" className='figures-img' />
          </div>

          <div>
            <p className='figures-no'>
              350
            </p>
            <h3 className='figures-title'>
              Happy Customers
            </h3>
          </div>
        </div>

        <div className="figures-item">
          <div className="figures-img-wrapper">
            <img src={figure3} alt="" className='figures-img' />
          </div>

          <div>
            <p className='figures-no'>
              150
            </p>
            <h3 className='figures-title'>
              Professional Chefs
            </h3>
          </div>
        </div>

        <div className="figures-item">
          <div className="figures-img-wrapper">
            <img src={figure1} alt="" className='figures-img' />
          </div>

          <div>
            <p className='figures-no'>
              50
            </p>
            <h3 className='figures-title'>
              Years Of Experience
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Figures
