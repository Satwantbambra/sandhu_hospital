import React from 'react'
import { MdWifiCalling3 } from "react-icons/md";
export default function Footer() {
  return (
    <div>
      <footer className="space">
      <div className="container">

            <div className="d-flex align-items-center justify-content-lg-center mb-3 ">
                  <i className="fa-solid fa-house-medical banner-white me-1" style={{color: 'var(--pink)'}}></i>
                  <h2 className="banner-white my-0">
                        Sandhu <span style={{color: 'var(--pink)'}}> hospital</span> , Nawanshahar
                  </h2>
            </div>
            <hr style={{border:'1px solid #fff'}}/>
            <div className="row py-lg-4">
                  <div className="col-lg-4 mb-3 mb-lg-0">
                        <h3 className="sub-heading-white mt-0 mb-2">
                              Meet Sandhu Hospital
                        </h3>
                        <p className="p-white my-0" style={{textAlign: 'justify'}}>
                              Sandhu Hospital, Nawanshahar, is a leading MultiSpeciality Hospital specializing in Brain
                              Diseases, De-addiction, Skin, Medicine, and Surgery, offering 24/7 emergency care with
                              advanced diagnostics and an ICU. Compassionate care for every patient.</p>

                        <ul className="footer-ul mt-3">
                              <li>
                                    <a href="#" className="p-white"><i className="fa-solid fa-location-dot"></i>
                                          CHANDIGARH ROAD, Near Barnala Gate, NAWANSHAHAR (Old address Saloh Rd, Nsr) ,
                                          Nawanshahr Doaba, India, Punjab region</a>
                              </li>

                              <li>
                                    <a href="tel:09872620674" className="p-white"><i className="fa-solid fa-phone"></i> 09872620674</a>
                              </li>
                              <li>
                                    <a href="mailto:sandhuhospital@yahoo.in" className="p-white"><i
                                                className="fa-solid fa-envelope"></i>sandhuhospital@yahoo.in</a>
                              </li>

                        </ul>


                  </div>
                  <div className="col-lg-4 mb-3 mb-lg-0 d-flex align-items-start justify-content-lg-center ">
                        <div>
                              <h3 className="sub-heading-white mt-0 mb-2">
                                    Discover More
                              </h3>
                              <ul className="footer-ul">
                                    <li>
                                          <a href="#" className="p-white-bold">
                                                <i className="fa-solid fa-circle-arrow-right"></i>Home
                                          </a>
                                    </li>
                                    <li>
                                          <a href="#" className="p-white-bold">
                                                <i className="fa-solid fa-circle-arrow-right"></i>About us
                                          </a>
                                    </li>
                                    <li>
                                          <a href="#" className="p-white-bold">
                                    <i className="fa-solid fa-circle-arrow-right"></i>OurServices</a>
                                    </li>
                                    <li>
                                          <a href="#" className="p-white-bold">
                                          <i className="fa-solid fa-circle-arrow-right"></i>How We Care</a>
                                    </li>
                                
                              </ul>
                        </div>

                  </div>
                  <div className="col-lg-4 mb-3 mb-lg-0">
                        <div>
                              <h3 className="sub-heading-white mt-0 mb-2">
                                    Join the Conversation
                              </h3>
                              <ul className="footer-ul">
                                    <li className="d-flex mb-1">
                                          <a href="https://www.facebook.com/profile.php?id=100063722508860" className="p-white-bold" >
                                      <i className="fa-brands fa-facebook"></i>Facebook</a></li>
                                      <li className="d-flex mb-1">
                                          <a href="https://api.whatsapp.com/send?phone=%2B919872620674&context=ARB6o1Ic__xCNYvIJiWLOIx2K9cFkuVCLcvYUiK89e-0vVD5cdUSUPrMzRCuxWiPCanb42fuoMWc5-qkntQHx5iO_895LRdYsTxfR158BIjwXjf7-T9UNJ6Xv_Kxk9Nh67k21an873kRxrnX5kNFW3Tdnw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFWAelleHRuA2FlbQIxMAABHVNQfjquyj1K2dZkp8ZA8-2U9tygqUn5-2Xy1uR74jJpa1nt6l_o4YKwfw_aem_T_4k8jbdHxKsRzpXQ8cjcg"
                                           className="p-white-bold" >
                                          <i className="fa-brands fa-whatsapp"></i>Whatsapp</a></li>

                              </ul>

                        </div>
                        <div className="mt-3">
                              <h3 className="sub-heading-white mt-0 mb-2">
                        We’re Here to Help
                              </h3>
                              <div className="d-inline-block" style={{background: 'linear-gradient(45deg, #313f70, #953986)', borderRadius: 6,padding:10 }}> 
                                <a className=" p-white-bold " href="tel:+01823222674" style={{ textDecoration:'none', color: 'var(--white)', padding:'10px !important'}}> 
                                <MdWifiCalling3 className='sub-heading-white'  style={{marginRight: 6}}/>Call Us : 01823222674
                                </a>
                            </div>
                        </div>
                       
                  </div>
            </div>
  <div className="row">
    <div className="col-lg-5 mb-3 mb-lg-0">
      <div className="d-flex justify-content-start">
            <div className="d-flex footer-ul justify-content-between ">
                  <a href="#" className="p-white-bold">
                        Privacy Policy
                  </a>
                  <a href="#" className="p-white-bold mx-lg-3">
                      Terms and Conditions
                  </a>   
                  <a href="#" className="p-white-bold">
                       24/7 Services
                  </a>
            </div>
      </div>

    </div>
  </div>
            <hr style={{border:'1px solid #fff'}}/>

            <div className="">
                  <h4 className="text-center p-white-bold my-0">
                        COPYRIGHT © 2024,All rights Reserved
                  </h4>
            </div>
      </div>
</footer>
    </div>
  )
}
