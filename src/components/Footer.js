import React, { useEffect, useState } from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { fetchAllServices } from "./commonApis/fetchServices";

export default function Footer() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const services = await fetchAllServices();
      setServices(services);
    };
    fetchServices();
  }, []);
  return (
    <div>
      <footer className="space">
        <div className="container">
          <div className="d-flex align-items-center justify-content-lg-center mb-3 ">
            <i
              className="fa-solid fa-house-medical banner-white me-1"
              style={{ color: "var(--pink)" }}
            ></i>
            <h2 className="banner-white my-0">
              Sandhu <span style={{ color: "var(--pink)" }}> hospital</span> ,
              Nawanshahar
            </h2>
          </div>
          <hr style={{ border: "1px solid #fff" }} />
          <div className="row py-lg-4">
            <div className="col-lg-3 mb-3 mb-lg-0">
              <h3 className="sub-heading-white mt-0 mb-2">
                Your Wellness, Our Priority
              </h3>
              <p className="p-white my-0" style={{ textAlign: "left" }}>
                Sandhu Hospital, Nawanshahar, is a leading MultiSpeciality
                Hospital specializing in Brain Diseases, De-addiction, Skin,
                Medicine, and Surgery.
              </p>

              <ul className="footer-ul mt-3">
                <li>
                  <Link to="#" className="p-white">
                    {" "}
                    <i>
                      <FaLocationDot />
                    </i>
                    CHANDIGARH ROAD, Near Barnala Gate, NAWANSHAHAR (Old address
                    Saloh Rd, Nsr) , Nawanshahr Doaba, India, Punjab region
                  </Link>
                </li>

                <li>
                  <Link to="tel:09872620674" className="p-white">
                    <i>
                      {" "}
                      <MdWifiCalling3 />
                    </i>{" "}
                    09872620674
                  </Link>
                </li>
                <li>
                  <Link to="mailto:sandhuhospital@yahoo.in" className="p-white">
                    <i>
                      <IoMail />
                    </i>
                    sandhuhospital@yahoo.in
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 mb-3 mb-lg-0 d-flex align-items-start justify-content-lg-center ">
                  <div>
                    <h3 className="sub-heading-white mt-0 mb-2">
                      Discover More
                    </h3>
                    <ul className="footer-ul">
                      <li>
                        <Link to="/" className="p-white-bold">
                          <i>
                            <FaArrowCircleRight />
                          </i>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="p-white-bold">
                          <i>
                            <FaArrowCircleRight />
                          </i>
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link to="/team" className="p-white-bold">
                          <i>
                            <FaArrowCircleRight />
                          </i>
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link to="/search" className="p-white-bold">
                          <i>
                            <FaArrowCircleRight />
                          </i>
                          Search
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery" className="p-white-bold">
                          <i>
                            <FaArrowCircleRight />
                          </i>
                          Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0 d-flex align-items-start justify-content-lg-center ">
                  <div>
                    <h3 className="sub-heading-white mt-0 mb-2">
                      Specialized Care
                    </h3>

                    <ul className="footer-ul">
                      {services?.map((service, index) => {
                        return (
                          <li key={index}>
                            <Link   to={
                                  service?.beautify === "1"
                                      ? `/skin/${service.id}#${service.name.replace(/\s+/g, '-')}`
                                      : `/service/${service.id}#${service.name.replace(/\s+/g, '-')}`
                                    } className="p-white-bold">
                              <i>
                                <FaArrowCircleRight />
                              </i>{" "}
                              {service?.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div>
                    <h3 className="sub-heading-white mt-0 mb-2">
                      Join the Conversation
                    </h3>

                    <ul className="footer-ul">
                      <li className="d-flex mb-1">
                        <Link
                          to="https://www.facebook.com/profile.php?id=100063722508860"
                          className="p-white-bold"
                          target="_blank"
                        >
                          <i>
                            <FaFacebook />
                          </i>
                          Facebook
                        </Link>
                      </li>
                      <li className="d-flex mb-1">
                        <Link
                          to="https://api.whatsapp.com/send?phone=%2B919872620674&context=ARB6o1Ic__xCNYvIJiWLOIx2K9cFkuVCLcvYUiK89e-0vVD5cdUSUPrMzRCuxWiPCanb42fuoMWc5-qkntQHx5iO_895LRdYsTxfR158BIjwXjf7-T9UNJ6Xv_Kxk9Nh67k21an873kRxrnX5kNFW3Tdnw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFWAelleHRuA2FlbQIxMAABHVNQfjquyj1K2dZkp8ZA8-2U9tygqUn5-2Xy1uR74jJpa1nt6l_o4YKwfw_aem_T_4k8jbdHxKsRzpXQ8cjcg"
                          className="p-white-bold"
                          target="_blank"
                        >
                          <i>
                            <IoLogoWhatsapp />
                          </i>
                          Whatsapp
                        </Link>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <h3 className="sub-heading-white mt-0 mb-2">
                        We’re Here to Help
                      </h3>
                      <div
                        className="d-inline-block"
                        style={{
                          background:
                            "linear-gradient(45deg, #313f70, #953986)",
                          borderRadius: 6,
                          padding: 10,
                        }}
                      >
                        <Link
                          className=" p-white-bold "
                          to="tel:+01823222674"
                          style={{
                            textDecoration: "none",
                            color: "var(--white)",
                            padding: "10px !important",
                          }}
                        >
                          <MdWifiCalling3
                            className="sub-heading-white"
                            style={{ marginRight: 6 }}
                          />
                          Call Us : 01823222674
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mb-3 mb-lg-0">
              <div className="d-flex justify-content-start">
                <div className="d-flex footer-ul justify-content-between ">
                  <Link to="/privacy-policy" className="p-white-bold">
                    Privacy Policy
                  </Link>
                  <Link to="/terms&condition" className="p-white-bold mx-lg-3">
                    Terms and Conditions
                  </Link>
                  <Link to="tel:+01823222674" className="p-white-bold">
                    24/7 Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ border: "1px solid #fff" }} />

          <div className="">
            <h4 className="text-center p-white-bold my-0">
              COPYRIGHT © 2024,All rights Reserved
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}
