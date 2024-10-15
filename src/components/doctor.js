import React, { useEffect, useState, useCallback } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { fetchSingleDoctor } from "./commonApis/fetchServices";
import dummy from "./images/dummyd.png";
function Doctor() {
  const { id } = useParams(); // Get the doctor ID from URL params
  const [doctorDetails, setDoctorDetails] = useState({});
  const [qualification, setQualification] = useState([]);
  const experience = doctorDetails?.experience;
  const [imageError, setImageError] = useState(false); // State to track image load error
  // Function to change the last word of elements with class 'sdoc-name'
  const changeLastWord = () => {
    const elements = document.querySelectorAll(".sdoc-name");

    elements.forEach((element) => {
      const words = element.innerText.split(" ");
      if (words.length >= 1) {
        // Ensure there's at least one word
        words[words.length - 1] = `<span style="color:var(--pink)">${words[words.length - 1]}</span>`;
        element.innerHTML = words.join(" ");
      }
    });
  };

  // Fetch doctor details based on ID
  const fetchDetails = useCallback(async () => {
    const response = await fetchSingleDoctor(id);
    setDoctorDetails(response);
  }, [id]); // Add id as a dependency

  // Effect to change the last word and fetch doctor details
  useEffect(() => {
    changeLastWord();
    fetchDetails();
  }, [fetchDetails]); // Depend on fetchDetails to ensure it runs correctly

  // Update qualifications based on doctor details
  useEffect(() => {
    if (doctorDetails) {

      setQualification(doctorDetails?.qualifications?.split(", "));
    }
  }, [doctorDetails]); // Run this effect when doctorDetails change

    // Handler for image load error
    const handleImageError = (e) => {
      if (!imageError) { // Prevent infinite loop
        setImageError(true);
        e.target.src = dummy; // Ensure this path is correct
      }
    };
  return (
    <div>
      <div className="container-fluid px-0 about space pb-0">
        <div className="container space ">
          <div className="row mt-lg-4 mt-3 px-3 ">
            <div className="col-lg-6">
              <div className="doc-s">
                <img src={doctorDetails?.image} alt=" doctor name"  onError={handleImageError} />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="p-black-bold">
                {doctorDetails?.designation}{" "}
              </span>
              <h1 className="banner-black  sdoc-name">{doctorDetails?.name}</h1>
              <p className="sub-heading-black">
                {doctorDetails?.total_experience}
              </p>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-black">Qualifications</div>
                  <div className="d-flex flex-wrap">
                    {qualification?.map((item) => {
                      return (
                        <div className="d-d">
                          <p className="p-white mb-0">{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {doctorDetails?.phone && (
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-black">Phone no.</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-d">
                      <a href="tel:{doctorDetails?.phone}" className="p-white">
                        {doctorDetails?.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              )}
              {doctorDetails.service?.name && (
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-black">Service</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-d">
                      <p className="p-white mb-0">{doctorDetails.service?.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {doctorDetails?.short_bio && (
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-black">About Doctor</div>
                  <p className="p-black mb-0">{doctorDetails?.short_bio}</p>
                </div>
              </div>
             )}
            </div>
    
            {doctorDetails?.detailed_bio && (
            <div className="col-12 mt-3 px-3">
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-black">More Info</div>
                  <p className="p-black mb-0">{doctorDetails?.detailed_bio}</p>
                </div>
              </div>
            </div>
        )}
          </div>


          <div className="mt-3 row px-3">
            <div className="col-12">
              <h1 className="section-heading-black  ">Exeperiences</h1>

              {experience &&
                experience.map((item, index) => {
                  return (
                    <div key={index} className="d-contain">
                      <div className="d-wrap">
                        <div className="dd-title p-heading-black">
                          {item.title}
                        </div>
                        <div className="d-flex my-1">
                          <FaRegCalendarDays className="me-2" />
                          <p className="p-black-bold mb-0">{item.tenure}</p>
                        </div>
                        <p className="p-black mb-0">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
