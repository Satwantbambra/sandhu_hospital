import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [], // Changed team to doctors to match API response
    };
  }

  fetchTeam = async () => {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/doctors`;
    try {
      const response = await axios.get(apiUrl);
      this.setState({ doctors: response.data.data });
    } catch (error) {
      console.error("There was an error fetching the team!", error);
    }
  };

  componentDidMount() {
    this.fetchTeam();
  }

  render() {
    return (
      <div className="container">
        <div className="space">
          {/* Section heading */}
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
                providing compassionate and personalized care. With a wealth of
                experience and expertise, we work collaboratively to ensure the
                best outcomes for our patients. Together, we strive to create a
                supportive environment where your health and wellbeing are our
                top priorities.
              </p>
            </div>
          </div>

          {/* Team Cards */}
          <div className="mt-5">
            <div className="row">
              {this.state.doctors && this.state.doctors.length > 0 ? (
                this.state.doctors.map((doctor, index) => (
                  <div key={index} className="col-lg-4 mb-4 ">
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
                              {doctor.name}
                            </h2>
                            <h3 className="p-black-bold mt-2 mb-0">
                              Qualification
                            </h3>
                            <p className="p-black mb-0 overflow-2">
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
                              }}
                            />
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
      </div>
    );
  }
}

export default Team; // Changed from Team to About to match the class name
