import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import about from "./images/about.webp";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height based on scrollHeight
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Name is required";
    if (!city.trim()) formErrors.city = "City is required";
    if (!phone.trim()) formErrors.phone = "Phone is required";
    if (!message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors
    setSuccessMessage("");

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/support-ticket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          city,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage("Your support ticket has been submitted successfully.");
        setName("");
        setCity("");
        setPhone("");
        setMessage("");
      } else {
        setErrors(data.errors || { general: "An error occurred. Please try again." });
      }
    } catch (error) {
      setErrors({ general: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid" style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="row space">
          <div className="col-lg-6">
            <div className="about-img">
              <img src={about} alt="about sandhu hospital" />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <h1 className="section-heading-black mt-0 mb-2">
                Reach <span style={{ color: "var(--pink)" }}>Out</span> for Care
              </h1>
              <p className="p-black">
                At Sandhu Hospital, we are dedicated to providing compassionate, expert care for your health and well-being. Our experienced team offers personalized treatments across a wide range of specialties, ensuring you receive the attention and support you deserve. Reach out today to take the first step towards better health.
              </p>

              {errors.general && <div className="alert alert-danger">{errors.general}</div>}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                  <div className="col-12">
                    <label className="form-label p-black-bold">Name</label>
                    <input
                      className={`form-control form-control-sm p-black-small ${errors.name ? 'is-invalid' : ''}`}
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => handleInputChange(e, setName)}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label p-black-bold">Phone</label>
                    <input
                      className={`form-control form-control-sm p-black-small ${errors.phone ? 'is-invalid' : ''}`}
                      type="text"
                      placeholder="99150 98150"
                      value={phone}
                      onChange={(e) => handleInputChange(e, setPhone)}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label p-black-bold">City</label>
                    <input
                      className={`form-control form-control-sm p-black-small ${errors.city ? 'is-invalid' : ''}`}
                      type="text"
                      placeholder="e.g: sector 12b chandigarh"
                      value={city}
                      onChange={(e) => handleInputChange(e, setCity)}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="dynamicTextarea" className="form-label p-black-bold">
                      Message
                    </label>
                    <textarea
                      className={`form-control p-black-small ${errors.message ? 'is-invalid' : ''}`}
                      id="dynamicTextarea"
                      rows="1"
                      ref={textareaRef}
                      value={message}
                      onChange={(e) => handleInputChange(e, setMessage)}
                      placeholder="Describe your medical history or concerns"
                      style={{
                        resize: "none",
                        overflow: "hidden",
                        width: "100%",
                      }}
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-lg-7">
                    <ul className="footer-ucl d-flex align-items-center ps-0">
                      <li className="d-flex mb-1">
                        <Link
                          to="https://www.facebook.com/profile.php?id=100063722508860"
                          className="p-black-bold"
                          target="_blank"
                        >
                          <i><FaFacebook /></i>
                        </Link>
                      </li>
                      <li className="d-flex mb-1">
                        <Link
                          to="https://api.whatsapp.com/send?phone=%2B919872620674"
                          className="p-black-bold"
                          target="_blank"
                        >
                          <i><IoLogoWhatsapp /></i>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-5 d-flex align-items-center justify-content-end">
                    <button className="btn-pink" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Contact"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
