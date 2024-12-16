import "./ImageViewer.scss";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import IMG1 from "/1S0A3672.jpg";
import IMG2 from "/1S0A3677.jpg";
import IMG3 from "/1S0A3668.jpg";
import IMG4 from "/3C3A7298.jpg";
import IMG5 from "/3C3A7305.jpg";
import IMG6 from "/3C3A7327.jpg";
import IMG7 from "/family.jpg";
import IMG8 from "/NRP_0477.jpg";
import IMG9 from "/NRP_0967.jpg";
import IMG10 from "/NRP_1333.jpg";
import IMG11 from "/NRP_1371.jpg";
import IMG12 from "/Daniela.jpg";
import IMG13 from "/Daniela_1.jpg";
import IMG14 from "/Dos-Palomas-Summer-2024-29_websize.jpg";
import IMG15 from "/Dos-Palomas-Summer-2024-52_websize.jpg";
import IMG16 from "/Dos-Palomas-Summer-2024-137_websize.jpg";
import IMG17 from "/Dos-Palomas-Summer-2024-138_websize.jpg";
import IMG18 from "/Dos-Palomas-Summer-2024-192_websize.jpg";
import IMG19 from "/Dos-Palomas-Summer-2024-277_websize.jpg";
import IMG20 from "/Dos-Palomas-Summer-2024-308_websize.jpg";

const ImageViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
    IMG6,
    IMG7,
    IMG8,
    IMG9,
    IMG10,
    IMG11,
    IMG12,
    IMG13,
    IMG14,
    IMG15,
    IMG16,
    IMG17,
    IMG18,
    IMG19,
    IMG20,
  ];
  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };
  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {/* <img src={IMG20} alt="" />
        <img src={IMG14} alt="" />
        <img src={IMG15} alt="" />
        <img src={IMG16} alt="" />
        <img src={IMG17} alt="" />
        <img src={IMG18} alt="" />
        <img src={IMG19} alt="" />

        <img src={IMG3} alt="" />
        <img src={IMG1} alt="" />
        <img src={IMG2} alt="" />

        <img src={IMG4} alt="" />
        <img src={IMG5} alt="" />
        <img src={IMG6} alt="" />
        <img src={IMG7} alt="" />
        <img src={IMG8} alt="" />
        <img src={IMG9} alt="" />
        <img src={IMG10} alt="" />
        <img src={IMG11} alt="" />
        <img src={IMG13} alt="" />
        <img src={IMG12} alt="" /> */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      {isOpen && (
        <div className="lightbox-overlay">
          <div className="lightbox-container">
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <button className="lightbox-prev" onClick={handlePrev}>
              &lt;
            </button>
            <button className="lightbox-next" onClick={handleNext}>
              &gt;
            </button>
            <img src={images[currentIndex]} alt="lightbox image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
