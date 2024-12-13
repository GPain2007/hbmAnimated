import "./Gallery.scss";
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

const Gallery = () => {
  return (
    <div>
      <div className="row">
        <div className="column">
          <img src={IMG1} alt="" />
          {/* <img src={IMG2} alt="" /> */}
        </div>
        <div className="column">
          {/* <img src={IMG8} alt="" />
          <img src={IMG9} alt="" /> */}
          <img src={IMG10} alt="" />
          <img src={IMG11} alt="" />
        </div>
        <div className="column">
          <img src={IMG1} alt="" />
          <img src={IMG2} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={IMG4} alt="" />
          <img src={IMG5} alt="" />
        </div>
        <div className="column">
          <img src={IMG6} alt="" />
          <img src={IMG7} alt="" />
          <img src={IMG12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
