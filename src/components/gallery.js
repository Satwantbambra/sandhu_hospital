import React,{useEffect} from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import brain from "./images/brains.webp";
import laser from "./images/laser.webp";
import chest from "./images/chest.webp";
import hospital from "./images/sandhuhospital.jpg";
import sandhuvideo from "./images/sandhu.mp4";
import m1 from "./images/h1.jpg";
import m2 from "./images/h2.jpg";

function Gallery() {
    
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Custom options
      loop: true,
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
      },
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "close",
      ],
      transitionEffect: "fade",
      idleTime: 5,
      animationEffect: "zoom-in-out",
    });
    return () => {
      Fancybox.unbind("[data-fancybox]");
    };
  }, []);
  return (
    <div className='container'>
            <div className="container-fluid px-0 about  pb-0">
          <div className="container space">
          <div className="row">
            <div className="col-lg-5">
            <h2 className="section-top me-lg-5 " style={{whiteSpace:"nowrap"}}>Our Gallery</h2>
              <div
                className=" d-flex align-items-center"
              
              >
                <h3 className="section-heading-black my-0">
                Snapshots of{" "}
                  <span style={{ color: "var(--neon)" }}> Care</span> See Our{" "}
                  <span style={{ color: "var(--pink)" }}>Commitment</span>  to Wellness!
                </h3>
               
              </div>
            </div>
            <div className="col-lg-7">
              <p className="p-black my-0">
              Discover the heart of Sandhu Hospital through our gallery. 
          Browse images that showcase our advanced facilities, 
          compassionate staff, and the welcoming environment 
          we provide for our patients. Each photo reflects our
           commitment to excellence in healthcare
              </p>
            </div>
          </div>
         
          </div>
          <section id="gallery" className="space">
        <div className="container">
           <div >
           <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1400 :4}}
            >
                <Masonry
      className=" masonry"
      columnClassName="masonry-grid_column"
      gutter="20px"
    >
      {/* Image Items */}
      <a data-fancybox="gallery" href={brain}>
        <img
          src={brain}
          style={{ width: "100%", display: "block" }}
          alt="sandhu hospital Nawanshahar images"
        />
      </a>
      <a data-fancybox="gallery" href={laser}>
        <img
          src={laser}
          style={{ width: "100%", display: "block" }}
          alt="sandhu hospital Nawanshahar images"
        />
      </a>
      <a data-fancybox="gallery" href={chest}>
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
        data-caption="Sandhu Hospital Video"
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
      <a data-fancybox="gallery" href={hospital}>
        <img
          src={hospital}
          style={{ width: "100%", display: "block" }}
          alt="sandhu hospital Nawanshahar images"
        />
      </a>
      <a data-fancybox="gallery" href={m1}>
        <img
          src={m1}
          style={{ width: "100%", display: "block" }}
          alt="sandhu hospital Nawanshahar images"
        />
      </a>
      <a data-fancybox="gallery" href={m2}>
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
      </section>
          </div>
    </div>
  )
}

export default Gallery;
