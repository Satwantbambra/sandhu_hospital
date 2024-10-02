import React, { useEffect, useRef } from 'react';
import { MdWifiCalling3 } from "react-icons/md";
export default function Header() {
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Ensure navbarRef.current is not null
            if (!navbarRef.current) return;

            const scrollPosition = window.scrollY;

            // Toggle classes based on scroll position
            if (scrollPosition > 100) {
                navbarRef.current.classList.add('fixed-top', 'trans-bg');
                navbarRef.current.classList.remove('navbar-not');
            } else {
                navbarRef.current.classList.remove('fixed-top', 'trans-bg');
                navbarRef.current.classList.add('navbar-not');
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check in case the user is already scrolled
        if (navbarRef.current) handleScroll();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-not" id="navbar-sticky" ref={navbarRef}>
                <div className="container-fluid py-3">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <i className="fa-solid fa-house-medical section-heading-white me-2" style={{color: 'var(--pink)'}}></i>
                        <h2 className="section-heading-white my-0">
                            Sandhu <span style={{color: 'var(--pink)'}}> hospital</span> 
                        </h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills align-items-lg-center">
                            <li className="nav-item">
                                <a className="nav-link  p-white-bold" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  p-white-bold" href="#about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  p-white-bold" href="#who">Who we cure</a>
                            </li>
                            <li className="nav-item" style={{background: 'linear-gradient(45deg, #313f70, #953986)', borderRadius: 6,padding:10 }}> 
                                <a className="nav-link p-white-bold " href="tel:+01823222674" style={{color: 'var(--white' }}> 
                                <MdWifiCalling3 className='sub-heading-white'  style={{marginRight: 6}}/>Call Us : 01823222674
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
