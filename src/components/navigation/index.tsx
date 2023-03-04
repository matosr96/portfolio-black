import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { DownloadPDF } from "../../utils/downloadPDF";
import styles from "./Navigation.module.css";

const Navigation = ({ children }: { children: ReactNode }) => {
  const [pressedIndex, setPressedIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (index === pressedIndex) {
      // Si se hace clic en el mismo botón, lo desactivamos
      setPressedIndex(-1);
    } else {
      setPressedIndex(index);
    }
  };

  return (
    <div className={styles.container_navigation}>
      <nav className={styles.nav}>
        <div className={styles.container_menu}>
          <div className={styles.presentation}>
            <h1>Hello, I´m</h1>
            <h1>Edgar Matos</h1>
          </div>
          <div className={styles.profile}>
            <p>
              I am a <strong>Full-stack</strong> web developer with experience
              in developing applications using front-end technologies such as
              <strong> React, TypeScript, and Next.js</strong>. On the backend,
              I have{" "}
              <strong>
                experience with Node.js, TypeScript, Fastify, and MongoDB{" "}
              </strong>
              to create scalable and efficient web solutions.
            </p>
          </div>
          <div className={styles.links_container}>
            <Link
              to={"/projects"}
              onClick={() => handleClick(0)}
              className={
                pressedIndex === 0 ? styles.btn_pressed : styles.btn_no_pressed
              }
            >
              <p>01</p>
              <div
                className={
                  pressedIndex === 0 ? styles.line_pressed : styles.line
                }
              ></div>
              <span>Projects</span>
            </Link>
            <Link
              to={"/skills"}
              onClick={() => handleClick(1)}
              className={
                pressedIndex === 1 ? styles.btn_pressed : styles.btn_no_pressed
              }
            >
              <p>02</p>
              <div
                className={
                  pressedIndex === 1 ? styles.line_pressed : styles.line
                }
              ></div>
              <span>Skills</span>
            </Link>
            <Link
              to={"/about"}
              onClick={() => handleClick(2)}
              className={
                pressedIndex === 2 ? styles.btn_pressed : styles.btn_no_pressed
              }
            >
              <p>03</p>
              <div
                className={
                  pressedIndex === 2 ? styles.line_pressed : styles.line
                }
              ></div>
              <span>About me</span>
            </Link>
          </div>
        </div>
        <div className={styles.social_media}>
          <a href="https://www.linkedin.com/in/matosr96/" className={styles.social} target="_blank" >
            <i className="bx bxl-linkedin-square"></i>
            <span>LinkedIn</span>
          </a>
          <a href={"https://github.com/matosr96"} className={styles.social} target="_blank" >
            <i className="bx bxl-github"></i>
            <span>Github</span>
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
      </nav>
      <div className={styles.screens}>{children}</div>
    </div>
  );
};

export default Navigation;
