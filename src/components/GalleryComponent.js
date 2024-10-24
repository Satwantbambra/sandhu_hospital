// Gallery.js
import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GalleryComponent = ({ galleries }) => {
  return (
    <div className="space">
<ResponsiveMasonry
  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1400: 4 }}
>
  <Masonry
    sequential={false}
    gutter="20px"
  >
    {galleries.length > 0 ? (
      galleries.map((Gallery, index) => {
        // Function to extract video ID from a YouTube URL
        const getYoutubeVideoId = (url) => {
          const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|\/shorts\/)([^#\&\?]*).*/;
          const match = url.match(regExp);
          return match && match[2].length === 11 ? match[2] : null;
        };

        const youtubeId = Gallery.youtube_link ? getYoutubeVideoId(Gallery.youtube_link) : null;

        return Gallery.media === "Image" ? (
          <div
            key={`gallery-${index}`}
            className="gallery-item"
          >
            <a data-fancybox="gallery" href={Gallery.image}>
              <div className="gallery-cap">
                <div className="gallery-capi">
                  <p className="p-white-bold mb-0">{Gallery.title}</p>
                </div>
                <img
                  src={Gallery.image}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
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
          <div
            key={`gallery-video-${index}`}
            className="gallery-item"
          >
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
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                >
                  <source src={Gallery.image} type="video/mp4" />
                </video>
              </div>
            </a>
          </div>
        ) : Gallery.media === "Youtube" && youtubeId ? (
          <div
            key={`gallery-youtube-${index}`}
            className="gallery-item"
          >
            <div className="gallery-cap">
 
              <iframe
                width="100%"
                height="400px"
                src={`https://www.youtube.com/embed/${youtubeId}`} // Embed YouTube video
                title={Gallery.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </div>

          </div>
        ) : null;
      })
    ) : (
      <p>Loading GALLERY...</p>
    )}
  </Masonry>
</ResponsiveMasonry>



    </div>
  );
};

export default GalleryComponent;
