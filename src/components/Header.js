import React, { useEffect, useRef, useState } from "react";
import { MdWifiCalling3, MdDoubleArrow } from "react-icons/md";
import { NavLink, useNavigate  } from "react-router-dom";
import {
  fetchAllServices,
  fetchSingleService,
} from "./commonApis/fetchServices";
import { ImSearch } from "react-icons/im";
export default function Header(props) {
  const navbarRef = useRef(null);
  const navbarMobileRef = useRef(null);
  const navigate = useNavigate();
  const handleNavLinkClick = (event) => {
    if (navbarMobileRef.current) {
      navbarMobileRef.current.classList.remove("show"); // Remove the show class
    }

  };
  
  const [services, setServices] = useState([]);
  const [hoveredService, setHoveredService] = useState(null); // To track hovered service
  const [subServicesMap, setSubServicesMap] = useState({}); // Object to store sub-services for each service
  const fetchServices = async () => {
    const services = await fetchAllServices();
    setServices(services);
  };

  // Fetch sub-services for a specific service
  const fetchSubServicesForService = async (serviceId) => {
    if (!subServicesMap[serviceId]) {
      const subServices = await fetchSingleService(serviceId);
      setSubServicesMap((prevState) => ({
        ...prevState,
        [serviceId]: subServices?.sub_services || [],
      }));
    }
  };

  useEffect(() => {
    // Fetch services initially
    fetchServices();

  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash.substring(1)); // Remove '#' from the hash
      if (element) {
        // Calculate the top position of the element
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // Smooth scrolling
        });
      } else {
      }
    }, 300); // Adjust the delay if necessary
  } else {
  }

    const handleScroll = () => {
      if (!navbarRef.current) return;
      const scrollPosition = window.scrollY;
      
      // Sticky Navbar Logic
      if (scrollPosition > 100) {
        navbarRef.current.classList.add("fixed-top", "trans-bg");
      } else {
        navbarRef.current.classList.remove("fixed-top", "trans-bg");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

  }, [window.location.hash]); // Dependency on hash changes

  return (
    <nav
      className="navbar navbar-expand-lg navbar-not navbar-dark bg-dark py-0"
      ref={navbarRef}
    >
      <div
        className="container py-3"
        style={{ position: "relative", zIndex: 3 }}
      >
        <NavLink
          onClick={handleNavLinkClick}
          className="navbar-brand d-flex align-items-center py-0"
          to="/"
          style={{ position: "relative", zIndex: 3 }}
        >
          <img
            src={props.logo}
            alt="sandhu_logo"
            style={{ height: 50, width: "120px",objectFit:"contain" }}
          />
        </NavLink>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={navbarMobileRef}
          className="collapse navbar-collapse mt-3 mt-lg-0 pt-2 pt-lg-0"
          id="navbarSupportedContent"
          style={{ position: "relative", zIndex: 3 }}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills align-items-lg-center">
            {/* Dropdown for Services */}
            <li
              className="nav-item dropdown"
              onMouseLeave={() => {
                setHoveredService(null);
              }}
            >
              <NavLink
                onClick={handleNavLinkClick}
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link p-white-bold dropdown-toggle"
                    : " nav-link p-white-bold dropdown-toggle"
                }
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </NavLink>

              <ul className="dropdown-menu animate__animated animate__fadeInUp">
                {services.map((service) => {
                  return (
                    <li
                      onMouseEnter={() => {
                        setHoveredService(service.id);
                        fetchSubServicesForService(service.id);
                      }}
                      key={service.id}
                    >
                      <NavLink
                      
                        className={({ isActive }) =>
                          isActive
                            ? "active dropdown-item p-black"
                            : "dropdown-item p-black"
                        }
                        to={
                          service?.beautify === "1"
                            ? `/skin/${service.id}`
                            : `/service/${service.id}`
                        }
                      >
                        <MdDoubleArrow className="me-2" /> <span   onClick={handleNavLinkClick}>{service.name}</span>
                      {/* Sub-services only display when hovered */}
                      {hoveredService === service.id &&
                        subServicesMap[service.id] && subServicesMap[service.id].length > 0 && (
                          <div className="sub-dropdown-menu">

                          <ul className="ps-0 mb-0 "  >
                            {subServicesMap[service.id]?.map((subService) => (
                              <li
                              key={subService.id}
                              className="dropdown-it p-black"
                              >
                                <NavLink
                                
                                onClick={handleNavLinkClick}
                                to={
                                  service?.beautify === "1"
                                      ? `/skin/${service.id}#${subService.name.replace(/\s+/g, '-')}`
                                      : `/service/${service.id}#${subService.name.replace(/\s+/g, '-')}`
                                    }
                                    >
                                  <MdDoubleArrow className="me-2" />
                                  {subService.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                            </div>
                        )}
                      </NavLink>
                    

                    </li>
                  );
                })}
              </ul>
            </li>
            {/* Other Nav Links */}
            <li className="nav-item">
              <NavLink
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link p-white-bold active"
                    : "nav-link p-white-bold"
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link p-white-bold active"
                    : "nav-link p-white-bold"
                }
                to="/team"
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link p-white-bold active"
                    : "nav-link p-white-bold"
                }
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
          
            <li className="nav-item">
              <NavLink
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link p-white-bold active"
                    : "nav-link p-white-bold"
                }
                to="/contact_us"
              >
                Contact us
              </NavLink>
            </li>
            {/* Call Us Button */}
            <li className="nav-item">
              <NavLink
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link p-white-bold active"
                    : "nav-link p-white-bold"
                }
                to="/search"
              >
             <ImSearch className="mx-3"/>
              </NavLink>
            </li>{" "}
            <li
              className="nav-item"
              style={{
                background: "linear-gradient(45deg, #313f70, #953986)",
                borderRadius: 6,
                padding: 10,
              }}
            >
              <NavLink
                onClick={handleNavLinkClick}
                className="nav-link p-white-bold"
                to="tel:+01823222674"
                style={{ color: "var(--white)" }}
              >
                <MdWifiCalling3
                  className="sub-heading-white"
                  style={{ marginRight: 6 }}
                />{" "}
                Call Us: 01823222674
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
