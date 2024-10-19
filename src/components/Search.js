import React from "react";
import ss from "./images/ss.png"; // Ensure the path is correct
import sd from "./images/sdoc.png"; // Ensure the path is correct
import { fetchAllServices } from "./commonApis/fetchServices";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [], // All fetched services
      searchQuery: "", // User's search input
      isLoading: false, // Loading state
      error: null, // Error state
    };
  }

  componentDidMount() {
    this.fetchServices();
  }

  fetchServices = async () => {
    const services = await fetchAllServices();
    this.setState({ services: services, isLoading: false });
  };

  // Handle changes in the search input
  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  // Filter services based on the search query
  filterServices = () => {
    const { services, searchQuery } = this.state;

    if (!searchQuery.trim()) {
      return []; // No search query; return empty to trigger custom design
    }

    const lowerCaseQuery = searchQuery.toLowerCase();

    return services.filter((service) => {
      const name = service.name?.toLowerCase() || "";
      const doctor = service.doctor || {};
      const doctorName = doctor.name?.toLowerCase() || "";
      const qualifications = doctor.qualifications?.toLowerCase() || "";
      const designation = doctor.designation?.toLowerCase() || "";
      const specialty = doctor.specialty?.toLowerCase() || "";
      const totalExperience = doctor.total_experience
        ? doctor.total_experience.toString().toLowerCase()
        : "";

      return (
        name.includes(lowerCaseQuery) ||
        doctorName.includes(lowerCaseQuery) ||
        qualifications.includes(lowerCaseQuery) ||
        designation.includes(lowerCaseQuery) ||
        specialty.includes(lowerCaseQuery) ||
        totalExperience.includes(lowerCaseQuery)
      );
    });
  };

  // Helper function to style the last word of a given text
  styleLastWord = (text) => {
    if (!text) return "";

    const words = text.trim().split(" ");
    if (words.length === 0) return text;

    const lastWord = words.pop();
    const remainingText = words.join(" ");

    return (
      <>
        {remainingText} <span style={{ color: "var(--pink)" }}>{lastWord}</span>
      </>
    );
  };

  // Render the custom design when there's no search query
  renderCustomDesign = () => (
    <>
      <div className="custom-design space pb-1" style={{ textAlign: "center" }}>
        <h1 className="banner-black mb-2">
          Search <span style={{ color: "var(--pink)" }}>Service</span> &{" "}
          <span style={{ color: "var(--neon)" }}>Doctor</span> Here
        </h1>
        <p className="mb-0">
          Use the search bar above to find the best doctors and services
          tailored to your needs.
        </p>
      </div>
      <div className="row space d-flex justify-content-center">
        <div className="col-9">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <div className="searchservice me-lg-3 mb-3">
                <img src={ss} alt="Doctors" />
              </div>
              <div className="searchdoctor ms-lg-3 mb-3">
                <img src={sd} alt="Services" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  render() {
    const { searchQuery, isLoading, error } = this.state;
    const filteredServices = this.filterServices();

    return (
      <div className="container">
        <div className="container-fluid px-0 about space pb-0">
          <div>
            {/* Search Input */}
            <div className="mt-4">
              <input
                type="text"
                className="form-control mb-4"
                style={{ color: "var(--black)" }}
                placeholder="Search doctor or services by name, specialty, designation, experience ..."
                value={searchQuery}
                onChange={this.handleSearchChange}
              />
              <div className="col-12">
                {/* Conditional Rendering */}
                {searchQuery.trim() === "" ? (
                  // Render custom design when search query is empty
                  this.renderCustomDesign()
                ) : (
                  // Render search results when search query is not empty
                  <>
                    {/* Loading Indicator */}
                    {isLoading && <p>Loading services...</p>}

                    {/* Error Message */}
                    {error && (
                      <p className="error-message" style={{ color: "red" }}>
                        {error}
                      </p>
                    )}

                    {/* Search Results */}
                    {!isLoading && !error && (
                      <ul className="mb-0 ps-0 " style={{ listStyle: "none" }}>
                        <h2 className="section-top mb-3 p-white-bold">
                          {filteredServices.length} Result
                          {filteredServices.length !== 1 ? "s" : ""}
                        </h2>
                        {filteredServices.length > 0 ? (
                          filteredServices.map((Service) => (
                            <li
                              className="mb-3"
                              key={Service.id || Service.name + Math.random()} // Use unique identifier
                              style={{
                                border: "1px solid #ccc",
                                borderRadius: 10,
                                overflow: "hidden",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                              }}
                            >
                              <div className="row">
                                {/* Service Details */}
                                <div className="col-6">
                                  <div className="row h-100">
                                    {/* Service Image */}
                                    <div className="col-lg-5">
                                      <div className="s-service">
                                        <img
                                          src={Service.image}
                                          alt={Service.name}
                                          style={{ width: "100%" }}
                                        />
                                      </div>
                                    </div>
                                    {/* Service Name and Description */}
                                    <div className="col-lg-7">
                                      <div className="py-3 px-2 px-lg-0">
                                        <h3 className="sub-heading-black mb-1 overflow-1">
                                          {Service.name}
                                        </h3>
                                        <p
                                          className="p-black-small overflow-4 mb-0"
                                          style={{ textAlign: "justify" }}
                                        >
                                          {Service.description}
                                        </p>
                                        <div>
                                          <div className="h-100 d-flex align-items-end justify-content-end mt-3">
                                            <a
                                              href={`/service/${Service.id}`}
                                              className="btn-pink">
                                              View More
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Doctor Details */}
                                <div className="col-6">
                                  <div className="row h-100">
                                    {/* Doctor Image and Name */}
                                    <div className="col-lg-5 d-flex align-items-center flex-column">
                                      <div className="s-doc">
                                        <img
                                          src={Service.doctor.image}
                                          alt={Service.doctor.name}
                                        />
                                      </div>
                                      <h2 className="p-black-bold doc-name overflow-1 mb-0 text-center mb-2">
                                        {this.styleLastWord(
                                          Service.doctor.name
                                        )}
                                      </h2>
                                    </div>
                                    {/* Doctor Qualifications and Details */}
                                    <div className="col-lg-7 py-3 px-2 px-lg-0 d-flex flex-column justify-content-center">
                                    <h3 className="p-black-bold mt-2 mb-1">
                                        Specialist in
                                      </h3>
                                      <p className="p-black-small mb-0 overflow-1">
                                        {Service.doctor.specialty}
                                      </p>
                                      <h3 className="p-black-bold mb-0">
                                        Qualification
                                      </h3>
                                      <p className="p-black-small mb-0 overflow-1">
                                        {Service.doctor.qualifications}
                                      </p>
                                     
                                      <h3 className="p-black-bold mt-2 mb-1">
                                        Designation
                                      </h3>
                                      <p className="p-black-small mb-0 overflow-1">
                                        {Service.doctor.designation}
                                      </p>
                                      <h4 className="p-black-bold mt-2 mb-1">
                                        Experience
                                      </h4>
                                      <p className="p-black-small mb-0 overflow-1">
                                        {Service.doctor.total_experience}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                        ) : (
                          <p>No services found</p>
                        )}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
