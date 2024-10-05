// src/components/Header.js
import React, { useEffect, useRef } from 'react';
import { MdWifiCalling3 } from "react-icons/md";


export default function Header() {
    const navbarRef = useRef(null);
    const offset = 130; // Set your desired offset value (adjust this value as needed)

    useEffect(() => {
        const handleScroll = () => {
            if (!navbarRef.current) return;

            const sections = document.querySelectorAll('section'); // Select all sections
            const scrollPosition = window.scrollY;

            // Check each section to see if it's in the viewport
            sections.forEach(section => {
                const sectionId = section.getAttribute('id');
                const navLink = navbarRef.current.querySelector(`a[href="#${sectionId}"]`);

                if (navLink) {
                    const sectionTop = section.offsetTop - offset; // Adjust the section top by the offset
                    const sectionHeight = section.offsetHeight;

                    // Check if section is in viewport with offset
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLink.classList.add('active'); // Add active class
                    } else {
                        navLink.classList.remove('active'); // Remove active class
                    }
                }
            });

            // Sticky Navbar
            if (scrollPosition > 100) {
                navbarRef.current.classList.add('fixed-top', 'trans-bg');
               
            } else {
                navbarRef.current.classList.remove('fixed-top', 'trans-bg');
              
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
       
            <nav className="navbar navbar-expand-lg navbar-not  navbar-dark bg-dark py-0" id="navbar-sticky"
             ref={navbarRef}
             >
                <div className="container-fluid py-3  " style={{position:"relative", zIndex:3}}>
                    <a className="navbar-brand d-flex align-items-center" href="/" style={{position:"relative",zIndex:3}}>
                        <i className="fa-solid fa-house-medical section-heading-white me-2" style={{color: 'var(--pink)'}}></i>
                        <h2 className="section-heading-white my-0">
                            Sandhu <span style={{color: 'var(--pink)'}}> hospital</span> 
                        </h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
                 </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position:"relative",zIndex:3}}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills align-items-lg-center">
                            <li className="nav-item">
                                <a className="nav-link p-white-bold" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-white-bold" href="#about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-white-bold" href="#who">Who we cure</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-white-bold" href="#gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-white-bold" href="#testimonial"> Testimonials</a>
                            </li>

                            <li className="nav-item" style={{background: 'linear-gradient(45deg, #313f70, #953986)', borderRadius: 6, padding: 10 }}> 
                                <a className="nav-link p-white-bold" href="tel:+01823222674" style={{color: 'var(--white)' }}> 
                                    <MdWifiCalling3 className='sub-heading-white' style={{marginRight: 6}}/>Call Us : 01823222674


                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
}
