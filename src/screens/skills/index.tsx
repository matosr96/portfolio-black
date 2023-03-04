import React from "react";
import { dataSkills } from "./data";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills_screens}>
      {dataSkills?.map((skill) => (
        <div className={styles.card_skill}>
          <h3>{skill.name}</h3>
          <img src={skill.url} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
