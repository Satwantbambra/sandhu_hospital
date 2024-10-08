// Skin.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import skin1 from "./images/skin1.jpg";
import s1 from "./images/s1.jpg";
import s2 from "./images/s2.jpg";
import s3 from "./images/s3.jpg";
import s4 from "./images/s4.jpg";
import s5 from "./images/s5.jpg";
import s6 from "./images/s6.jpg";
import doc from "./images/doctor.webp";
import ScrollAnimation from "react-animate-on-scroll";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Skin() {
  const changeLastWord = () => {
    const elements = document.querySelectorAll(".skin-name");

    elements.forEach((element) => {
      const words = element.innerText.split(" ");
      if (words.length >= 8) {
        // Change colors of specific words
        words[words.length - 1] = `<span style="color:var(--pink)">${
          words[words.length - 1]
        }</span>`;
        words[words.length - 4] = `<span style="color:var(--neon)">${
          words[words.length - 3]
        }</span>`;
        words[words.length - 6] = `<span style="color:var(--pink)">${
          words[words.length - 4]
        }</span>`;
        words[words.length - 8] = `<span style="color:var(--pink)">${
          words[words.length - 7]
        }</span>`;
        element.innerHTML = words.join(" ");
      }
    });
  };
  const changebannerWord = () => {
    const elements = document.querySelectorAll(".banner-name");

    elements.forEach((element) => {
      const words = element.innerText.split(" ");
      if (words.length >= 1) {
        // Change colors of specific words
        words[words.length - 1] = `<span style="color:var(--pink)">${
          words[words.length - 1]
        }</span>`;

        element.innerHTML = words.join(" ");
      }
    });
  };

  useEffect(() => {
    changeLastWord();
    changebannerWord();
    return () => {};
  }, []);

  useEffect(() => {
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
    return () => {
      Fancybox.unbind("[data-fancybox]");
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row space decob">
          <ScrollAnimation
            initiallyVisible={true}
            className="col-lg-6"
            animateIn="animate__fadeInLeft"
          >
            <div
              className="d-flex flex-column justify-content-center align-items-start"
              style={{ height: "100%" }}
            >
              <h1 className="banner-black banner-name">Skin Dermatology</h1>
              <h3 className="p-heading-black my-0 skin-name">
                Transform Your Skin, Transform Your Confidence Personalized
                Dermatology Solutions Tailored Just for You!
              </h3>
              <p className="p-black my-0">
                At Sandhu Hospitals Skin Dermatology Clinic, we believe that
                healthy skin is a reflection of overall well-being. Our team of
                experienced dermatologists offers a wide range of personalized
                skin care solutions tailored to meet the unique needs of each
                patient. From acne and eczema to skin cancer screenings and
                cosmetic enhancements, we are committed to helping you achieve
                radiant, healthy skin.At Sandhu Hospitals Skin Dermatology
                Clinic, we believe that healthy skin is a reflection of overall
                well-being. Our team of experienced dermatologists offers a wide
                range of personalized skin care solutions tailored to meet the
                unique needs of each patient. From acne and eczema to skin
                cancer screenings and cosmetic enhancements, we are committed to
                helping you achieve radiant, healthy skin.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            initiallyVisible={true}
            className="col-lg-6"
            animateIn="animate__fadeInRight"
          >
            <img src={skin1} alt="skin" style={{ width: "100%" }} />
          </ScrollAnimation>
        </div>
      </div>
      <div className="container space">
        <div
          className="row mt-lg-5 "
          style={{ height: "100%" }}
        >
          <div className="col-lg-4 col-md-5 col-12">
            <div className="doc-s">
              <img src={doc} alt=" doctor name" />
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-12">
            <h1 className="banner-black  mb-3">
              skin<span style={{ color: " var(--pink)" }}> Dermatology</span>
            </h1>

            <h2 className="sub-heading-black sdoc-name  ">ARAV RAJ SHARAMA</h2>
            <h3 className="p-heading-black mt-2 mb-0"> Qualification</h3>
            <p className="p-black mb-0 overflow-2">MBBS, MD, DM</p>
            <h3 className="p-heading-black mt-2 mb-1">Specialist in</h3>
            <p className="p-black mb-0 overflow-2">Cardiologist </p>
            <h4 className="p-heading-black mt-2 mb-1">Phone no.</h4>
            <p className="p-black mb-0 overflow-2">
              <a href="tel:0987654321" className="p-black">
                0987654321
              </a>{" "}
            </p>
            <h4 className="p-heading-black mt-2 mb-1">Experience</h4>
            <p className="p-black mb-0 overflow-2 ">15 years of experience</p>
            <h5 className="p-heading-black mt-2 mb-1">About Doctor</h5>
            <p className="p-black mb-3 overflow-3 ">
              Dr. Aarav raj Sharma is a highly skilled and compassionate medical
              professional with extensive experience in Cardiologist. Dedicated
              to patient care and well-being, Dr. Aarav raj Sharmautilizes
              advanced techniques and a personalized approach to ensure the best
              outcomes. Trusted for their expertise, they are committed to
              providing top-quality healthcare and helping patients achieve
              optimal health.
            </p>
            <div className="d-flex justify-content-end">
              <Link to="/doctor" className="btn-pink">
                Know more
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-12">
                <h2 className="section-heading-black ">
                  {" "}
                  Days &{" "}
                  <span style={{ color: "var(--pink)" }}>OPD timings</span>
                </h2>
                <ul
                  className="days-ul ps-0 mb-0 mt-5"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <div className="row">
                      <div className="  col-4">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            MON
                          </p>
                        </div>
                      </div>
                      <div className=" col-8 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">
                          {" "}
                          10:00-15:00
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="  col-4">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            TUE
                          </p>
                        </div>
                      </div>
                      <div className=" col-8 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">
                          {" "}
                          10:00-15:00
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className=" col-4">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            WED
                          </p>
                        </div>
                      </div>
                      <div className=" col-8 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">
                          {" "}
                          10:00-15:00
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="off">
                    <div className="row">
                      <div className=" col-4">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            THU
                          </p>
                        </div>
                      </div>
                      <div className=" col-8 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">Off day</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className=" col-4">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            FRI
                          </p>
                        </div>
                      </div>
                      <div className=" col-8 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">
                          {" "}
                          10:00-15:00
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className=" col-4">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            SAT
                          </p>
                        </div>
                      </div>
                      <div className=" col-8 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">
                          {" "}
                          10:00-15:00
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="off">
                    <div className="row">
                      <div className=" col-4">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            SUN
                          </p>
                        </div>
                      </div>
                      <div className=" col-8 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">
                          {" "}
                          10:00-15:00
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
        
        </div>
      </div>
      <div className="space container">
        <h2 className="banner-black text-center">
          Discover Our <span style={{ color: "var(--pink)" }}>Specialized</span>{" "}
          Services
        </h2>

        <ScrollAnimation
          initiallyVisible={true}
          animateIn="animate__fadeInUp"
          className="row space d-flex justify-content-center deco"
        >
          <div className="col-lg-7 col-9">
            <div className="skin-facility-img">
              <div className="sfacility sktreat ">
                <p
                  className="p-black-bold mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  Utility
                </p>
                <p className="p-black mb-0">
                  Improved Skin Health,Personalized Treatment Plans, Access to
                  Advanced Treatments Specialized Pediatric Care
                </p>
              </div>
              <img src={s1} alt="service" />
              <div className=" skname">
                <div className="skouter-tag">
                  <div className="skinner-tag">
                    <p className="mb-0 p-white-bold"> Acne Treatment</p>
                  </div>
                </div>
              </div>
              <div className="sfacility skcure">
                <p
                  className="p-black-bold mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  How we care
                </p>
                <p className="p-black mb-0">
                  We conduct a thorough assessment to identify the type and
                  severity of acne, which allows us to develop a personalized
                  treatment plan. Our approach includes education on skincare
                  routines and lifestyle adjustments.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          initiallyVisible={true}
          animateIn="animate__fadeInUp"
          className="row space d-flex justify-content-center deco"
        >
          <div className="col-lg-7 col-9">
            <div className="skin-facility-img">
              <div className="sfacility sktreat ">
                <p
                  className="p-black-bold mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  Utility
                </p>
                <p className="p-black mb-0">
                  Improves Skin Texture and Tone ,Reduces Fine Lines and
                  Wrinkles ,Enhances Radiance,Minimizes Large Pores
                </p>
              </div>
              <img src={s2} alt="service" />
              <div className=" skname">
                <div className="skouter-tag">
                  <div className="skinner-tag">
                    <p className="mb-0 p-white-bold"> Chemical peels</p>
                  </div>
                </div>
              </div>
              <div className="sfacility skcure">
                <p
                  className="p-black-bold mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  How we care
                </p>
                <p className="p-black mb-0">
                  During the treatment, we carefully apply a chemical solution
                  tailored to your needs, allowing it to work for a specific
                  duration. Afterward, we neutralize the solution and provide
                  soothing treatments to minimize discomfort.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          initiallyVisible={true}
          animateIn="animate__fadeInUp"
          className="row space d-flex justify-content-center deco"
        >
          <div className="col-lg-7 col-9">
            <div className="skin-facility-img">
              <div className="sfacility sktreat ">
                <p
                  className="p-black-bold mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  Utility
                </p>
                <p className="p-black mb-0">
                  Improves Skin Texture and Tone ,Reduces Fine Lines and
                  Wrinkles
                </p>
              </div>
              <img src={s3} alt="service" />
              <div className=" skname">
                <div className="skouter-tag">
                  <div className="skinner-tag">
                    <p className="mb-0 p-white-bold"> Pigmentation</p>
                  </div>
                </div>
              </div>
              <div className="sfacility skcure">
                <p
                  className="p-black-bold mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  How we care
                </p>
                <p className="p-black mb-0">
                  Our skilled dermatologists apply targeted techniques to break
                  down excess melanin, helping to fade dark spots and even out
                  skin tone. Throughout the process, we prioritize patient
                  comfort and safety.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="space container">
        <h2 className="banner-black text-center">
          Visual <span style={{ color: "var(--pink)" }}>Journey</span> of
          Patient<span style={{ color: "var(--pink)" }}> Care</span>
        </h2>

        <div className="space">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1400: 3 }}
          >
            <Masonry
              className=" masonry"
              columnClassName="masonry-grid_column"
              gutter="20px"
            >
              <a data-fancybox="gallery" href={s1} className="gallery-cap">
                <div className="gallery-capi">
                  <p className="p-white-bold mb-0">skin care</p>
                </div>
                <img
                  src={s1}
                  style={{ width: "100%", display: "block" }}
                  alt="sandhu hospital Nawanshahar images"
                />
              </a>
              <a data-fancybox="gallery" href={s2} className="gallery-cap">
                <div className="gallery-capi">
                  <p className="p-white-bold mb-0">skin care</p>
                </div>
                <img
                  src={s2}
                  style={{ width: "100%", display: "block" }}
                  alt="sandhu hospital Nawanshahar images"
                />
              </a>
              <a data-fancybox="gallery" href={s3} className="gallery-cap">
                <div className="gallery-capi">
                  <p className="p-white-bold mb-0">skin care</p>
                </div>
                <img
                  src={s3}
                  style={{ width: "100%", display: "block" }}
                  alt="sandhu hospital Nawanshahar images"
                />
              </a>
              <a data-fancybox="gallery" href={s4} className="gallery-cap">
                <div className="gallery-capi">
                  <p className="p-white-bold mb-0">skin care</p>
                </div>
                <img
                  src={s4}
                  style={{ width: "100%", display: "block" }}
                  alt="sandhu hospital Nawanshahar images"
                />
              </a>{" "}
              <a data-fancybox="gallery" href={s5} className="gallery-cap">
                <div className="gallery-capi">
                  <p className="p-white-bold mb-0">skin care</p>
                </div>
                <img
                  src={s5}
                  style={{ width: "100%", display: "block" }}
                  alt="sandhu hospital Nawanshahar images"
                />
              </a>
              <a data-fancybox="gallery" href={s6} className="gallery-cap">
                <div className="gallery-capi">
                  <p className="p-white-bold mb-0">skin care</p>
                </div>
                <img
                  src={s6}
                  style={{ width: "100%", display: "block" }}
                  alt="sandhu hospital Nawanshahar images"
                />
              </a>
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
}

export default Skin;
