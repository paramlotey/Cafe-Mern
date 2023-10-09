import React from 'react'
import './gallery.css'
import { gallery } from '../../Data'
import { BsPlusCircle } from 'react-icons/bs'

const Gallery = () => {
    return (
        <section className="gallery section" id="gallery">
            <h2 className='section-title' data-title='Gallary'>
                Our Photo Gallary
            </h2>

            <div className="gallery-grid container grid">
                {gallery.map(({ img, title }, index) => {
                    return (
                        <div className='gallery-item' key={index}>
                            <img src={img} alt="" className='gallery-img' />
                            <a href="/" className='gallery-icon'>
                                <BsPlusCircle />
                            </a>

                            <h3 className="gallery-title">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Gallery
