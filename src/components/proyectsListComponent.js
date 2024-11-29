import { useState } from "react";
import ProjectItem from "./ProyectItem";
import useFetchData from "../constants/hooks/UseFetchData";

const ProyectsListComponent = () => {
  const { data, error, loading } = useFetchData();
  const [workFilter, setWorkFilter] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Filtrar los proyectos según el filtro seleccionado
  const filteredProjects = workFilter
    ? Object.entries(data.projects).filter(
        ([, project]) => project.work === workFilter
      )
    : Object.entries(data.projects);

  return (
    <>
      <div className="top-center big-size center-text smaller-font-size opaque-font-color">
        <select
          onChange={(e) => setWorkFilter(e.target.value)}
          value={workFilter || ""}
        >
          <option value="">Mostrar todos</option>
          {Object.entries(data.works).map(([key, work]) => (
            <option key={key} value={key.toString()}>
              {work}
            </option>
          ))}
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.map(([key, project]) => (
          <ProjectItem
            key={key}
            name={project.name}
            imgs={project.images}
            video={project.media.videoUrl}
            description={project.description}
            status={project.status}
            workType={project.technologies.workType}
            brand={project.technologies.brand}
            link={project.media.liveUrl}
            contact={project.contact}
            showDescription={false}
          />
        ))}
      </div>
    </>
  );
};

export default ProyectsListComponent;
