import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import about from "./images/about.webp";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

function Contact() {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [value]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height based on scrollHeight
    }
  };

  return (
    <div  className="container-fluid" style={{ background: "#f5f5f5" }}>
      <div className=" container">
        <div className="row space">
          <div className="col-lg-6 ">
            <div className="about-img">
              <img src={about} alt="about sandhu hospital" />
            </div>
          </div>
          <div className="col-lg-6 ">
            <div>
              <h1 className="section-heading-black mt-0 mb-2">
                Reach <span style={{ color: "var(--pink)" }}>Out</span> for Care
              </h1>
              <p className="p-black">
                At Sandhu Hospital, we are dedicated to providing compassionate,
                expert care for your health and well-being. Our experienced team
                offers personalized treatments across a wide range of
                specialties, ensuring you receive the attention and support you
                deserve. Reach out today to take the first step towards better
                health.
              </p>

              <div className="mb-3 row">
                <div className="col-12">
                  <label className="form-label p-black-bold">Name</label>
                  <input
                    className="form-control form-control-sm p-black-small"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label p-black-bold">City</label>
                  <input
                    className="form-control form-control-sm p-black-small"
                    type="text"
                    placeholder=" e.g: sector 12b chandigarh"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label
                    htmlFor="dynamicTextarea"
                    className="form-label p-black-bold"
                  >
                   Message
                  </label>
                  <textarea
                    className="form-control p-black-small"
                    id="dynamicTextarea"
                    rows="1"
                    ref={textareaRef}
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Describe your medical history or concerns"
                    style={{
                      resize: "none", // Disable manual resizing
                      overflow: "hidden", // Hide scrollbars
                      width: "100%", // Ensure full width
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-lg-7">
                  <ul className="footer-ucl d-flex align-items-center ps-0 ">
                
                    <li className="d-flex mb-1">
                      <Link
                        to="https://www.facebook.com/profile.php?id=100063722508860"
                        className="p-black-bold"
                        target="_blank"
                      >
                        <i>
                          <FaFacebook />
                        </i>
                      </Link>
                    </li>
                    <li className="d-flex mb-1">
                      <Link
                        to="https://api.whatsapp.com/send?phone=%2B919872620674&context=ARB6o1Ic__xCNYvIJiWLOIx2K9cFkuVCLcvYUiK89e-0vVD5cdUSUPrMzRCuxWiPCanb42fuoMWc5-qkntQHx5iO_895LRdYsTxfR158BIjwXjf7-T9UNJ6Xv_Kxk9Nh67k21an873kRxrnX5kNFW3Tdnw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFWAelleHRuA2FlbQIxMAABHVNQfjquyj1K2dZkp8ZA8-2U9tygqUn5-2Xy1uR74jJpa1nt6l_o4YKwfw_aem_T_4k8jbdHxKsRzpXQ8cjcg"
                        className="p-black-bold"
                        target="_blank"
                      >
                        <i>
                          <IoLogoWhatsapp />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5 d-flex align-items-center justify-content-end">
                  <button className="btn-pink">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "350px" }}>
        <iframe
          title="Nawanshahr Location Map"
          src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d98909.17221531243!2d76.05437718757297!3d31.12171919408437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e9!4m0!4m1!2s%20CHANDIGARH%20ROAD%2C%20Near%20Barnala%20Gate%2C%20NAWANSHAHAR%20(Old%20address%20Saloh%20Rd%2C%20Nsr)%20%2C%20Nawanshahr%20Doaba%2C%20India%2C%20Punjab%20region%20!5e1!3m2!1sen!2sin!4v1728384832075!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
