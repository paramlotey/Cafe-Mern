import React, { useEffect, useState } from 'react'
import './header.css'
import { links } from '../../Data';
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import logo from '../../Images/Logo.png';

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);

    const changeHeader = () => {
        if (window.scrollY >= 80) {
            setScrollHeader(true)
        } else {
            setScrollHeader(false);
        }
    };

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeHeader);
    }, []);


    return (
        // <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
        //     <nav className="nav-container">
        //         <Link to="/" onClick={scrollTop} className="nav-logo">
        //             <img src={logo} alt="" className="nav-logo-img" />
        //         </Link>

        //         <div className={`${showMenu ? 'show-menu' : ''} nav-menu`}>
        //             <ul className="nav-list">
        //                 {links.map(({ name, path }, index) => {
        //                     return (
        //                         <li className="nav-item" key={index}>
        //                             <Link spy={true} smooth={true} offset={-60} hashSpy={true} duration={500} to={path} className="nav-link" onClick={() => setShowMenu(!showMenu)}>{name}</Link>
        //                         </li>
        //                     )
        //                 })}
        //             </ul>
        //         </div>

        //         {/* <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>                    
        //             <FaStream />
        //             </div> */}
        //     </nav>
        // </header>

        <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
            <nav className="navbar navbar-expand-lg bg-white" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Link to="/" onClick={scrollTop} className="nav-logo">
                            <img src={logo} alt="" className="logo-img" />
                        </Link>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link" href="/features">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link" href="/menu">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link" href="/gallery">
                                    Gallary
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link" href="/team">
                                    Chef
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link' href="/reserve">
                                    Reservation
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link" href="/reviews">
                                    Reviews
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="/login">
                                    Login
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="/register">
                                    Register
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
        </header >
    )
}

export default Header