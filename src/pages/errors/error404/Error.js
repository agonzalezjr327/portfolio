import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import Greeting from "../../../containers/greeting/Greeting";
import Skills from "../../../containers/skills/Skills";
import { Fade } from "react-reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
