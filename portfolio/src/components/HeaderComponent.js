import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header
          className="sticky-top"
          style={{
            backgroundColor: "#000000",
            textColor: "#ffffff",
            fontSize: 20,
            padding:10,
          }}
        >
          <nav id="nav-wrap sticky-top ">
            <ul id="nav" className="nav">
              <li className="current">
                <a
                  className="m-4"
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="mr-4"
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                  href="#About"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="mr-4"
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                  href="#revies"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a

                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
