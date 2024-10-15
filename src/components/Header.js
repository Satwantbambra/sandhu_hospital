import React, { useEffect, useRef, useState } from "react";
import { MdWifiCalling3, MdDoubleArrow } from "react-icons/md";
import { NavLink, useNavigate  } from "react-router-dom";
import {
  fetchAllServices,
  fetchSingleService,
} from "./commonApis/fetchServices";

export default function Header(props) {
  const navbarRef = useRef(null);
  const navbarMobileRef = useRef(null);
  const navigate = useNavigate();
  const handleNavLinkClick = (event) => {
    if (navbarMobileRef.current) {
      navbarMobileRef.current.classList.remove("show"); // Remove the show class
        // Use window.location.href for hash-based navigation
        const link = event.currentTarget.getAttribute("href");

        // Ensure the link is valid before proceeding
        if (typeof link === 'string' && link.startsWith("#")) {
          window.location.href = link; // Navigate to the anchor link
        } else {
          navigate(link); // Use React Router's navigate for other links
        }
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

    // Check for the hash to scroll to the corresponding element
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove '#' from the hash
      if (element) {
        // Calculate the top position of the element
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        // Calculate the scroll position with the desired offset (200 pixels)
        const offsetPosition = elementPosition - 120;

        // Scroll to the adjusted position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // Smooth scrolling
        });
      }
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

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          className="collapse navbar-collapse mt-3 mt-lg-0"
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
                        subServicesMap[service.id] && (
                          <ul className="sub-dropdown-menu">
                            {subServicesMap[service.id]?.map((subService) => (
                              <li
                                key={subService.id}
                                className="dropdown-item p-black"
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
                to="/search"
              >
                Search
              </NavLink>
            </li>{" "}
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
