import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import dummy from "./images/dummyd.png";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { FaCircleCheck } from "react-icons/fa6";
import { fetchSingleService } from "./commonApis/fetchServices";
import GalleryComponent from './GalleryComponent';
export default function Service() {
  const { id } = useParams();
  const [service_details, setServiceDetails] = useState(null); // Changed to null for better handling
  const [imageError, setImageError] = useState(false); // State to track image load error

  const doctor_details = service_details?.doctor;
  const doctor_timings = doctor_details?.timings;

  const sub_services = service_details?.sub_services;
  const gallery = service_details?.gallery;
  const facilities = service_details?.facilities;

  // Function to change the last word's color
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

  // Fetch service details when component mounts or `id` changes
  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await fetchSingleService(id);
        setServiceDetails(details);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    getDetails();
  }, [id]);

  // Apply the word change effect once service_details is updated
  useEffect(() => {
    if (doctor_details) {
      changeLastWord();
    }
  }, [doctor_details]);

  // Initialize Fancybox
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

  // Handler for image load error
  const handleImageError = (e) => {
    if (!imageError) {
      // Prevent infinite loop
      setImageError(true);
      e.target.src = dummy; // Ensure this path is correct
    }
  };

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
                onError={handleImageError}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            {service_details?.name && (
              <h1 className="banner-black mb-3">
                <span>
                  {service_details?.name}
                </span>
              </h1>
            )}
            {doctor_details?.qualifications && (
              <>
                <p  className="p-black dr_q mb-0 overflow-2">
                  ({doctor_details?.qualifications})
                </p>
              </>
            )}


            {doctor_details?.name && (
              <h2 className="sub-heading-black sdoc-name">
                {doctor_details?.name}
              </h2>
            )}

            {doctor_details?.specialty && (
              <>
                <h3 className="p-heading-black mt-2 mb-1">Specialist In</h3>
                <p className="p-black mb-0 overflow-2">
                  {doctor_details?.specialty}
                </p>
              </>
            )}

            

            {doctor_details?.phone && (
              <>
                <h4 className="p-heading-black mt-2 mb-1">Phone no.</h4>
                <p className="p-black mb-0 overflow-2">
                  <a href={`tel:${doctor_details?.phone}`} className="p-black">
                    {doctor_details?.phone}
                  </a>
                </p>
              </>
            )}

            {doctor_details?.total_experience !== undefined && (
              <>
                <h4 className="p-heading-black mt-2 mb-1">Experience</h4>
                <p className="p-black mb-0 overflow-2">
                  {doctor_details?.total_experience
                    ? doctor_details?.total_experience
                    : 0}{" "}
                </p>
              </>
            )}

            {doctor_details?.short_bio && (
              <>
                <h5 className="p-heading-black mt-2 mb-1">About Doctor</h5>
                <p className="p-black mb-3 overflow-3">
                {doctor_details?.short_bio}
                </p>
              </>
            )}

            {doctor_details?.id && (
              <div className="d-flex justify-content-end">
                <Link to={`/doctor/${doctor_details?.id}`} className="btn-pink">
                  Know more
                </Link>
              </div>
            )} 
          </div>

          {/* About De-addiction Section */}
          {service_details?.description && (
            <div className="mt-4 col-lg-12">
              <div className="mt-3 row">
                <div className="col-lg-8 col-md-12 col-12">
                  <h2 className="section-heading-black mb-3">
                    About{" "}
                    <span style={{ color: "var(--pink)" }}>
                      {" "}
                      {service_details?.name}
                    </span>
                  </h2>
                  <p className="p-black"  dangerouslySetInnerHTML={{
                                __html: service_details?.description,
                              }}></p>

       {/* Services Offered */}

       <div className="row">
  {facilities.length > 0 ? (
    <>
      <h3 className="section-heading-black mb-3 mt-3">Facilities</h3> {/* Header added here */}
      {facilities.map((facility, index) => (
        <div className="col-lg-6 mb-2" key={index}>
          <div className="d-flex">
            <FaCircleCheck
              className="me-2"
              style={{ color: "var(--pink)" }}
            />
            <p className="p-black mb-0">{facility.title}</p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <p></p> // Optional: message when no facilities are present
  )}
</div>
                </div>
                {doctor_timings?.length > 0 && (
                  <div className="col-lg-4 col-md-7 col-12">
                    <h2 className="section-heading-black">
                      Days &amp;{" "}
                      <span style={{ color: "var(--pink)" }}>OPD timings</span>
                    </h2>
                    <ul
                      className="days-ul ps-0 mb-0 mt-5"
                      style={{ listStyle: "none" }}
                    >
                      {doctor_timings.map((timing) => (
                        <li
                          className={!timing?.timings ? "off" : ""}
                          key={timing.id}
                        >
                          <div className="row">
                            <div className="col-3">
                              <div className="outerday-tag">
                                <p className="p-heading-white mb-0 innerday-tag">
                                  {timing?.day?.substring(0, 3)}
                                </p>
                              </div>
                            </div>
                            <div className="col-9 d-flex align-items-center">
                              <p className="p-heading-white color mb-0 px-2 py-1">
                                {timing?.timings || "Off Day"}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

 
    



              </div>
            </div>
          )}
        </div>

        {/* Conditions We Treat Section */}
        {sub_services?.length > 0 && (
          <section className="mt-4" id="who">
            <div className="container">
              <h2 className="section-top">Conditions We Treat</h2>

              {sub_services.map((sub_service, index) => (
                <div
                  key={sub_service.id || sub_service.name.replace(/\s+/g, "-")}
                  id={sub_service?.name.replace(/\s+/g, "-")}
                >
                  {index % 2 === 0 ? (
                    <div className="row mt-3 align-items-center">
                      {sub_service?.name && (
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
                              className="p-blue-small"
                              style={{ textAlign: "justify" }}
                            >
                              {sub_service?.utility}
                            </p>

                            <h3 className="p-black-bold mt-2 mb-1">
                              How We Cure:
                            </h3>
                            <div
                              className="p-black mt-0 mb-2"
                              dangerouslySetInnerHTML={{
                                __html: sub_service?.description,
                              }}
                            />
                          </div>
                        </div>
                      )}
                      {sub_service?.image && (
                        <div className="mb-3 mb-0 col-lg-4">
                          <div className="cwt">
                            <img
                              src={sub_service?.image}
                              alt={sub_service?.name || "Service Image"}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `${process.env.PUBLIC_URL}/medical-symbol.png`; // Ensure correct path
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="row mt-3 align-items-center">
                      {sub_service?.image && (
                        <div className="mb-3 mb-0 col-lg-4">
                          <div className="cwt">
                            <img
                              src={sub_service?.image}
                              alt={sub_service?.name || "Service Image"}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `${process.env.PUBLIC_URL}/medical-symbol.png`; // Ensure correct path
                              }}
                            />
                          </div>
                        </div>
                      )}
                      {sub_service?.name && (
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
                              className="p-blue-small"
                              style={{ textAlign: "justify" }}
                            >
                              {sub_service?.utility}
                            </p>

                            <h3 className="p-black-bold mt-2 mb-1">
                              How We Cure:
                            </h3>
                            <div
                              className="p-black mt-0 mb-2"
                              dangerouslySetInnerHTML={{
                                __html: sub_service?.description,
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {gallery?.length > 0 && (
          <div id="gallery" className="space pb-0">
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
                  compassionate staff, and the welcoming environment we provide
                  for our patients. Each photo reflects our commitment to
                  excellence in healthcare
                </p>
              </div>
            
       {gallery && gallery.length > 0 ? (
        <GalleryComponent galleries={gallery} />
      ) : (
        <p></p> // You can display a message or leave it blank if you prefer.
      )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
