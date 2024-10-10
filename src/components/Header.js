import React, { useEffect, useRef, useState } from "react";
import { MdWifiCalling3, MdDoubleArrow } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { fetchAllServices } from "./commonApis/fetchServices";


export default function Header(props) {
  const navbarRef = useRef(null);
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const services = await fetchAllServices();
    setServices(services);
  };

  useEffect(() => {
    fetchServices();
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const scrollPosition = window.scrollY;
      // Sticky Navbar
      if (scrollPosition > 100) {
        navbarRef.current.classList.add("fixed-top", "trans-bg");
      } else {
        navbarRef.current.classList.remove("fixed-top", "trans-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          className="navbar-brand d-flex align-items-center py-0"
          to="/"
          style={{ position: "relative", zIndex: 3 }}
        >
          <img
            src={props.logo}
            alt="sandhu_logo"
            style={{ height: 50, width: "100%" }}
          />
        </NavLink>

        <button
          className="navbar-toggler"
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
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ position: "relative", zIndex: 3 }}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills align-items-lg-center">
            {/* Dropdown for Services */}
            <li className="nav-item dropdown">
              <NavLink
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
                    <li key={service.id}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "active dropdown-item p-black"
                            : "dropdown-item p-black"
                        }
                        to={service?.beautify === "1" ? `/skin/${service.id}` :`/service/${service.id}`}

                      >
                        <MdDoubleArrow className="me-2" /> {service.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
            {/* Other Nav Links */}
            <li className="nav-item">
              <NavLink
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
