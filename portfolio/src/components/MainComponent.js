import React, { Component } from "react";
import About from "./AboutComponent";
import Contact from "./ContactComponent";

class Main extends Component {
  render() {
    return (
      <div>
        <About />
        <Contact />
      </div>
    );
  }
}
export default Main;
