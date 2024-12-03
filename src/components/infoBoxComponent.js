import DevInfoComponent from "./devInfoComponent";
import ContactIconsComponent from "./contactComponent";
import ProyectsListComponent from "./proyectsListComponent";

import { useState, useEffect } from "react";

const windows = ["devInfo", "projectsList", "Contact"];

const InfoBoxComponent = ({ currentWindow }) => {
  const [currentSize, setCurrentSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      id="Expanded-Info"
      className={`section-transparent tall-heigth scroll-true ${
        currentSize < 950
          ? "big-size center-center"
          : "medium-size min-width rigth-aling"
      }`}
    >
      {currentWindow === windows[0] && <DevInfoComponent />}
      {currentWindow === windows[1] && <ProyectsListComponent />}
      {currentWindow === windows[2] && <ContactIconsComponent />}
    </section>
  );
};

export default InfoBoxComponent;
