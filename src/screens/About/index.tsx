import React from "react";
import { DownloadPDF } from "../../utils/downloadPDF";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about_screens}>
      <div className={styles.photo_container}>
        <img src={"/matos.svg"} />
      </div>
      <div className={styles.info}>
        <p>
          Hello, my name is Edgar Matos and I am a{" "}
          <strong>Systems and Networks Technician </strong> graduate from the
          Instituto Tecnologico San Agustin, Monteria campus. Currently, I am a
          student of <strong>Software Engineering</strong> at the University of
          Cartagena. I live in the beautiful city of Cerete, in the department
          of Cordoba, Colombia and I am 26 years old.
        </p>
        <span>Contact me:</span>
        <div className={styles.social}>
          <a href="https://wa.me/573127167156" target="_blank">
            <i className="bx bxl-whatsapp"></i>Whatsapp
          </a>
          <a
            href="https://www.linkedin.com/in/matosr96/"
            className={styles.social}
            target="_blank"
          >
            <i className="bx bxl-linkedin-square"></i>LinkedIn
          </a>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              DownloadPDF()
            }
          >
            {" "}
            Download CV <i className="bx bx-download"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
