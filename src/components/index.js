import React from "react"
import sandhu from "./images/sandhu.jpg";
import bbrain from "./images/brain.png";
import doc from "./images/doc.png";
import { Link } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { FaCircleCheck } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { fetchAllServices } from "./commonApis/fetchServices";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import axios from "axios";
class Index extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bannerUrl:"",
        services: [],
        subservices: [],
        galleries:[],
        testimonials:[],
        banners: [],
        facilities :[],
      };

    }
  
   
    fetchBanner = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/banner`);
        if (response.data.success && response.data.status === 200) {
          // Set the banner image URL in state
          this.setState({ bannerUrl: response.data.data });
        } else {
          console.error("Failed to fetch banner image");
        }
      } catch (error) {
        console.error("Error fetching banner image:", error);
      }
    };
    fetchPromotions() {
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/banners`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ banners: response.data.data }, () => {
          // Check if there is exactly one banner and show the modal
          if (this.state.banners.length === 1) {
            this.openModalWithDelay();
          }
          
        });
      })
      .catch((error) => {
        console.error("There was an error fetching the promotional banner!", error);
      });
  }

  openModalWithDelay = () => {
    // Check if the modal was closed for the current day
    const modalClosedToday = localStorage.getItem('modalClosedToday');
    
    if (!modalClosedToday) {
      // Delay opening the modal by 2 seconds
      setTimeout(() => {
        const modalElement = document.getElementById('exampleModal');
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show(); // Show the modal
  
        // Add event listener for modal close button
        modalElement.addEventListener('hidden.bs.modal', () => {
          // Set flag in localStorage to not show the modal again for today
          const today = new Date().toISOString().split('T')[0]; // Get today's date (YYYY-MM-DD)
          localStorage.setItem('modalClosedToday', today);
  
          // Cleanup modal backdrop and scrolling
          document.body.classList.remove('modal-open');
          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modalBackdrop) {
            modalBackdrop.remove();
          }
          document.body.style.overflow = 'auto';
        });
      }, 4000); // 2 second delay
    }
  };

  async fetchServices() {
    const services = await fetchAllServices();

    this.setState({ services: services });
  }
    fetchFacility() {
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/facilities`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ facilities: response.data.data });
      })
      .catch((error) => {
        console.error("There was an error fetching the facilities!", error);
      });
  }

    fetchSubServices() {
        const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/sub-services?type=feature_services`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.setState({ subservices: response.data.data });
        })
        .catch((error) => {
          console.error("There was an error fetching the sub services!", error);
        });
    }

    fetchGallery() {
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/galleries?type=featured`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ galleries: response.data.data });
      })
      .catch((error) => {
        console.error("There was an error fetching the gallery!", error);
      });
  }

  
  fetchTestimonial() {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/testimonials`;
  axios
    .get(apiUrl)
    .then((response) => {
      this.setState({ testimonials: response.data.data });
    })
    .catch((error) => {
      console.error("There was an error fetching the testimonial!", error);
    });
}
  
    componentDidMount() {
      this.fetchServices();
      this.fetchSubServices();
      this.fetchGallery();
      this.fetchTestimonial();
      this.fetchBanner();
      this.fetchPromotions();
      this.fetchFacility();


      
      Fancybox.bind("[data-fancybox]", {
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
    }
  
    componentWillUnmount() {
      Fancybox.unbind("[data-fancybox]");
    }
  
    render() {
      const { bannerUrl } = this.state;
      return (
    <>

    <div>
      <div className="container-fluid p-0">
        <div className="banner " >
  
      {bannerUrl ? (
        <img src={bannerUrl} alt="Sandhu Hospital Banner" />
      ) : (
        <p></p>
      )}
     
        </div>
      </div>

      {this.state.banners.length > 1 ? (
  <section className="space" style={{ background: "aliceblue" }}>
    <div className="container">
      <div className="row">
        {this.state.banners && this.state.banners.length > 0 ? (
          this.state.banners.map((banner, index) => {
            const bannerClasses = ["bluepromotion", "pinkpromotion", "neonpromotion"];
            const className = bannerClasses[index % bannerClasses.length];
            return (
              <div className="col-xl my-2" key={`banner-${index}`}>
                <div className={`${className} promotion`}>
                  <h2 className="p-white-bold">{banner.text1}</h2>
                  <h3 className="section-heading-white">{banner.text2}</h3>
                  <h4 className="sub-heading-white">{banner.text3}</h4>
                  <h5 className="p-white">{banner.text4}</h5>
                  <div className="h-100 d-flex align-items-end">
                    <p className="sub-heading-white mb-1" style={{ color: "var(--blue)" }}>
                      {banner.time_period}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No banners available</p>
        )}
      </div>
    </div>
  </section>
) : (
  this.state.banners.length === 1 && (

    <div className="modal modal-lg" id="exampleModal" data-bs-backdrop="true" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="col-xl my-2">
              <div className="bluepromotion promotion">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h2 className="p-white-bold">{this.state.banners[0].text1}</h2>
                <h3 className="section-heading-white">{this.state.banners[0].text2}</h3>
                <h4 className="sub-heading-white">{this.state.banners[0].text3}</h4>
                <h5 className="p-white">{this.state.banners[0].text4}</h5>
                <div className="h-100 d-flex align-items-end">
                  <p className="sub-heading-white mb-1">{this.state.banners[0].time_period}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
)}


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
          {this.state.services.length > 0 ? (
                this.state.services.map((service, index) => (
                  <div key={`services-${index}`} className="services-contain col-lg-3 mb-3 ">
                    <Link  to={ service?.beautify === "1"
                                      ? `/skin/${service.id}#${service.name.replace(/\s+/g, '-')}`
                                      : `/service/${service.id}#${service.name.replace(/\s+/g, '-')}`
                                    }>
                    <div className="servicelimg">
                      <img src={service.image} alt={service.name} />
                    </div>
                    <div className="service-t mt-3">
                      <h2 className="p-heading-black mt-0 mb-1">{service.name}</h2>
                      <p className="p-black my-0 overflow-2">{service.description}</p>
                    </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Loading services...</p>
              )}
         
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
            <div className="col-lg-6 mb-lg-0 mb-5">
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
              {this.state.facilities.length > 0 ? (
                this.state.facilities.map((facility, index) => (
                  <div className="col-lg-6 mb-2" key={`facilities-${index}`}>
                  <div className="d-flex">
                    <FaCircleCheck
                      className="me-2"
                      style={{ color: "var(--pink)" }}
                    />
                    <p className="p-black mb-0">{facility.title}</p>
                  </div>
                </div>
                ))
              ) : (
                <p></p>
              )}
             
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

          {this.state.subservices.length > 0 ? (
    this.state.subservices.map((subservice, index) => {
      // Conditional rendering for the first two vs the next two
      if (index % 4 < 2) {
        // Layout for first two elements (image first, then details)
        return (
          <div key={`subservices-${index}`} className="services-contain col-lg-6 mb-3">
            <div className="row">
              <div className="col-lg-6">

            <div className="cwt2">
              <img src={subservice.image} alt="service" />
            </div>
              </div>
              <div className="col-lg-6">
            <div className="cwt1">
              <h2 className="sub-heading-black mt-0 mb-2">{subservice.name}</h2>
              <p className="p-blue-small my-0 overflow-2" style={{ textAlign: "justify" }}>
                {subservice.utility}
              </p>
              <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
              <p className="p-black overflow-3 mt-0 mb-2"> {subservice.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
              </div>
            </div>
            </div>
          </div>
        );
      } else {
        // Layout for the next two elements (details first, then image)
        return (
          <div key={`subservices-${index}`} className="services-contain col-lg-6 mb-3">
            <div className="row">
              <div className="col-lg-6">
            <div className="cwt1">
              <h2 className="sub-heading-black mt-0 mb-2">{subservice.name}</h2>
              <p className="p-blue-small my-0 overflow-2" style={{ textAlign: "justify" }}>
                {subservice.utility}
              </p>
              <h3 className="p-black-bold mt-2 mb-1">How We Cure:</h3>
              <p className="p-black overflow-3 mt-0 mb-2"> {subservice.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="cwt2">
              <img src={subservice.image} alt="service" />
            </div>
            </div>
            </div>
          </div>
        );
      }
    })
  ) : (
    <p>Loading services...</p>
  )}

       
          </div>
        </div>
      </section>

      <section  className="space" style={{background:"aliceblue"}}>
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
    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1400: 4 }}
  >
    <Masonry
sequential={false}
i//temStyle={{flexDirection:'row !important', display: 'flex !important'}}
      gutter="20px"
    >
      {this.state.galleries.length > 0 ? (
        this.state.galleries.map((Gallery, index) => (
          Gallery.media === "Image" ? (
            <div key={`gallery-${index}`} className="gallery-item">
              <a
                data-fancybox="gallery"
                href={Gallery.image}
              >
                <div className="gallery-cap">
                  <div className="gallery-capi">
                    <p className="p-white-bold mb-0">{Gallery.title}</p>
                  </div>
                  <img
                    src={Gallery.image}
                    style={{
                      width: "100%",
                      maxHeight: "400px",  // Set max height for consistency
                      objectFit: "cover",   // Ensure images fill the area neatly
                    }}
                    alt={Gallery.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/dummyd.png`; // Fallback image
                    }}
                  />
                </div>
              </a>
            </div>
          ) : Gallery.media === "Video" ? (
            <div key={`gallery-video-${index}`} className="gallery-item">
              <a data-fancybox="gallery" href={Gallery.image}>
                <div className="gallery-cap" style={{ width: "100%", height: "100%" }}>
                  <div className="overlaygll m-0">
                    <div className="play-btn m-0"></div>
                  </div>
                  <div className="gallery-capi">
                    <p className="p-white-bold mb-0">{Gallery.title}</p>
                  </div>
                  <video
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}  // Consistent video height
                  >
                    <source src={Gallery.image} type="video/mp4" />
                  </video>
                </div>
              </a>
            </div>
          ) : null
        ))
      ) : (
        <p>Loading GALLERY...</p>
      )}
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

      {this.state.testimonials && this.state.testimonials.length > 0  ? (
  this.state.testimonials.map((testimonial, index) => (
    <div className="col-lg-4 mb-5" key={`testimonials-${index}`}>
      <div className="testimonial">
        <div className="outer-tag">
          <div className="inner-tag">
            <h3 className="section-heading-white"><BsFillChatQuoteFill /></h3>
          </div>
        </div>
        <p className="p-black">
          {testimonial.message}
        </p>
        <p className="p-black-bold text-end mb-1">
          --- {testimonial.name}
        </p>
        <p className="p-black-small text-end">
          {testimonial.date}
        </p>
      </div>
    </div>
  ))
) : (
  <p>no testimonial</p> 
)}
     
      </div>
     </div>
      </section>
    </div>
    </>
  );
}
}

export default Index;