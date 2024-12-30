import "./ImageViewer.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
import IMG21 from "/StyledShoot2023-55.jpg";
import IMG22 from "/StyledShoot2023-56.jpg";
import IMG23 from "/StyledShoot2023-64.jpg";
import IMG24 from "/StyledShoot2023-114.jpg";
import IMG25 from "/StyledShoot2023-152.jpg";
import IMG26 from "/StyledShoot2023-200.jpg";

const ImageViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    IMG20,
    IMG14,
    IMG15,
    IMG16,
    IMG17,
    IMG18,
    IMG19,
    IMG3,
    IMG1,
    IMG2,

    IMG4,
    IMG5,
    IMG6,
    IMG7,
    IMG8,
    IMG9,
    IMG10,
    IMG11,

    IMG13,
    IMG12,
    IMG21,
    IMG22,
    IMG23,
    IMG24,
    IMG25,
    IMG26,
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
            <IoMdClose className="lightbox-close" onClick={closeLightbox} />
            <MdKeyboardArrowLeft
              className="lightbox-prev"
              onClick={handlePrev}
            />
            <MdKeyboardArrowRight
              className="lightbox-next"
              onClick={handleNext}
            />

            <img
              src={images[currentIndex]}
              alt="lightbox image"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
