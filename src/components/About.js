// About.jsx

import React from "react";
import { Link } from "react-router-dom";
import about from "./images/about.webp";
import { FaCircleCheck } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      galleries: [],
      facilities :[],
    };
  }
  fetchfeatured_team() {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/doctors?type=team`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ doctors: response.data.data });
      })
      .catch((error) => {
        console.error("There was an error fetching the team!", error);
      });
  }
  fetchGallery() {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/galleries?type=featured`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ galleries: response.data.data });
      })
      .catch((error) => {
        console.error("There was an error fetching the gallery!", error);
      });
  }

    fetchFacility() {
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/facilities`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ facilities: response.data.data });
      })
      .catch((error) => {
        console.error("There was an error fetching the facilities!", error);
      });
  }
  changeLastWord = () => {
    const elements = document.querySelectorAll(".doc-name");

    elements.forEach((element) => {
      const words = element.innerText.split(" ");
      if (words.length >= 1) {
        // Ensure there's at least one word
        words[words.length - 1] = `<span style="color:var(--pink)">${
          words[words.length - 1]
        }</span>`;
        element.innerHTML = words.join(" ");
      }
    });
  };

  // Lifecycle method to handle side effects after the component mounts
  componentDidMount() {
    this.changeLastWord();
    this.fetchfeatured_team();
    this.fetchGallery();
    this.fetchFacility();

    Fancybox.bind("[data-fancybox]", {
      // Custom options
      loop: true,
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
      },
      buttons: ["zoom", "slideShow", "fullScreen", "close"],
      transitionEffect: "fade",
      idleTime: 5,
      animationEffect: "zoom-in-out",
    });
  }

  // Lifecycle method to clean up before the component unmounts
  componentWillUnmount() {
    Fancybox.unbind("[data-fancybox]");
  }

  render() {
    return (
      <div className="container">
        <div className="container-fluid px-0 about space pb-0">
          {/* About Section */}
          <div
            className="container space"
            style={{
              background: "#f5f5f5",
              borderRadius: 10,
              border: "1px solid #eaeaea",
            }}
          >
            <h1 className="banner-black text-lg-center">
              Learn <span style={{ color: "var(--pink)" }}>More</span> About{" "}
              <span style={{ color: "var(--neon)" }}>Us</span>
            </h1>
            <div
              className="row mt-lg-5 mt-3 px-lg-5 px-3"
              style={{ height: "100%" }}
            >
              {/* About Image */}
              <div className="col-lg-6">
                <div className="about-img">
                  <img src={about} alt="about sandhu hospital" />
                </div>
              </div>

              {/* About Content */}
              <div className="col-lg-6">
                <h2 className="section-top ">Dedicated to Patient Wellbeing</h2>
                <h3 className="section-heading-black mt-3">
                  Healing <span style={{ color: "var(--pink)" }}>Hands</span>,
                  Caring <span style={{ color: "var(--neon)" }}>Hearts</span>
                </h3>

                <p className="p-black mt-4">
                  Sandhu Hospital, located in Nawanshahar, is a premier
                  multispecialty healthcare center dedicated to providing
                  comprehensive medical services. The hospital offers
                  specialized treatment for brain diseases, de-addiction, skin
                  conditions, cosmetology, and advanced LASER procedures. It is
                  also renowned for its expertise in medicine, chest diseases,
                  and general & laparoscopic surgery. Equipped with a
                  state-of-the-art laboratory, an advanced medical I.C.U., and
                  round-the-clock emergency services, Sandhu Hospital ensures
                  top-quality care and treatment for patients in a wide range of
                  medical disciplines.
                </p>

                {/* Services Offered */}
                <div className="row">
                {this.state.facilities.length > 0 ? (
                this.state.facilities.map((facility, index) => (
                  <div className="col-lg-6 mb-2" key={index}>
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0">{facility.title}</p>
                  </div>
                </div>
                ))
              ) : (
                <p></p>
              )}
             
                </div>

                {/* Call Us Section */}
                <div className="mt-3">
                  <div
                    className="d-inline-block"
                    style={{
                      background: "linear-gradient(45deg, #313f70, #953986)",
                      borderRadius: 6,
                      padding: 10,
                    }}
                  >
                    <a
                      className="p-white-bold"
                      href="tel:+01823222674"
                      style={{
                        textDecoration: "none",
                        color: "var(--white)",
                        padding: "10px",
                      }}
                    >
                      <MdWifiCalling3
                        className="sub-heading-white"
                        style={{ marginRight: 6 }}
                      />
                      Call Us : 01823222674
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="mt-4 col-lg-12">
                <h2 className="section-heading-black">Why Choose Us</h2>
                <p className="p-black">
                  At Sandhu Hospital, we are dedicated to providing exceptional
                  healthcare with compassion and expertise. Our commitment to
                  patient-centered care ensures that each individual receives
                  personalized attention and treatment tailored to their unique
                  needs. With a team of highly skilled professionals and
                  advanced medical technologies, we strive to deliver the
                  highest quality of healthcare services in a comfortable and
                  supportive environment.
                </p>
              </div>

              {/* Facilities Section */}
              <div className="col-lg-12 mt-4">
                <h3 className="section-heading-black">Facilities</h3>
                <p className="p-black">
                  At Sandhu Hospital, we pride ourselves on our state-of-the-art
                  facilities designed to enhance patient care and comfort. From
                  advanced diagnostic equipment to modern patient rooms, our
                  hospital is equipped to meet the diverse needs of our
                  community. We strive to create a healing environment that
                  promotes wellness and recovery for all our patients.
                </p>

                <ul className="ps-2 mb-0" style={{ listStyle: "decimal" }}>
                  <li>
                    <h4 className="p-black-bold">Multispecialty Services:</h4>
                    <p className="p-black">
                      We offer a wide range of medical specialties, including
                      cardiology, orthopedics, gynecology, and more, ensuring
                      comprehensive care for all patients.
                    </p>
                  </li>
                  <li>
                    <h4 className="p-black-bold">24/7 Emergency Services:</h4>
                    <p className="p-black">
                      We offer a wide range of medical specialties, including
                      cardiology, orthopedics, gynecology, and more, ensuring
                      comprehensive care for all patients.
                    </p>
                  </li>
                  <li>
                    <h4 className="p-black-bold">Patient-Centric Approach:</h4>
                    <p className="p-black">
                      We prioritize the comfort and well-being of our patients,
                      offering spacious rooms, nutritious meal options, and
                      access to support services to aid in recovery.
                    </p>
                  </li>
                  <li>
                    <h4 className="p-black-bold">Skilled Medical Team:</h4>
                    <p className="p-black">
                      Our team of doctors, nurses, and support staff are
                      dedicated to providing the best possible care, ensuring
                      that you feel safe and supported throughout your
                      healthcare journey.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Team Section */}

          <div className="container space">
            <h2 className="section-top">Our Team</h2>
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="d-flex align-items-center"
                  style={{ height: "100%" }}
                >
                  <h3 className="section-heading-black my-0">
                    Together, We{" "}
                    <span style={{ color: "var(--neon)" }}>Strive</span> for
                    Excellence in{" "}
                    <span style={{ color: "var(--pink)" }}>Patient </span> Care.
                  </h3>
                </div>
              </div>
              <div className="col-lg-7">
                <p className="p-black my-0">
                  Our dedicated team of healthcare professionals is committed to
                  providing compassionate and personalized care. With a wealth
                  of experience and expertise, we work collaboratively to ensure
                  the best outcomes for our patients. Together, we strive to
                  create a supportive environment where your health and
                  wellbeing are our top priorities.
                </p>
              </div>
            </div>

            {/* Team Members */}
            <div className="mt-5">
              <div className="row">
                {/* Team Member 1 */}
                <div className="row my-2 py-3">
                  {this.state.doctors && this.state.doctors.length > 0 ? (
                    this.state.doctors.map((doctor, index) => (
                      <div key={index} className="col-lg-4 mb-3 ">
                        <div className="team-card">
                          <div className="view animate__fadeIn animate__animated">
                          <Link to={`/doctor/${doctor.id}`} className="btn-pink">
                          View More
                        </Link>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="pt-5 pb-3 ps-4">
                                <h2 className="sub-heading-black doc-name overflow-2">
                                  {doctor.name}dnsdnwkndkwddwed
                                </h2>
                                <h3 className="p-black-bold mt-2 mb-0">
                                  Qualification
                                </h3>
                                <p className="p-black mb-0 overflow-2 ">
                                  {doctor.qualifications}
                                </p>
                                <h4 className="p-black-bold mt-2 mb-1">
                                  Specialist in
                                </h4>
                                <p className="p-black mb-0 overflow-2">
                                  {doctor.specialty}
                                </p>
                                <h4 className="p-black-bold mt-2 mb-1">
                                  Experience
                                </h4>
                                <p className="p-black mb-0 overflow-2">
                                  {doctor.total_experience}
                                </p>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="team-img">
                              <img
                              src={doctor.image}
                              alt={"sdsa"}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/dummyd.png";
                              }}></img>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Loading team...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="space pb-0">
              <div className="container">
                <div className="d-flex flex-lg-row justify-content-lg-between flex-column justify-content-start align-items-lg-center">
                  <h2
                    className="section-top me-lg-5"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Our Gallery
                  </h2>
                  <p className="p-black mb-0">
                    Discover the heart of Sandhu Hospital through our gallery.
                    Browse images that showcase our advanced facilities,
                    compassionate staff, and the welcoming environment we
                    provide for our patients. Each photo reflects our commitment
                    to excellence in healthcare.
                  </p>
                </div>
                <div className="space">
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      750: 2,
                      900: 3,
                      1400: 4,
                    }}
                  >
                    <Masonry
                      columnClassName="masonry-grid_column"
                      gutter="20px"
                    >
                      {this.state.galleries.length > 0 ? (
                        this.state.galleries.map((Gallery, index) =>
                          Gallery.media === "Image" ? (
                            <div>
                              <a
                                key={index}
                                data-fancybox="gallery"
                                href={Gallery.image}
                              >
                                <div className="gallery-cap">
                                  <div className="gallery-capi">
                                    <p className="p-white-bold mb-0">
                                      {Gallery.title}
                                    </p>
                                  </div>
                                  <img
                                    src={Gallery.image}
                                    style={{ width: "100%" }}
                                    alt={Gallery.title}
                                  />
                                </div>
                              </a>
                            </div>
                          ) : Gallery.media === "Video" ? (
                            <a data-fancybox="gallery" href={Gallery.image} key={index}>
                            <div className="gallery-cap" style={{ width: "100%", height: "100%" }}>
                    <div className="overlaygll m-0">
                      <div className="play-btn m-0"></div>
                    </div>
                    <div className="gallery-capi">
                                <p className="p-white-bold mb-0">{Gallery.title}</p>
                              </div>
                    <video  loop muted playsInline   style={{ width: "100%" }}>
                      <source src={Gallery.image} type="video/mp4" />
                    </video>
                  </div>
                        </a>
                          ) : null
                        )
                      ) : (
                        <p>Loading GALLERY...</p>
                      )}
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
