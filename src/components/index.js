import React, { useEffect, useRef } from "react";
import brain from "./images/brains.webp";
import addiction from "./images/addiction.webp";
import laser from "./images/laser.webp";
import chest from "./images/chest.webp";
import sandhu from "./images/sandhu.jpg";
import bbrain from "./images/brain.png";
import doc from "./images/doc.png";
import { FaCircleCheck } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";

export default function Index(props) {
  const fadeTextRef = useRef(null);
  const scrollSpyRef = useRef(null);

  useEffect(() => {
    // Set CSS variables for fade-text spans
    if (fadeTextRef.current) {
      const spans = fadeTextRef.current.querySelectorAll("span");
      spans.forEach((span, index) => {
        span.style.setProperty("--i", index);
      });
    }

    // Initialize ScrollSpy
    if (scrollSpyRef.current) {
      // Ensure that Bootstrap's ScrollSpy is available
      const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");

      // Initialize ScrollSpy on the scroll container
      const scrollSpy = new bootstrap.ScrollSpy(scrollSpyRef.current, {
        target: "#navbar-sticky",
        offset: 570, // Adjust this value based on your navbar's height
      });

      // Cleanup ScrollSpy on component unmount
      return () => {
        scrollSpy.dispose();
      };
    }
  }, []); // Runs only once when the component mounts

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-sticky"
      data-bs-offset="0"
      className="scrollspy-example"
      tabIndex="0"
      ref={scrollSpyRef}
    >
      <div className="container-fluid p-0">
        <div className="banner">
          <div className="container">
            <div className="row" style={{ height: "100%" }}>
              <div
                className=" col-lg-7 col-11 d-flex align-items-center"
                style={{ height: "100%" }}
              >
                <div className="fade-text" ref={fadeTextRef}>
                  <span className="word animated fadeIn banner-white">
                    Dedicated
                  </span>
                  <span className="word animated fadeIn banner-white">to</span>
                  <span className="word animated fadeIn banner-white">
                    Your
                  </span>
                  <span className="word animated fadeIn banner-white">
                    Health,
                  </span>
                  <br />
                  <span className="word animated fadeIn banner-white">
                    Committed
                  </span>
                  <span className="word animated fadeIn banner-white">to</span>
                  <span className="word animated fadeIn banner-white">
                    Your
                  </span>
                  <span className="word animated fadeIn banner-white">
                    Future
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="services">
        <div className="container">
          <h2 className="section-top ">Our Services</h2>
          <div className="row">
            <div className="col-lg-5">
              <div
                className=" d-flex align-items-center"
                style={{ height: "100%" }}
              >
                <h3 className="section-heading-black my-0">
                  Where Every{" "}
                  <span style={{ color: "var(--neon)" }}>Patient</span> is
                  Family,{" "}
                  <span style={{ color: "var(--pink)" }}>Every Life</span> is
                  Precious
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="p-black my-0">
                At Sandhu Hospital, Nawanshahar, we are dedicated to providing
                exceptional healthcare across a wide range of specialties. As a
                MultiSpeciality Hospital,Our compassionate and highly skilled
                medical team ensures that every patient receives personalized,
                quality care in a comforting environment. At Sandhu Hospital,
                your health is our priority. we are proud to offer expert care
                in:
              </p>
            </div>
          </div>

          <div className="row my-2 py-3">
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={brain} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-1">Brain Diseases,</h2>
                <p className="p-black my-0 overflow-2">
                  Advanced treatments for neurological disorders and brain
                  health.
                </p>
              </div>
            </div>
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={addiction} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-2">De-addiction</h2>
                <p className="p-black my-0 overflow-2">
                  Comprehensive programs to help individuals overcome substance
                  abuse.
                </p>
              </div>
            </div>
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={laser} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-1">
                  Skin, Cosmetology & LASERs
                </h2>
                <p className="p-black my-0 overflow-2">
                  State-of-the-art skincare, cosmetic treatments, and LASER
                  therapy.
                </p>
              </div>
            </div>
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={chest} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-1">Chest Diseases:</h2>
                <p className="p-black my-0 overflow-2">
                  Specialized care for respiratory and internal medicine
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="white-to-blue ">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="d-flex align-items-start justify-content-between flex-column">
                      <h2 className="section-heading-white">
                        Healing Minds, <br />
                        Restoring Lives
                      </h2>

                      <div className="s1">
                        <div className="d-flex">
                          <div>
                            <h3 className="p-heading-white">
                              Breakthroughs in Brain Health, Every Day
                            </h3>

                            <div className="d-flex justify-content-between pe-3">
                              <button className="btn-white">
                                book appointment
                              </button>
                            </div>
                          </div>
                          <div className="simg">
                            <img src={sandhu} alt="sandhu hospital" />
                          </div>
                        </div>
                        <div className="mt-3">
                          <h4 className="p-white-bold mt-0 mb-1">
                            Leading the Way in Brain Health
                          </h4>
                          <p className="p-grey">
                            With advanced technology and a team of world-class
                            neurologists, we lead the field in brain health. Our
                            focus is on innovative treatment options and
                            personalized care plans that prioritize your
                            well-being and long-term brain health.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="mains">
                      <div className="mimg ">
                        <img
                          src={bbrain}
                          alt="sandhu hospital"
                          className="animate__animated animate__pulse animate__infinite "
                        />
                        <div className="mab1">
                          <p className="my-0 p-heading-white">
                            Empowering Brains to Thrive Again
                          </p>
                        </div>
                        <div className="mab2">
                          <p className="my-0 p-heading-white">
                            Innovative Care for a Brighter Brain Future
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
              </div>

              <h1></h1>
            </div>
          </div>
        </div>
      </section>

      <section
        className="space"
        id="about"
        style={{ background: "floralwhite" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-top ">About us</h2>
              <h3 className="section-heading-black mt-3">
                Welcome to sandhu hospital
              </h3>

              <p className="p-black mt-4">
                Sandhu Hospital, located in Nawanshahar, is a premier
                multispecialty healthcare center dedicated to providing
                comprehensive medical services. The hospital offers specialized
                treatment for brain diseases, de-addiction, skin conditions,
                cosmetology, and advanced LASER procedures. It is also renowned
                for its expertise in medicine, chest diseases, and general &
                laparoscopic surgery. Equipped with a state-of-the-art
                laboratory, an advanced medical I.C.U., and round-the-clock
                emergency services, Sandhu Hospital ensures top-quality care and
                treatment for patients in a wide range of medical disciplines.
              </p>
              <div className="row">
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0"> 15 years of Excellence</p>
                  </div>
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0"> 24/7 Hours Medical Service</p>
                  </div>
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0"> A Multispecialty hospital</p>
                  </div>
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0"> A Team of professionals</p>
                  </div>
                </div>
              </div>
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
                    className=" p-white-bold "
                    href="tel:+01823222674"
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
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
  <div className="doctor" style={{ position: 'relative', zIndex: 1 }}>
    <div className="doctor-inner">
      <img src={doc} alt="sadhu hospital" />
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      <section id="who">
        <div className="container">
          <h2 className="section-top ">Conditions We Treat</h2>
          <div className="row mt-3">
            <div className="col-lg-3  mb-3 mb-0">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">Brain Disorders</h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Including stroke, epilepsy, Parkinson’s disease, dementia, and
                  neurological conditions.
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  We use Advanced diagnostics, medications, neurorehabilitation,
                  and minimally invasive surgery.
                </p>
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0">
              <div className="cwt2">
                <img src={brain} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">Substance Abuse</h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Alcohol, drug, and behavioral addictions.
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  Medical detox, counseling, behavioral therapy, and long-term
                  rehabilitation.
                </p>
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0 ">
              <div className="cwt2">
                <img src={addiction} alt="sandhu hospital" />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3   mb-3 mb-0 ">
              <div className="cwt2">
                <img src={laser} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0 ">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">Skin Diseases</h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Acne, eczema, psoriasis, fungal infections,Wrinkles, scars,
                  pigmentation, hair loss.
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  Topical treatments, medications, Cosmetic procedures and LASER
                  treatments for rejuvenation and hair removal.
                </p>
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0 ">
              <div className="cwt2">
                <img src={chest} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-3   mb-2 mb-0">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">
                  Respiratory Diseases
                </h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Pneumonia,Pulmonary Fibrosi, Asthma, bronchitis, pneumonia,
                  COPD.,Emphysema
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  We provide tailored treatments that include medications,
                  inhalation therapy, pulmonary rehabilitation, oxygen therapy,
                  and in severe cases, advanced interventions like mechanical
                  ventilation and surgical procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
