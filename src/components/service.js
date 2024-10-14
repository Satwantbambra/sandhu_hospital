import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useParams } from "react-router-dom";

import { fetchSingleService } from "./commonApis/fetchServices";

export default function Service() {
  const { id } = useParams();
  const [service_details, setServiceDetails] = useState([]);

  const doctor_details = service_details?.doctor;
  const doctor_timings = doctor_details?.timings;

  const sub_services = service_details?.sub_services;
  const gallery = service_details?.gallery;

  const changeLastWord = () => {
    const elements = document.querySelectorAll(".sdoc-name");

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

  // Execute the word change effect once the component is mounted
  useEffect(() => {
    const getDetails = async () => {
      const details = await fetchSingleService(id);
      //console.log("details => ", details);
      setServiceDetails(details);
    };

    getDetails();
    changeLastWord();
  }, [id]);

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
    <div className="container">
      <div className="space pb-0">
        <div
          className="row mt-lg-5 mt-3 px-lg-5 px-3"
          style={{ height: "100%" }}
        >
          <div className="col-lg-4 col-md-5 col-12">
            <div className="doc-s">
              <img
                src={doctor_details?.image}
                alt="doctor"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "./images/dummyd.png";
                }}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            <h1 className="banner-black  mb-3">
              <span style={{ color: " var(--pink)" }}>
                {service_details?.name}
              </span>
            </h1>

            <h2 className="sub-heading-black sdoc-name  ">
              {doctor_details?.name}
            </h2>
            <h3 className="p-heading-black mt-2 mb-1">Specialist in</h3>
            <p className="p-black mb-0 overflow-2">
              {doctor_details?.specialty}
            </p>
            <h3 className="p-heading-black mt-2 mb-0"> Qualification</h3>
            <p className="p-black mb-0 overflow-2">
              {doctor_details?.qualifications}
            </p>
           
            <h4 className="p-heading-black mt-2 mb-1">Phone no.</h4>
            <p className="p-black mb-0 overflow-2">
              <a href="tel:0987654321" className="p-black">
                {doctor_details?.phone}
              </a>{" "}
            </p>
            <h4 className="p-heading-black mt-2 mb-1">Experience</h4>
            <p className="p-black mb-0 overflow-2 ">
              {doctor_details?.total_experience
                ? doctor_details?.total_experience
                : 0}{" "}
              years of experience
            </p>
            <h5 className="p-heading-black mt-2 mb-1">About Doctor</h5>
            <p className="p-black mb-3 overflow-3 ">
              {doctor_details?.detailed_bio}
            </p>
            <div className="d-flex justify-content-end">
              <Link to={`/doctor/${doctor_details?.id}`} className="btn-pink">
                Know more
              </Link>
            </div>
          </div>
          <div className="mt-4 col-lg-12">
            <div className="mt-3 row">
              <div className="col-lg-8 col-md-12 col-12">
                <h2 className="section-heading-black mb-5">
                  {" "}
                  About{" "}
                  <span style={{ color: "var(--pink)" }}>De-addiction</span>
                </h2>
                <p className="p-black">{service_details?.description}</p>
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
                  {doctor_timings?.map((timing) => {
                    return (
                      <li
                        className={!timing?.timings ? "off" : ""}
                        key={timing.id}
                      >
                        <div className="row">
                          <div className="col-4">
                            <div className="outerday-tag">
                              <p className="p-heading-white mb-0 innerday-tag">
                                {timing?.day?.substring(0, 3)}
                              </p>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-items-center">
                            <p className="p-heading-white color mb-0 px-2 py-1">
                              {timing?.timings || "Off Day"}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-4" id="who">
          <div className="container">
            <h2 className="section-top ">Conditions We Treat</h2>

            {sub_services?.map((sub_service, index) => {
              return (
                <div key={index} id={sub_service?.name.replace(/\s+/g, '-')}>
                  {index % 2 === 0 ? (
                    <div className="row mt-3" >
                      <div
                        className={`mb-3 mb-0 ${
                          sub_service?.image ? "col-lg-8" : "col-lg-12"
                        }`}
                      >
                        <div className="cwt p-3">
                          <h2 className="sub-heading-black mt-0 mb-2">
                            {sub_service?.name}
                          </h2>
                          <p
                            className="p-blue-small "
                            style={{ textAlign: "justify" }}
                          >
                            {sub_service?.utility}
                          </p>

                          <h3 className="p-black-bold mt-2 mb-1">
                            How We Cure:
                          </h3>
                          <div
                            className="p-black overflow-3 mt-0 mb-2"
                            dangerouslySetInnerHTML={{
                              __html: sub_service?.description,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className={`mb-3 mb-0 ${
                          sub_service?.image ? "col-lg-4" : "d-none"
                        }`}
                      >
                        <div className="cwt">
                        {sub_service?.image ? (
                        <img
                        src={sub_service?.image}
                        alt="doctor"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `${process.env.PUBLIC_URL}/images/dummyd.png`; // Fallback image
                        }}
                        />
                    ) : (
                        <img src={`${process.env.PUBLIC_URL}/images/dummyd.png`} alt="loading" />
                        // You can also use a loading spinner here
                    )}

                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="row mt-3">
                      <div
                        className={`mb-3 mb-0 ${
                          sub_service?.image ? "col-lg-4" : "d-none"
                        }`}
                      >
                        <div className="cwt">
                          <img
                            src={sub_service?.image}
                            alt="sandhu hospital"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "/medical-symbol.png";
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className={`mb-3 mb-0 ${
                          sub_service?.image ? "col-lg-8" : "col-lg-12"
                        }`}
                      >
                        <div className="cwt p-3">
                          <h2 className="sub-heading-black mt-0 mb-2">
                            {sub_service?.name}
                          </h2>
                          <p
                            className="p-blue-small "
                            style={{ textAlign: "justify" }}
                          >
                            {sub_service?.utility}
                          </p>

                          <h3 className="p-black-bold mt-2 mb-1">
                            How We Cure:
                          </h3>
                          <div
                            className="p-black  mt-0 mb-2"
                            dangerouslySetInnerHTML={{
                              __html: sub_service?.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <div id="gallery" className="space pb-0 ">
          <div className="container">
            <div className="d-flex flex-lg-row justify-content-lg-between flex-column justify-content-start align-items-lg-center">
              <h2
                className="section-top me-lg-5 "
                style={{ whiteSpace: "nowrap" }}
              >
                Our Gallery
              </h2>
              <p className="p-black mb-0">
                Discover the heart of Sandhu Hospital through our gallery.
                Browse images that showcase our advanced facilities,
                compassionate staff, and the welcoming environment we provide
                for our patients. Each photo reflects our commitment to
                excellence in healthcare
              </p>
            </div>
            <div className="space">
              {gallery ? (
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1400: 4 }}
                >
                  <Masonry
                    className=" masonry"
                    columnClassName="masonry-grid_column"
                    gutter="20px"
                  >
                    {gallery?.map((item, index) => {
                      return (
                        <a
                          data-fancybox="gallery"
                          href={item.image}
                          className="gallery-cap"
                        >
                          <div className="gallery-capi">
                            <p className="p-white-bold mb-0">{item.title}</p>
                          </div>
                          {item.media === "Video" ? (
                            <>
                              <div
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                <div className="overlaygll m-0">
                                  <div className="play-btn m-0"></div>
                                </div>
                                <video
                                  loop
                                  autoPlay
                                  muted
                                  style={{ width: "100%" }}
                                >
                                  <source src={item.image} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            </>
                          ) : (
                            <img
                              src={item.image}
                              style={{ width: "100%", display: "block" }}
                              alt="sandhu hospital Nawanshahar images"
                            />
                          )}
                        </a>
                      );
                    })}
                  </Masonry>
                </ResponsiveMasonry>
              ) : (
                <p>Gallery Not Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
