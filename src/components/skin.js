// Skin.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Fancybox } from "@fancyapps/ui";
import { FaCircleCheck } from "react-icons/fa6";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { fetchSingleService } from "./commonApis/fetchServices";
import GalleryComponent from './GalleryComponent';
function Skin() {
  const { id } = useParams();
  const [service_details, setServiceDetails] = useState([]);
  const doctor_details = service_details?.doctor;
  const doctor_timings = doctor_details?.timings;
  const sub_services = service_details?.sub_services;
  const gallery = service_details?.gallery;
  const facilities = service_details?.facilities;
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
    const getDetails = async () => {
      const details = await fetchSingleService(id);
     // console.log("details => ", details);
      setServiceDetails(details);
    };

    getDetails();
    changeLastWord();
    changebannerWord();
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
      <div className="container">
        <div className="row py-5 decob">
          <ScrollAnimation
            initiallyVisible={true}
            className="col-lg-8"
            animateIn="animate__fadeInLeft"
          >
            <div
              className="d-flex flex-column justify-content-center align-items-start"
              style={{ height: "100%" }}
            >
              <h1 className="banner-black banner-name">
                {service_details?.name}
              </h1>
              <h3 className="p-heading-black my-0 skin-name">
                {service_details?.utility}
              </h3>
              <p className="p-black my-0" style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{
                                __html: service_details?.description,
                              }}>
                
              </p>
             
       {/* Services Offered */}

       <div className="row mb-4">
  {facilities ? (
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
          </ScrollAnimation>
          <ScrollAnimation
            initiallyVisible={true}
            className="col-lg-4"
            animateIn="animate__fadeInRight"
            style={{ textAlign: "center" }}
          >
            <img
              src={service_details?.image}
              alt="skin"
              style={{ width: "100%",height:"auto",objectFit:'contain' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "/medical-symbol.png";
              }}
            />
          </ScrollAnimation>
        </div>
      </div>
      <div className="container space">
        <div className="row mt-lg-5 " style={{ height: "100%" }}>
          <div className="col-lg-3 col-md-5 col-12">
            <div className="doc-s">
              <img src={doctor_details?.image} alt=" doctor name" />
            </div>
          </div>
          <div className="col-lg-5 col-md-7 col-12">
            <h1 className="banner-black  mb-3">
              {doctor_details?.designation}
            </h1>

            <h2 className="sub-heading-black sdoc-name  ">
              {doctor_details?.name}
            </h2>
            <h3 className="p-heading-black mt-2 mb-1">Specialist In</h3>
            <p className="p-black mb-0 overflow-2">
              {doctor_details?.designation}{" "}
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
              {doctor_details?.total_experience}
            </p>
            <h5 className="p-heading-black mt-2 mb-1">About Doctor</h5>
            <p className="p-black mb-3 overflow-3 ">
              {doctor_details?.short_bio}
            </p>
            <div className="d-flex justify-content-end">
              <Link to={`/doctor/${doctor_details?.id}`} className="btn-pink">
                Know more
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-12">
            <h2 className="section-heading-black ">
              {" "}
              Days & <span style={{ color: "var(--pink)" }}>OPD timings</span>
            </h2>
            <ul
              className="days-ul ps-0 mb-0 mt-5"
              style={{ listStyle: "none" }}
            >
              {doctor_timings?.map((item, index) => {
                return (
                  <li className={!item.timings ? "off" : ""} key={index}>
                    <div className="row">
                      <div className="  col-3">
                        <div className=" outerday-tag">
                          <p className="p-heading-white mb-0  innerday-tag">
                            {item.day?.substring(0, 3)}
                          </p>
                        </div>
                      </div>
                      <div className=" col-9 d-flex align-items-center">
                        <p className="p-heading-white color mb-0">
                          {item.timings || "Off Day"}
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
      <div className="space container">
        <h2 className="banner-black text-center">
          Discover Our <span style={{ color: "var(--pink)" }}>Specialized</span>{" "}
          Services
        </h2>

        {sub_services?.map((item, index) => {
          return (
            <ScrollAnimation
              key={index}
              initiallyVisible={true}
              animateIn="animate__fadeInUp"
              className="row space d-flex justify-content-center deco"  
            >
              <div className="col-lg-8 col-11" id={item.name.replace(/\s+/g, '-')} >
                <div className="skin-facility-img">
                  <div className="sfacility sktreat ">
                    <p
                      className="p-black-bold mb-1"
                      style={{ color: "var(--pink)" }}
                    >
                      Utility
                    </p>
                    <p className="p-black mb-0">{item.utility}</p>
                  </div>
                  <img src={item.image} alt="service" />
                  <div className=" skname">
                    <div className="skouter-tag">
                      <div className="skinner-tag">
                        <p className="mb-0 p-white-bold"> {item.name}</p>
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
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="p-black mb-0"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
      <div className="space container">
        <h2 className="banner-black text-center">
          Visual <span style={{ color: "var(--pink)" }}>Journey</span> of
          Patient<span style={{ color: "var(--pink)" }}> Care</span>
        </h2>

       {gallery && gallery.length > 0 ? (
        <GalleryComponent galleries={gallery} />
      ) : (
        <p></p> // You can display a message or leave it blank if you prefer.
      )}
      </div>
    </div>
  );
}

export default Skin;
