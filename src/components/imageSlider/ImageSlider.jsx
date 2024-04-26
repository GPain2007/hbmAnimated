import "./ImageSlider.scss";

import IMG1 from "/1S0A3668.jpg";
import IMG2 from "/1S0A3672.jpg";
import IMG3 from "/NRP_1371.jpg";

const ImageSlider = () => {
  return (
    <div className="imageContainerSlider">
      <img src={IMG1} alt="image 1" />
      <img src={IMG2} alt="image 2" />
      <img src={IMG3} alt="image 3" />
    </div>
  );
};

export default ImageSlider;
