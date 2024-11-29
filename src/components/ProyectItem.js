import { useState } from "react";
import ImageComponent from "./imgComponent";
import ImageCarouselComponent from "./imgCarouselComponent";

const ProjectItem = ({
  name,
  imgs,
  video,
  description,
  status,
  workType,
  brand,
  link,
  contact,
  showDescription: initialShowDescription,
}) => {
  const [showDescription, setShowDescription] = useState(
    initialShowDescription
  );

  return (
    <div className={`project-item ${showDescription ? "floating-box" : ""}`}>
      <p
        className="project-name"
        onClick={() => setShowDescription(!showDescription)}
      >
        {name}
      </p>

      {video && showDescription && (
        <div class="video-container">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {!showDescription && imgs.length <= 0 && (
        <div class="video-container">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {!showDescription && imgs.length == 1 && (
        <ImageComponent
          position="top-center"
          size="medium-size "
          radius="large-radius"
          src={imgs[0].img || "placeholder.webp"}
          alt={imgs[0].imgAlt || "Placeholder"}
        />
      )}

      {!showDescription && imgs.length > 1 && (
        <ImageCarouselComponent images={imgs} />
      )}

      {showDescription && (
        <div className="project-description">
          <p className="project-text">{description}</p>

          <div className="direction-row big-size center-center">
            <div className="section-transparent direction-column medium-size center-text smaller-font-size opaque-font-color">
              <h3>Lenguajes </h3>
              <p>
                {Object.entries(workType).map(([key, wt]) =>
                  key > 0 ? ", " + wt : wt
                )}
              </p>
            </div>
            <div className="section-transparent direction-column medium-size center-text smaller-font-size opaque-font-color">
              <h3>Marcas usadas</h3>
              <p>
                {Object.entries(brand).map(([key, br]) =>
                  key > 0 ? ", " + br : br
                )}
              </p>
            </div>
          </div>
          <div className="center-center section-transparent direction-column big-size center-text smaller-font-size opaque-font-color">
            <h3>Estado</h3>
            <p>{status}</p>
          </div>
          <div className="center-center direction-row big-size center-text smaller-font-size opaque-font-color">
            <a
              className="project-link center-right"
              href={`https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en el mapa
            </a>
            {contact != "" && (
              <a
                className="project-link center-left"
                href={`https://wa.me/${contact}?text=Estimado%20se%C3%B1or%2Fse%C3%B1ora%2C%20obtuve%20su%20contacto%20a%20trav%C3%A9s%20de%20un%20portafolio%20de%20proyectos%20y%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20el%20trabajo%20realizado%20por%20[Nombre%20de%20la%20persona].%20Apreciar%C3%ADa%20mucho%20si%20pudiera%20brindarme%20informaci%C3%B3n%20sobre%20su%20desempe%C3%B1o%20y%20experiencia.%20Gracias%20por%20su%20atenci%C3%B3n.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar con el jefe
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
