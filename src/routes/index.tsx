import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../screens/About";
import Projects from "../screens/projects";
import Skills from "../screens/skills";
import { ConstantsRoutes } from "./constants";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={ConstantsRoutes.ABOUT} element={<About />} />
      <Route path={ConstantsRoutes.PROJECTS} element={<Projects />} />
      <Route path={ConstantsRoutes.SKILLS} element={<Skills />} />
    </Routes>
  );
};

export default PageRoutes;
