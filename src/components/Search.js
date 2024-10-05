import React, { useEffect, useState } from 'react';
import doc from "./images/doctor.webp";
import doc2 from "./images/doctor2.webp";
import doc3 from "./images/doctor3.webp";

function About() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const doctors = [
    {
      name: "Dr. Aarav raj Sharma",
      qualification: "MBBS, MD, DM",
      specialization: "Cardiologist",
      experience: "With over 15 years of experience in cardiology, Dr. Aarav raj Sharma has dedicated his career to diagnosing and treating various heart conditions.",
      image: doc,
    },
    {
      name: "Dr. Jasleen Kaur",
      qualification: "MBBS, MD, DM",
      specialization: "Cardiologist",
      experience: "With over 10 years of experience, Dr. Jasleen Kaur specializes in heart conditions and cardiovascular treatments.",
      image: doc2,
    },
    {
      name: "Dr. Harjinder Singh",
      qualification: "MBBS, MD, DM",
      specialization: "Cardiologist",
      experience: "With over 20 years of experience, Dr. Harjinder Singh has expertise in treating complex cardiac issues.",
      image: doc3,
    },
  ];

  const changeLastWord = () => {
    const elements = document.querySelectorAll('.doc-name');
    elements.forEach((element) => {
      const words = element.innerText.split(' ');
      if (words.length >= 1) {
        words[words.length - 1] = `<span style="color:var(--pink)">${words[words.length - 1]}</span>`;
        element.innerHTML = words.join(' ');
      }
    });
  };

  useEffect(() => {
    changeLastWord();
    setFilteredDoctors(doctors); // Initialize with all doctors
  }, []);

  useEffect(() => {
    // Filter doctors based on the search query
    const results = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDoctors(results);
  }, [searchQuery]);

  return (
    <div>
      <div className="container-fluid px-0 about space pb-0">
        <div className="container space">
            <h1 className='banner-black text-lg-center'>
              Search <span style={{color:" var(--pink)"}}>Doctors</span> or <span style={{color: " var(--neon)"}}>Services</span>
            </h1>
          <div className="mt-5">
            <input
              type="text"
              className="form-control mb-4" style={{color:"var(--black) !important"}}
              placeholder="Search  doctor or services by name, specialty ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="row">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="team-card">
                    <div className="row">
                      <div className="col-6">
                        <div className='pt-5 pb-3 ps-4'>
                          <h2 className='sub-heading-black doc-name'>
                            {doctor.name}
                          </h2>
                          <h3 className='p-black-bold mt-2 mb-0'>Qualification</h3>
                          <p className='p-black mb-0 overflow-2'>{doctor.qualification}</p>
                          <h4 className='p-black-bold mt-2 mb-1'>Specialist in</h4>
                          <p className='p-black mb-0 overflow-2'>{doctor.specialization}</p>
                          <h4 className='p-black-bold mt-2 mb-1'>Experience</h4>
                          <p className='p-black mb-0 overflow-2'>{doctor.experience}</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="team-img">
                          <img src={doctor.image} alt={doctor.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ):(
            <div className="col-12 ">
                <h3 className="p-black">No records found!</h3>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
