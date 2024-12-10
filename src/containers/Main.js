import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";

export default class Main extends Component {
  render() {
    const { theme } = this.props; // Destructure props for cleaner code

    return (
      <BrowserRouter basename="/">
        <Routes>
          {/* Redirect from root to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Define application routes */}
          <Route path="/home" element={<Home theme={theme} />} />
          <Route path="/experience" element={<Experience theme={theme} />} />
          <Route path="/education" element={<Education theme={theme} />} />
          <Route path="/opensource" element={<Opensource theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />

          {/* Catch-all route for invalid paths */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
