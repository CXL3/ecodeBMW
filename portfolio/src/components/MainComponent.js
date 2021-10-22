import React, { Component } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Review from "./ReviewComponent";
import Contact from "./ContactComponent";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Review />
        <Contact />
      </div>
    );
  }
}
export default Main;
