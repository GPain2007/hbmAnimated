import "./ImageViewer.scss";
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
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        <img src={IMG20} alt="" />
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
        <img src={IMG12} alt="" />

        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        ></h2>
      </div>
    </div>
  );
};

export default ImageViewer;
