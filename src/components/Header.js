// src/components/Header.js
import React, { useEffect, useRef } from 'react';
import { MdWifiCalling3 } from "react-icons/md";
import { Link } from 'react-router-dom';


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
                const navLink = navbarRef.current.querySelector(`a[to="#${sectionId}"]`);

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
                    <Link className="navbar-brand d-flex align-items-center" to="/" style={{position:"relative",zIndex:3}}>
                        <i className="fa-solid fa-house-medical section-heading-white me-2" style={{color: 'var(--pink)'}}></i>
                        <h2 className="section-heading-white my-0">
                            Sandhu <span style={{color: 'var(--pink)'}}> hospital</span> 
                        </h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
                 </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position:"relative",zIndex:3}}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills align-items-lg-center">
                            <li className="nav-item">
                              
                                <div class="dropdown">
                          <Link data-mdb-button-init
                                data-mdb-ripple-init data-mdb-dropdown-init class="nav-link p-white-bold dropdown-toggle" 
                                 type="button"  id="dropdownMenuButton"  data-mdb-toggle="dropdown" aria-expanded="false">
                                Services
                              </Link>
                  <ul class="dropdown-menu animate__animated animate__fadeInUp" aria-labelledby="dropdownMenuButton">
                     <li><Link class="dropdown-item p-black" to="#">De-addiction</Link></li>
                          <li><Link class="dropdown-item p-black" to="#">Psychiatry</Link></li>
                      <li><Link class="dropdown-item p-black" to="#">Dermatology</Link></li>
                      <li><Link class="dropdown-item p-black" to="#">Skin(Dermatology)</Link></li>
                      </ul>
                            </div>
                            
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-white-bold" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-white-bold" to="/">Who we cure</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-white-bold" to="/">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-white-bold" to="/"> Testimonials</Link>
                            </li>

                            <li className="nav-item" style={{background: 'linear-gradient(45deg, #313f70, #953986)', borderRadius: 6, padding: 10 }}> 
                                <Link className="nav-link p-white-bold" to="tel:+01823222674" style={{color: 'var(--white)' }}> 
                                    <MdWifiCalling3 className='sub-heading-white' style={{marginRight: 6}}/>Call Us : 01823222674

                                </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
}
