import ImageViewer from "../../components/imagesviewer/ImageViewer";
import { NavBar } from "../../components/navbar/NavBar";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <h1 className="gallery-title">Portfolio</h1>
      <div className="gallery-section">
        <ImageViewer />
      </div>
    </div>
  );
};

export default Gallery;
