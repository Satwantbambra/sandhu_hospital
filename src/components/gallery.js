import React from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import GalleryComponent from './GalleryComponent';
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: [],
    };
  }

  // Function to fetch gallery data from the API
  fetchGallery() {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/galleries`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ galleries: response.data.data });
      })
      .catch((error) => {
        console.error("There was an error fetching the gallery!", error);
      });
  }

  // Lifecycle method to handle side effects after the component mounts
  componentDidMount() {
    this.fetchGallery();

    // Bind Fancybox to elements with the specified selector
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

  // Lifecycle method to clean up before the component unmounts
  componentWillUnmount() {
    Fancybox.unbind("[data-fancybox]");
  }

  render() {
    return (
      <div className="container">
        <div className="container-fluid px-0 about pb-0">
          <div className="container space">
            <div className="row">
              <div className="col-lg-5">
                <h2
                  className="section-top me-lg-5"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Our Gallery
                </h2>
                <div className="d-flex align-items-center">
                  <h3 className="section-heading-black my-0">
                    Snapshots of{" "}
                    <span style={{ color: "var(--neon)" }}> Care</span> See Our{" "}
                    <span style={{ color: "var(--pink)" }}>Commitment</span> to
                    Wellness!
                  </h3>
                </div>
              </div>
              <div className="col-lg-7">
                <p className="p-black my-0">
                  Discover the heart of Sandhu Hospital through our gallery.
                  Browse images that showcase our advanced facilities,
                  compassionate staff, and the welcoming environment we provide
                  for our patients. Each photo reflects our commitment to
                  excellence in healthcare.
                </p>
              </div>
            </div>
          </div>

          <section id="gallery" className="space">
            <div className="container">
            <GalleryComponent galleries={this.state.galleries} type='Gallery' />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Gallery;
