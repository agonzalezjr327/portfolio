import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home theme={this.props.theme} />} />
          <Route
            path="/experience"
            element={<Experience theme={this.props.theme} />}
          />
          <Route
            path="/education"
            element={<Education theme={this.props.theme} />}
          />
          <Route
            path="/opensource"
            element={<Opensource theme={this.props.theme} />}
          />
          <Route
            path="/contact"
            element={<Contact theme={this.props.theme} />}
          />
          <Route
            path="/projects"
            element={<Projects theme={this.props.theme} />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
