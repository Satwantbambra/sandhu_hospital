import React, { useEffect } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { fetchSingleDoctor } from "./commonApis/fetchServices";

function Doctor() {
  const [doctorDetails, setDoctorDetails] = React.useState({});
  const [qualification, setQualification] = React.useState([]);
  const experience =  doctorDetails?.experience;

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

  const { id } = useParams();

  const fetchDetails = async () => {
    const response = await fetchSingleDoctor(id);
    setDoctorDetails(response);
  };
  // Execute the word change effect once the component is mounted
  useEffect(() => {
    changeLastWord();
    fetchDetails();
    setQualification(doctorDetails?.qualifications?.split(", "));
  }, []);

  return (
    <div>
      <div className="container-fluid px-0 about space pb-0">
        <div className="container space ">
          <div className="row mt-lg-4 mt-3 px-3 ">
            <div className="col-lg-6">
              <div className="doc-s">
                <img src={doctorDetails?.image} alt=" doctor name" />
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
                  <div className="dd-title p-heading-white">Qualifications</div>
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
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">Phone no.</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-d">
                      <a href="tel:9876543210" className="p-white">
                        {doctorDetails?.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">Service</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-d">
                      <p className="p-white mb-0">{doctorDetails?.service}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">About Doctor</div>
                  <p className="p-black mb-0">{doctorDetails?.short_bio}</p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-3 px-3">
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">More Info</div>
                  <p className="p-black mb-0">{doctorDetails?.detailed_bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 row px-3">
            <div className="col-12">
              <h1 className="section-heading-black  ">Exepiernces</h1>

              {experience && experience.map((item, index) => {
                return (
                  <div key={index} className="d-contain">
                    <div className="d-wrap">
                      <div className="dd-title p-heading-white">
                        {item.title}
                      </div>
                      <div className="d-flex my-1">
                        <FaRegCalendarDays className="me-2" />
                        <p className="p-black-bold mb-0">{item.tenure}</p>
                      </div>
                      <p className="p-black mb-0">
                       {item.description}
                      </p>
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
