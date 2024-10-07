// src/components/Header.js
import React, { useEffect, useRef } from 'react';
import { MdWifiCalling3, MdDoubleArrow } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!navbarRef.current) return;
            const scrollPosition = window.scrollY;
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
        <nav className="navbar navbar-expand-lg navbar-not navbar-dark bg-dark py-0" ref={navbarRef}>
            <div className="container-fluid py-3" style={{position: "relative", zIndex: 3}}>
                <NavLink className="navbar-brand d-flex align-items-center" to="/" style={{position: "relative", zIndex: 3}}>
                    <i className="fa-solid fa-house-medical section-heading-white me-2" style={{color: 'var(--pink)'}}></i>
                    <h2 className="section-heading-white my-0">
                        Sandhu <span style={{color: 'var(--pink)'}}>Hospital</span> 
                    </h2>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position: "relative", zIndex: 3}}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills align-items-lg-center">
                        {/* Dropdown for Services */}
                        <li className="nav-item dropdown">
                            <NavLink
                                to="/service"
                                className={({ isActive }) => (isActive ? 'active nav-link p-white-bold dropdown-toggle' : 'nav-link p-white-bold dropdown-toggle')}
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </NavLink>
                            <ul className="dropdown-menu animate__animated animate__fadeInUp">
                                <li>
                                    <NavLink className="dropdown-item p-black" to="/service">
                                        <MdDoubleArrow className='me-2'/> De-addiction
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item p-black" to="/">
                                        <MdDoubleArrow className='me-2'/> Psychiatry
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item p-black" to="/service">
                                        <MdDoubleArrow className='me-2'/> Dermatology
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item p-black" to="/service">
                                        <MdDoubleArrow className='me-2'/> Skin (Dermatology)
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item p-black" to="/service">
                                        <MdDoubleArrow className='me-2'/> Medicine & Chest Diseases
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* Other Nav Links */}
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'nav-link p-white-bold active' : 'nav-link p-white-bold')} to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'nav-link p-white-bold active' : 'nav-link p-white-bold')} to="/team">Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? ' nav-link p-white-bold active' : 'nav-link p-white-bold')} to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'nav-link p-white-bold active' : 'nav-link p-white-bold')} to="/search">Search</NavLink>
                        </li>

                        {/* Call Us Button */}
                        <li className="nav-item" style={{background: 'linear-gradient(45deg, #313f70, #953986)', borderRadius: 6, padding: 10 }}> 
                            <NavLink className="nav-link p-white-bold" to="tel:+01823222674" style={{color: 'var(--white)' }}> 
                                <MdWifiCalling3 className='sub-heading-white' style={{marginRight: 6}}/> Call Us: 01823222674
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
