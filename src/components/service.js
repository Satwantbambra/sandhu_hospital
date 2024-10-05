import React from 'react';
import doc from "./images/doctor.webp";
export default function Service() {
  return (
    <div>
          <div className="container space">
            <h1 className='banner-black text-lg-center'>
           cure <span style={{color:" var(--pink)"}}>De-addiction</span> 
            </h1>
            <div className="row mt-lg-5 mt-3 px-lg-5 px-3" style={{ height: "100%" }}>

          
             
             <div className="mt-4 col-lg-12">
            <h2 className='section-heading-black'> Why Choose Us</h2>
            <p className="p-black">
            At Sandhu Hospital, we are dedicated to providing exceptional healthcare 
            with compassion and expertise. Our commitment to patient-centered care ensures
             that each individual receives personalized attention and treatment tailored to 
             their unique needs. With a team of highly skilled professionals and advanced 
             medical technologies, we strive to deliver the highest quality of healthcare 
             services in a comfortable and supportive environment.
            </p>
             </div>
             <div className="col-lg-12 mt-4">
             <h3 className='section-heading-black'> Facilities</h3> 
             <p className='p-black'>
             At Sandhu Hospital, we pride ourselves on our state-of-the-art facilities
              designed to enhance patient care and comfort. From advanced diagnostic equipment
               to modern patient rooms, our hospital is equipped to meet the diverse needs of our
                community. We strive to create a healing environment that promotes wellness and recovery 
                for all our patients.
             </p>

             <ul className='ps-2 mb-0' style={{listStyle:"decimal"}}>
              <li>
               <h4 className='p-black-bold'>Multispecialty Services:</h4>
               <p className='p-black'>
               We offer a wide range of medical specialties,
                including cardiology, orthopedics, gynecology, and more,
                 ensuring comprehensive care for all patients.
                </p> 
              </li>
              <li>
               <h4 className='p-black-bold'> 24/7 Emergency Services:</h4>
               <p className='p-black'>We offer a wide range of medical specialties, including
                 cardiology, orthopedics, gynecology, and more, ensuring
                  comprehensive care for all patients.</p> 
              </li>
              <li>
               <h4 className='p-black-bold'>Patient-Centric Approach:</h4>
               <p className='p-black'>We prioritize the comfort and 
                well-being of our patients, offering spacious rooms,
                 nutritious meal options, and access to support 
                 services to aid in recovery.</p> 
              </li>
              <li>
               <h4 className='p-black-bold'> Skilled Medical Team:</h4>
               <p className='p-black'> Our team of doctors, nurses, and support
                 staff are dedicated to providing the best possible care,
                  ensuring that you feel safe and supported throughout your
                   healthcare journey.
                   </p> 
              </li>
            

             </ul>
             </div>
                
            </div>
          </div>
    </div>
  )
}
