import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";

const Main = ({ theme }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/experience" element={<Experience theme={theme} />} />
        <Route path="/education" element={<Education theme={theme} />} />
        <Route path="/opensource" element={<Opensource theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
