import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import addiction from "./images/addiction.webp";
import doc from "./images/doctor.webp";
import brain from "./images/brains.webp";
import laser from "./images/laser.webp";
import chest from "./images/chest.webp";
import hospital from "./images/sandhuhospital.jpg";
import sandhuvideo from "./images/sandhu.mp4";
import m1 from "./images/h1.jpg";
import m2 from "./images/h2.jpg";

export default function Service() {
    const changeLastWord = () => {
        const elements = document.querySelectorAll('.sdoc-name');
    
        elements.forEach((element) => {
          const words = element.innerText.split(' ');
          if (words.length >= 1) { // Ensure there's at least one word
            words[words.length - 1] = `<span style="color:var(--pink)">${words[words.length - 1]}</span>`;
            element.innerHTML = words.join(' ');
          }
        });
      };
    
      // Execute the word change effect once the component is mounted
      useEffect(() => {
        changeLastWord();
      }, []);
      useEffect(() => {
        changeLastWord();
      }, []);
    
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
    <div>
          <div className="container space pb-0">
        
            <div className="row mt-lg-5 mt-3 px-lg-5 px-3" style={{ height: "100%" }}>

                <div className="col-lg-4 col-md-5 col-12">
                    <div className="doc-s">
                    <img src={doc} alt=" doctor name"/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                <h1 className='banner-black  mb-3'>
           cure <span style={{color:" var(--pink)"}}>De-addiction</span> 
            </h1>
                   
                    <h2 className='sub-heading-black sdoc-name  '>
               ARAV RAJ SHARAMA
              </h2>
                    <h3 className='p-heading-black mt-2 mb-0'> Qualification</h3>
              <p className='p-black mb-0 overflow-2'>MBBS, MD, DM</p>
              <h3 className='p-heading-black mt-2 mb-1'>Specialist in</h3>
              <p className='p-black mb-0 overflow-2'>Cardiologist </p>
              <h4 className='p-heading-black mt-2 mb-1'>Phone no.</h4>
              <p className='p-black mb-0 overflow-2'><a href="tel:0987654321" className='p-black'>0987654321</a> </p>
              <h4 className='p-heading-black mt-2 mb-1'>Experience</h4>
              <p className='p-black mb-0 overflow-2 '>
               15 years of experience 
              </p>
              <h5 className='p-heading-black mt-2 mb-1'>About Doctor</h5>
              <p className='p-black mb-3 overflow-3 '>
              Dr. Aarav raj Sharma is a highly skilled and compassionate 
              medical professional with extensive experience in
              Cardiologist. Dedicated to patient care and well-being,
               Dr. Aarav raj Sharmautilizes advanced techniques and a personalized 
               approach to ensure the best outcomes. Trusted for their expertise,
                they are committed to providing top-quality healthcare and helping 
                patients achieve optimal health.
              </p>
              <div className="d-flex justify-content-end">
               <Link to="/doctor" className='btn-pink'>
                  Know more
               </Link>
              </div>

                   
                </div>
             <div className="mt-4 col-lg-12">
            <div className="mt-3 row">
            <div className="col-lg-8 col-md-12 col-12">
            <h2 className='section-heading-black mb-5'> About <span style={{color:"var(--pink)"}}>De-addiction</span></h2>
            <p className='p-black'>
            At Sandhu Hospital, we understand that overcoming addiction is a journey,
             and we are dedicated to supporting individuals at every step of that path. 
             Our comprehensive de-addiction program is designed to provide holistic care,
              blending medical treatment, psychological support, and personalized counseling.
            </p>
            <p className="p-black">
              We focus on addressing the physical, mental, and emotional aspects of addiction,
               guiding patients through safe detoxification, behavioral therapy, and rehabilitation.
                Our experienced team of doctors, counselors, and therapists work together to create a
                 compassionate, non-judgmental environment, where individuals can recover and reclaim 
                 control of their lives.

            </p>
            <p className="p-black">
                Our goal is to help patients break free from the grip of addiction and rebuild their 
                lives with a renewed sense of purpose and well-being.

            </p>



                 </div>
                <div className="col-lg-4 col-md-7 col-12">
                <h2 className='section-heading-black '> Days & <span style={{color:"var(--pink)"}}>OPD timings</span></h2>
                <ul className='days-ul ps-0 mb-0 mt-5' style={{listStyle:"none"}}>
                    <li>
                        <div className='row'>
                        <div className='  col-4'>
                            <div className=' outerday-tag'>
                        <p className="p-heading-white mb-0  innerday-tag">MON</p> 
                            </div>
                        </div>
                        <div className=' col-8 d-flex align-items-center'>
                          <p className="p-heading-white color mb-0"> 10:00-15:00</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className='row'>
                        <div className='  col-4'>
                            <div className=' outerday-tag'>
                        <p className="p-heading-white mb-0  innerday-tag">TUE</p> 
                            </div>
                        </div>
                        <div className=' col-8 d-flex align-items-center'>
                          <p className="p-heading-white color mb-0"> 10:00-15:00</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className='row'>
                        <div className=' col-4'>
                            <div className=' outerday-tag'>
                        <p className="p-heading-white mb-0  innerday-tag">WED</p> 
                            </div>
                        </div>
                        <div className=' col-8 d-flex align-items-center'>
                          <p className="p-heading-white color mb-0"> 10:00-15:00</p>
                        </div>
                        </div>
                    </li>
                    <li className='off'>
                        <div className='row'>
                        <div className=' col-4'>
                            <div className=' outerday-tag'>
                        <p className="p-heading-white mb-0  innerday-tag">THU</p> 
                            </div>
                        </div>
                        <div className=' col-8 d-flex align-items-center'>
                          <p className="p-heading-white color mb-0">Off day</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className='row'>
                        <div className=' col-4'>
                            <div className=' outerday-tag'>
                        <p className="p-heading-white mb-0  innerday-tag">FRI</p> 
                            </div>
                        </div>
                        <div className=' col-8 d-flex align-items-center'>
                          <p className="p-heading-white color mb-0"> 10:00-15:00</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className='row'>
                        <div className=' col-4'>
                            <div className=' outerday-tag'>
                        <p className="p-heading-white mb-0  innerday-tag">SAT</p> 
                            </div>
                        </div>
                        <div className=' col-8 d-flex align-items-center'>
                          <p className="p-heading-white color mb-0"> 10:00-15:00</p>
                        </div>
                        </div>
                    </li>
                    <li className='off'>
                        <div className='row'>
                        <div className=' col-4'>
                            <div className=' outerday-tag'>
                        <p className="p-heading-white mb-0  innerday-tag">SUN</p> 
                            </div>
                        </div>
                        <div className=' col-8 d-flex align-items-center'>
                          <p className="p-heading-white color mb-0"> 10:00-15:00</p>
                        </div>
                        </div>
                    </li>
                 
                 
                 
                  
                
                  
                </ul>
                </div>
               
            </div>
         
             </div>
             </div>


             <section className="mt-4" id="who">
        <div className="container">
          <h2 className="section-top ">Conditions We Treat</h2>
          <div className="row mt-3">
            <div className="col-lg-8  mb-3 mb-0">
              <div className="cwt p-3">
                <h2 className="sub-heading-black mt-0 mb-2">Brain Disorders</h2>
                <p
                  className="p-blue-small "
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
            <div className="col-lg-4  mb-3 mb-0">
              <div className="cwt">
                <img src={brain} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-4  mb-3 mb-0 ">
              <div className="cwt">
                <img src={addiction} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-8  mb-3 mb-0">
              <div className="cwt p-3">
                <h2 className="sub-heading-black mt-0 mb-2">Substance Abuse</h2>
                <p
                  className="p-blue-small "
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
        
          </div>
          <div className="row mt-3">
           
            <div className="col-lg-8  mb-3 mb-0 ">
              <div className="cwt p-3">
                <h2 className="sub-heading-black mt-0 mb-2">Skin Diseases</h2>
                <p
                  className="p-blue-small "
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
            <div className="col-lg-4   mb-3 mb-0 ">
              <div className="cwt">
                <img src={laser} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-0 ">
              <div className="cwt">
                <img src={chest} alt="sandhu hospital" />
              </div>
            </div>
            <div className="col-lg-8   mb-2 mb-0">
              <div className="cwt p-3">
                <h2 className="sub-heading-black mt-0 mb-2">
                  Respiratory Diseases
                </h2>
                <p
                  className="p-blue-small "
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
      <div id="gallery" className="space pb-0 " style={{background:"aliceblue"}}>
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
              <Masonry
                  className=" masonry"
                  columnClassName="masonry-grid_column"
                  gutter="20px"
                >
                  {/* Image Items */}
                  <a
                    data-fancybox="gallery"
                    href={brain}
                    className="gallery-cap"
                  >
                    <div className="gallery-capi">
                      <p className="p-white-bold mb-0">brain disease</p>
                    </div>
                    <img
                      src={brain}
                      style={{ width: "100%", display: "block" }}
                      alt="sandhu hospital Nawanshahar images"
                    />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href={laser}
                    className="gallery-cap"
                  >
                    <div className="gallery-capi">
                      <p className="p-white-bold mb-0">laser treatment</p>
                    </div>
                    <img
                      src={laser}
                      style={{ width: "100%", display: "block" }}
                      alt="sandhu hospital Nawanshahar images"
                    />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href={chest}
                    className="gallery-cap"
                  >
                    <div className="gallery-capi">
                      <p className="p-white-bold mb-0">Chest Disease</p>
                    </div>
                    <img
                      src={chest}
                      style={{ width: "100%", display: "block" }}
                      alt="sandhu hospital Nawanshahar images"
                    />
                  </a>

                  {/* Video Item */}
                  <a
                    data-fancybox="gallery"
                    href={sandhuvideo}
                    className="gallery-cap"
                  >
                    <div className="gallery-capi">
                      <p className="p-white-bold mb-0">message</p>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div className="overlaygll m-0">
                        <div className="play-btn m-0"></div>
                      </div>
                      <video loop autoPlay muted style={{ width: "100%" }}>
                        <source src={sandhuvideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </a>

                  {/* More Image Items */}
                  <a
                    data-fancybox="gallery"
                    href={hospital}
                    className="gallery-cap"
                  >
                    <div className="gallery-capi">
                      <p className="p-white-bold mb-0">skin care</p>
                    </div>
                    <img
                      src={hospital}
                      style={{ width: "100%", display: "block" }}
                      alt="sandhu hospital Nawanshahar images"
                    />
                  </a>
                  <a data-fancybox="gallery" href={m1} className="gallery-cap">
                    <div className="gallery-capi">
                      <p className="p-white-bold mb-0">skin care</p>
                    </div>
                    <img
                      src={m1}
                      style={{ width: "100%", display: "block" }}
                      alt="sandhu hospital Nawanshahar images"
                    />
                  </a>
                  <a data-fancybox="gallery" href={m2} className="gallery-cap">
                    <div className="gallery-capi">
                      <p className="p-white-bold mb-0">skin care</p>
                    </div>
                    <img
                      src={m2}
                      style={{ width: "100%", display: "block" }}
                      alt="sandhu hospital Nawanshahar images"
                    />
                  </a>
                </Masonry>
            </ResponsiveMasonry>
           </div>
           </div>
      </div>
                
            



          </div>
    </div>
  )
}  
