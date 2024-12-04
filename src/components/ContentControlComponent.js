import { useEffect, useState } from "react";

import ControlButtonComponent from "./controlButtonComponent";

const ContentControlComponent = ({ currentWindow, setCurrentWindow }) => {
  const [currentSize, setCurrentSize] = useState(window.innerWidth);
  const [showBurguerMenu, setShowBurguerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCurrentSize(window.innerWidth);
    };

    // Listener para el resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      if (showBurguerMenu) {
        setShowBurguerMenu(false); // Cierra el menú
        window.history.back(); // Regresa al historial previo
      }
    };

    const handlePopState = () => {
      if (showBurguerMenu) {
        setShowBurguerMenu(false); // Cierra el menú al presionar Back
      }
    };

    // Agrega entrada al historial al abrir el menú
    if (showBurguerMenu) {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
    }

    // Limpieza
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showBurguerMenu]);

  return (
    <>
      <section
        className={`${currentSize < 950 ? "burguer-menu" : "content-Control"}`}
        style={
          currentSize < 950
            ? { display: showBurguerMenu ? "flex" : "none" }
            : {}
        }
      >
        <ControlButtonComponent
          isShowed={currentWindow === "devInfo"}
          text="Informacion Personal"
          className="medium-text-size"
          action={() => {
            setCurrentWindow("devInfo");
            setShowBurguerMenu(false);
          }}
        />
        <ControlButtonComponent
          isShowed={currentWindow === "projectsList"}
          text="Lista De Proyectos"
          className="medium-text-size"
          action={() => {
            setCurrentWindow("projectsList");
            setShowBurguerMenu(false);
          }}
        />
        <ControlButtonComponent
          isShowed={currentWindow === "Contact"}
          text="Contacto"
          className="medium-text-size"
          action={() => {
            setCurrentWindow("Contact");
            setShowBurguerMenu(false);
          }}
        />
      </section>

      {currentSize < 950 && (
        <div
          onClick={() => setShowBurguerMenu(!showBurguerMenu)}
          className="burguer-button"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </>
  );
};

export default ContentControlComponent;
