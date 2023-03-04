import React from "react";
import { dataProjects } from "./data";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.screens_project}>
      <div className={styles.container_card}>
        {dataProjects?.map((project) => (
          <div className={styles.card_projects}>
            <span>{project.language}</span>
            <h1>{project.name}</h1>
            <p>{project.descripcion}</p>
            <a href={project.url} target="_blank"  >Ir al software <i className='bx bx-link'></i></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
