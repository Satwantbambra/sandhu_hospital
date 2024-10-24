import React, { useEffect, useRef, useState } from "react";
import { MdWifiCalling3, MdDoubleArrow } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  fetchAllServices,
  fetchSingleService,
} from "./commonApis/fetchServices";
import { ImSearch } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
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
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 100;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth", // Smooth scrolling
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
    <div>
      <div style={{ backgroundColor: "#F07F1A" }}>
        <div className="container top_small_header" style={{ backgroundColor: "#F07F1A" }}>
          <div className="row px-2">
            <div className="col-6">
              <Link
                to="https://www.facebook.com/profile.php?id=100063722508860"
                className="p-white-bold"
                target="_blank"
              >
                <i>
                  <FaFacebook />
                </i>
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=%2B919872620674&context=ARB6o1Ic__xCNYvIJiWLOIx2K9cFkuVCLcvYUiK89e-0vVD5cdUSUPrMzRCuxWiPCanb42fuoMWc5-qkntQHx5iO_895LRdYsTxfR158BIjwXjf7-T9UNJ6Xv_Kxk9Nh67k21an873kRxrnX5kNFW3Tdnw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFWAelleHRuA2FlbQIxMAABHVNQfjquyj1K2dZkp8ZA8-2U9tygqUn5-2Xy1uR74jJpa1nt6l_o4YKwfw_aem_T_4k8jbdHxKsRzpXQ8cjcg"
                className="p-white-bold px-2"
                target="_blank"
              >
                <i>
                  <IoLogoWhatsapp />
                </i>
              </Link>
            </div>
            <div className="col-6" style={{textAlign:'end'}}>
              <Link to="mailto:sandhuhospital@yahoo.in" className="p-white">
                <i className="px-2">
                  <IoMail />
                </i>
                sandhuhospital@yahoo.in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-not navbar-light bg-white py-0"
        ref={navbarRef}
      >
        <div
          className="container py-2"
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
              style={{ height: "auto", width: "130px", objectFit: "contain" }}
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
                      ? "active nav-link  dropdown-toggle"
                      : " nav-link  dropdown-toggle"
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
                            isActive ? "active dropdown-item" : "dropdown-item"
                          }
                          to={
                            service?.beautify === "1"
                              ? `/skin/${service.id}`
                              : `/service/${service.id}`
                          }
                        >
                          <MdDoubleArrow className="me-2" />{" "}
                          <span onClick={handleNavLinkClick}>
                            {service.name}
                          </span>
                          {/* Sub-services only display when hovered */}
                          {hoveredService === service.id &&
                            subServicesMap[service.id] &&
                            subServicesMap[service.id].length > 0 && (
                              <div className="sub-dropdown-menu">
                                <ul className="ps-0 mb-0 ">
                                  {subServicesMap[service.id]?.map(
                                    (subService) => (
                                      <li
                                        key={subService.id}
                                        className="dropdown-it "
                                      >
                                        <NavLink
                                          onClick={handleNavLinkClick}
                                          to={
                                            service?.beautify === "1"
                                              ? `/skin/${
                                                  service.id
                                                }#${subService.name.replace(
                                                  /\s+/g,
                                                  "-"
                                                )}`
                                              : `/service/${
                                                  service.id
                                                }#${subService.name.replace(
                                                  /\s+/g,
                                                  "-"
                                                )}`
                                          }
                                        >
                                          <MdDoubleArrow className="me-2" />
                                          {subService.name}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
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
                    isActive ? "nav-link  active" : "nav-link "
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
                    isActive ? "nav-link  active" : "nav-link "
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
                    isActive ? "nav-link  active" : "nav-link "
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
                    isActive ? "nav-link  active" : "nav-link "
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
                    isActive ? "nav-link  active" : "nav-link "
                  }
                  to="/search"
                >
                  <ImSearch className="mx-3" />
                </NavLink>
              </li>
              <li
                className="nav-item"
                style={{
                  background: "#000",
                  padding: "5px 10px",
                }}
              >
                <NavLink
                  onClick={handleNavLinkClick}
                  to="tel:+01823222674"
                  style={{ color: "var(--white)", fontSize: 12 }}
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
    </div>
  );
}
