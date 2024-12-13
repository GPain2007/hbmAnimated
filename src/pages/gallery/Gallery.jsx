import { useEffect, useState } from "react";
import picGallery from "../../components/pictureGallery/picGallery";

const Gallery = () => {
  const [isFullWidth, setIsFullWidth] = useState(window.innerWidth >= 768); // Adjust breakpoint as needed (768px is common for tablets)

  useEffect(() => {
    const handleResize = () => setIsFullWidth(window.innerWidth >= 768);

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  {
    isFullWidth && (
      <div className="gallery-section">
        <picGallery />
      </div>
    );
  }
};

export default Gallery;
