import React from "react";
import brain from "./images/brains.webp";
import addiction from "./images/addiction.webp";
import laser from "./images/laser.webp";
import chest from "./images/chest.webp";
import sandhu from "./images/sandhu.jpg";
import bbrain from "./images/brain.png";
import doc from "./images/doc.png";
import hospital from "./images/sandhuhospital.jpg";
import sandhuvideo from "./images/sandhu.mp4";
import m1 from "./images/h1.jpg";
import m2 from "./images/h2.jpg";
import banner from "./images/banner2.webp"

import { FaCircleCheck } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { BsFillChatQuoteFill } from "react-icons/bs";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function Index(props) {
  return (
    <>

    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-sticky"
      data-bs-offset="0"
      tabIndex="0"
      className="scrollspy-example"
    >
      <div className="container-fluid p-0">
        <div className="banner ">
           <img src={banner} alt="sandhu hospital" />
        </div>
      </div>

      <section className="space" style={{background:"aliceblue"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl">
              <div className="bluepromotion promotion">
                <h2 className="p-white-bold"> WE CARE FOR YOUR HEALTH</h2>
                <h3 className="section-heading-white"> FAMILY CARE</h3>
                <h4 className="sub-heading-white">
                  We Provide Healthcare Services
                </h4>
                <h5 className="p-white">
                  At Sandhu Hospital, Nawanshahar, we are dedicated to providing
                  exceptional healthcare across a wide range of specialties. As
                  a MultiSpeciality Hospital,Our compassionate and highly
                  skilled medical team ensures that every patient receives
                  personalized.
                </h5>
                <div className="h-100 d-flex align-items-end">

                <p className="sub-heading-white mb-1" style={{color:"var(--blue)"}}>
                        from 8 oct to 10 oct
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="pinkpromotion promotion">
              <h2 className="p-white-bold"> WE CARE FOR YOUR HEALTH</h2>
                <h3 className="section-heading-white"> FAMILY CARE</h3>
                <h4 className="sub-heading-white">
                  We Provide Healthcare Services
                </h4>
                <h5 className="p-white">
                  At Sandhu Hospital, Nawanshahar, we are dedicated to providing
                  exceptional healthcare across a wide range of specialties. As
                  a MultiSpeciality Hospital,Our compassionate and highly
                  skilled medical team ensures that every patient receives
                  personalized.
                </h5>
                <div className="h-100 d-flex align-items-end">

                <p className="sub-heading-white mb-1" style={{color:"var(--pink)"}}>
    from 8 oct to 10 oct
                </p>
                </div> 
              </div>
            </div>
            <div className="col-xl">
              <div className="neonpromotion promotion">
              <h2 className="p-white-bold"> WE CARE FOR YOUR HEALTH</h2>
                <h3 className="section-heading-white"> FAMILY CARE</h3>
                <h4 className="sub-heading-white">
                  We Provide Healthcare Services
                </h4>
                <h5 className="p-white">
                  At Sandhu Hospital, Nawanshahar, we are dedicated to providing
                  exceptional healthcare across a wide range of specialties. As
                  a MultiSpeciality Hospital,Our compassionate and highly
                  skilled medical team ensures that every patient receives
                  personalized.
                </h5>
                <div className="h-100 d-flex align-items-end">

                <p className="sub-heading-white mb-1" style={{color:"var(--neon)"}}>
    from 8 oct to 10 oct
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  className="space" id="services">
        <div className="container">
          <h2 className="section-top ">Our Services</h2>
          <div className="row">
            <div className="col-lg-5">
              <div
                className=" d-flex align-items-center"
                style={{ height: "100%" }}
              >
                <h3 className="section-heading-black my-0">
                  Where Every{" "}
                  <span style={{ color: "var(--neon)" }}>Patient</span> is
                  Family,{" "}
                  <span style={{ color: "var(--pink)" }}>Every Life</span> is
                  Precious
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="p-black my-0">
                At Sandhu Hospital, Nawanshahar, we are dedicated to providing
                exceptional healthcare across a wide range of specialties. As a
                MultiSpeciality Hospital,Our compassionate and highly skilled
                medical team ensures that every patient receives personalized,
                quality care in a comforting environment. At Sandhu Hospital,
                your health is our priority. we are proud to offer expert care
                in:
              </p>
            </div>
          </div>

          <div className="row my-2 py-3">
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={brain} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-1">Brain Diseases,</h2>
                <p className="p-black my-0 overflow-2">
                  Advanced treatments for neurological disorders and brain
                  health.
                </p>
              </div>
            </div>
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={addiction} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-2">De-addiction</h2>
                <p className="p-black my-0 overflow-2">
                  Comprehensive programs to help individuals overcome substance
                  abuse.
                </p>
              </div>
            </div>
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={laser} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-1">
                  Skin, Cosmetology & LASERs
                </h2>
                <p className="p-black my-0 overflow-2">
                  State-of-the-art skincare, cosmetic treatments, and LASER
                  therapy.
                </p>
              </div>
            </div>
            <div className="services-contain col-lg-3 mb-3 mb-lg-0">
              <div className="servicelimg">
                <img src={chest} alt="brain disease treatment" />
              </div>
              <div className="service-t mt-3">
                <h2 className="p-heading-black mt-0 mb-1">Chest Diseases:</h2>
                <p className="p-black my-0 overflow-2">
                  Specialized care for respiratory and internal medicine
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space" style={{background:"azure"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="white-to-blue ">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="d-flex align-items-start justify-content-between flex-column">
                      <h2 className="section-heading-white">
                        Healing Minds, <br />
                        Restoring Lives
                      </h2>

                      <div className="s1">
                        <div className="d-flex">
                          <div>
                            <h3 className="p-heading-white">
                              Breakthroughs in Brain Health, Every Day
                            </h3>

                            <div className="d-flex justify-content-between pe-3">
                              <div
                                className="d-inline-block"
                                style={{
                                  background:
                                    "linear-gradient(45deg, #313f70, #953986)",
                                  borderRadius: 6,
                                  padding: "2px 10px",
                                }}
                              >
                                <a
                                  className=" p-white-bold "
                                  href="tel:+01823222674"
                                  style={{
                                    textDecoration: "none",
                                    color: "var(--white)",
                                  }}
                                >
                                  <MdWifiCalling3
                                    className="sub-heading-white"
                                    style={{ marginRight: 6 }}
                                  />
                                  Call Us : 01823222674
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="simg">
                            <img src={sandhu} alt="sandhu hospital" />
                          </div>
                        </div>
                        <div className="mt-3">
                          <h4 className="p-white-bold mt-0 mb-1">
                            Leading the Way in Brain Health
                          </h4>
                          <p className="p-grey">
                            With advanced technology and a team of world-class
                            neurologists, we lead the field in brain health. Our
                            focus is on innovative treatment options and
                            personalized care plans that prioritize your
                            well-being and long-term brain health.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="mains">
                      <div className="mimg ">
                        <img
                          src={bbrain}
                          alt="sandhu hospital"
                          className="animate__animated animate__pulse animate__infinite "
                        />
                        <div className="mab1">
                          <p className="my-0 p-heading-white">
                            Empowering Brains to Thrive Again
                          </p>
                        </div>
                        <div className="mab2">
                          <p className="my-0 p-heading-white">
                            Innovative Care for a Brighter Brain Future
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </section>

      <section  className="space"  id="about"
        style={{ background: "floralwhite" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-top ">About us</h2>
              <h3 className="section-heading-black mt-3">
                Healing  <span style={{color:"var(--pink)"}}>Hands</span>, Caring  <span style={{color:"var(--neon)"}}>Hearts</span>
              </h3>

              <p className="p-black mt-4">
                Sandhu Hospital, located in Nawanshahar, is a premier
                multispecialty healthcare center dedicated to providing
                comprehensive medical services. The hospital offers specialized
                treatment for brain diseases, de-addiction, skin conditions,
                cosmetology, and advanced LASER procedures. It is also renowned
                for its expertise in medicine, chest diseases, and general &
                laparoscopic surgery. Equipped with a state-of-the-art
                laboratory, an advanced medical I.C.U., and round-the-clock
                emergency services, Sandhu Hospital ensures top-quality care and
                treatment for patients in a wide range of medical disciplines.
              </p>
              <div className="row">
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0">General Surgery</p>
                  </div>
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0">Laparoscope Surgery Laboratory</p>
                  </div>
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0">  24Hr Emergency</p>
                  </div>
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0">Advanced Medical I.C.U.</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div
                  className="d-inline-block"
                  style={{
                    background: "linear-gradient(45deg, #313f70, #953986)",
                    borderRadius: 6,
                    padding: 10,
                  }}
                >
                  <a
                    className=" p-white-bold "
                    href="tel:+01823222674"
                    style={{
                      textDecoration: "none",
                      color: "var(--white)",
                      padding: "10px !important",
                    }}
                  >
                    <MdWifiCalling3
                      className="sub-heading-white"
                      style={{ marginRight: 6 }}
                    />
                    Call Us : 01823222674
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div
                className="doctor"
                style={{ position: "relative", zIndex: 1 }}
              >
                <div className="doctor-inner">
                  <img src={doc} alt="sadhu hospital" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space" id="who">
        <div className="container">
          <h2 className="section-top ">Conditions We Treat</h2>
          <div className="row mt-3">
            <div className="col-lg-3  mb-3 mb-0">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">Brain Disorders</h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Including stroke, epilepsy, Parkinson’s disease, dementia, and
                  neurological conditions.
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  We use Advanced diagnostics, medications, neurorehabilitation,
                  and minimally invasive surgery.
                </p>
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0">
              <div className="cwt2">
                <img src={brain} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">Substance Abuse</h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Alcohol, drug, and behavioral addictions.
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  Medical detox, counseling, behavioral therapy, and long-term
                  rehabilitation.
                </p>
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0 ">
              <div className="cwt2">
                <img src={addiction} alt="sandhu hospital" />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3   mb-3 mb-0 ">
              <div className="cwt2">
                <img src={laser} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0 ">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">Skin Diseases</h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Acne, eczema, psoriasis, fungal infections,Wrinkles, scars,
                  pigmentation, hair loss.
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  Topical treatments, medications, Cosmetic procedures and LASER
                  treatments for rejuvenation and hair removal.
                </p>
              </div>
            </div>
            <div className="col-lg-3  mb-3 mb-0 ">
              <div className="cwt2">
                <img src={chest} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-3   mb-2 mb-0">
              <div className="cwt1">
                <h2 className="sub-heading-black mt-0 mb-2">
                  Respiratory Diseases
                </h2>
                <p
                  className="p-blue-small my-0 overflow-2"
                  style={{ textAlign: "justify" }}
                >
                  Pneumonia,Pulmonary Fibrosi, Asthma, bronchitis, pneumonia,
                  COPD.,Emphysema
                </p>

                <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
                <p className="p-black overflow-3 mt-0 mb-2">
                  We provide tailored treatments that include medications,
                  inhalation therapy, pulmonary rehabilitation, oxygen therapy,
                  and in severe cases, advanced interventions like mechanical
                  ventilation and surgical procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="space" style={{background:"aliceblue"}}>
        <div className="container">

          <div className="d-flex flex-lg-row justify-content-lg-between flex-column justify-content-start align-items-lg-center">
          <h2 className="section-top me-lg-5 " style={{whiteSpace:"nowrap"}}>Our Gallery</h2>
          <p className="p-black mb-0">
          Discover the heart of Sandhu Hospital through our gallery. 
          Browse images that showcase our advanced facilities, 
          compassionate staff, and the welcoming environment 
          we provide for our patients. Each photo reflects our
           commitment to excellence in healthcare
          </p>

          </div>
           <div className="space">
           <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1400 :4}}
            >
                <Masonry  gutter="20px" className=" masonry"  >
               
                    
                    <img src={brain} style={{width: "100%", display: "block" }} alt="sandhu hospital Nawanshahar images"/>
                    <img src={laser} style={{width: "100%", display: "block"}} alt="sandhu hospital Nawanshahar images" />
                    <img  src={chest} style={{width: "100%", display: "block"}} alt="sandhu hospital Nawanshahar images" />
                    <div style={{position: "relative", width:"100%", height:'100%', margin:"0px"}}>
                      <div className="overlaygll m-0">

                       <div className="play-btn m-0"></div>
                      </div>
                    <video loop autoPlay muted>
                      <source src={sandhuvideo} type="video/mp4"/>
                  
                     Your browser does not support the video tag.
                    </video>
                    </div>
                    <img  src={hospital} style={{width: "100%", display: "block"}} alt="sandhu hospital Nawanshahar images" />
                    <img  src={m1} style={{width: "100%", display: "block"}} alt="sandhu hospital Nawanshahar images" />
                    <img  src={m2} style={{width: "100%", display: "block"}} alt="sandhu hospital Nawanshahar images" />
                </Masonry>
            </ResponsiveMasonry>
           </div>
        </div>
      </section>


      <section id="testimonial" className="space">
     <div className="container">
          <h2 className="section-top mb-4 " style={{whiteSpace:"nowrap"}}>What Our Patients Say</h2>
     <div className="row">
       <div className="col-lg-5">
          <h3 className="section-heading-black ">
          Stories of <span style={{color:"var(--pink)"}}>Healing,</span>   <br /> Voices of  <span style={{color:"var(--neon)"}}>Trust</span> 
          </h3>
       </div>
         <div className="col-lg-7">
          <p className="p-black mb-0">
          Discover the heart of Sandhu Hospital through our gallery. 
          Browse images that showcase our advanced facilities, 
          compassionate staff, and the welcoming environment 
          we provide for our patients. Each photo reflects our
           commitment to excellence in healthcare
          </p>
         </div>
          </div>
      <div className="row space">
        <div className="col-lg-4">
          <div className="testimonial">
            <div className="outer-tag">
              <div className="inner-tag">
                <h3 className="section-heading-white"><BsFillChatQuoteFill /></h3>
              </div>
            </div>
         <p className="p-black">
            Lorem ipsum dolor sit amet
             consectetur adipisicing elit.
              Optio laborum aut esse illum
               corporis vel deserunt a. Libero voluptatibus eaque facere possimus?
                </p>
                <p className="p-black-bold text-end">
            ---sakshi sharma
          </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial">
            <div className="outer-tag">
              <div className="inner-tag">
                <h3 className="section-heading-white"><BsFillChatQuoteFill /></h3>
              </div>
            </div>
         <p className="p-black">
         "I had an excellent experience at Sandhu Hospital.
          The staff were professional and attentive, making
           me feel comfortable throughout my treatment. The
            facilities were clean, and the doctors took the 
            time to explain everything. Highly recommend!"
               </p>
              <p className="p-black-bold text-end">
            ---Rakesh sharma
          </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial">
            <div className="outer-tag">
              <div className="inner-tag">
                <h3 className="section-heading-white"><BsFillChatQuoteFill /></h3>
              </div>
            </div>
<p className="p-black">
"The care I received at Sandhu Hospital
 was exceptional. From the nurses to the doctors,
  everyone showed genuine 
compassion and concern for my well-being
. They made a stressful situation much easier to handle. 
Thank you for your excellent service!"</p>
<p className="p-black-bold text-end">
            ---Himesh sharma
          </p>
          </div>
        </div>
      </div>
     </div>
      </section>
    </div>
    </>
  );
}

// src/components/Index.js
