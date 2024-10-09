import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import doc from "./images/doctor.webp";
import doc2 from "./images/doctor2.webp";
import doc3 from "./images/doctor3.webp";

const Team = () => {
    // Team data
    const teamMembers = [
      {
        id: 1,
        name: 'Dr. Aarav Raj Sharma',
        qualification: 'MBBS, MD, DM',
        specialist: 'Cardiologist',
        experience:
          'With over 15 years of experience in cardiology, Dr. Aarav Raj Sharma has dedicated his career to diagnosing and treating various heart conditions.',
        image: doc,
      },
      {
        id: 2,
        name: 'Dr. Jasleen Kaur',
        qualification: 'MBBS, MD, DM',
        specialist: 'Cardiologist',
        experience:
          'With over 15 years of experience in cardiology, Dr. Jasleen Kaur has dedicated her career to diagnosing and treating various heart conditions.',
        image: doc2,
      },
      {
        id: 3,
        name: 'Dr. Harjinder Singh',
        qualification: 'MBBS, MD, DM',
        specialist: 'Neurologist',
        experience:
          'With over 15 years of experience in neurologist, Dr. Harjinder Singh has dedicated his career to diagnosing and treating various heart conditions.',
        image: doc3,
      },
    ];
  
    // State to store the search input
    const [searchInput, setSearchInput] = useState('');
  
    // Function to handle search input changes
    const handleSearchChange = (e) => {
      setSearchInput(e.target.value);
    };
  
   // Filter team members based on search input
  const filteredTeam = teamMembers.filter((member) =>
    // Check if the search input matches any field (name, qualification, specialist, experience)
    member.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    member.qualification.toLowerCase().includes(searchInput.toLowerCase()) ||
    member.specialist.toLowerCase().includes(searchInput.toLowerCase()) ||
    member.experience.toLowerCase().includes(searchInput.toLowerCase())
  );
    return (
        <div className="container">
          <div className="space">
          {/* Search Input */}
          <div className="row mb-4">
            <div className="col-lg-12">
              <input style={{ color: 'var(--black) !important' }}
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchChange}
              />
            </div>
          </div>
    
          {/* Section heading */}
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex align-items-center" style={{ height: '100%' }}>
                <h3 className="section-heading-black my-0">
                  Together, We{' '}
                  <span style={{ color: 'var(--neon)' }}>Strive</span> for
                  Excellence in{' '}
                  <span style={{ color: 'var(--pink)' }}>Patient </span> Care.
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="p-black my-0">
                Our dedicated team of healthcare professionals is committed to
                providing compassionate and personalized care. With a wealth of
                experience and expertise, we work collaboratively to ensure the best
                outcomes for our patients. Together, we strive to create a
                supportive environment where your health and wellbeing are our top
                priorities.
              </p>
            </div>
          </div>
    
          {/* Team Cards */}
          <div className="mt-5">
            <div className="row">
              {filteredTeam.length > 0 ?  (
                filteredTeam.map((member) => (
                  <div className="col-lg-4 mb-3 mb-lg-0" key={member.id}>
                    <div className="team-card">
                      <div className="view animate__fadeIn animate__animated">
                        <Link to="/doctor" className="btn-pink">
                          View More
                        </Link>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="pt-5 pb-3 ps-4">
                            <h2 className="sub-heading-black doc-name">
                              {member.name}
                            </h2>
                            <h3 className="p-black-bold mt-2 mb-0">
                              Qualification
                            </h3>
                            <p className="p-black mb-0 overflow-2">
                              {member.qualification}
                            </p>
                            <h4 className="p-black-bold mt-2 mb-1">Specialist in</h4>
                            <p className="p-black mb-0 overflow-2">
                              {member.specialist}
                            </p>
                            <h4 className="p-black-bold mt-2 mb-1">Experience</h4>
                            <p className="p-black mb-0 overflow-2">
                              {member.experience}
                            </p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="team-img">
                            <img
                              src={member.image}
                              alt={`doctor ${member.name}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p>No team members found</p>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      );
    };

export default Team