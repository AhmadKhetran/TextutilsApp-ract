import React, { Component } from "react";

function About(props) {
  let Maindiv = {
    fontFamily: "Arial",
  };
  let Upperdiv = {
    backgroundColor: `${props.aboutpage}`,
    height: "180px",
    textAlign: "center",
    color: props.aboutpage === "gold" ? "black" : "White",
    padding: "20px",
  };
  let Middiv = {
    backgroundColor: "#E1EBEE",
    height: "621px",
  };

  let Footer = {
    backgroundColor: "#002244",
    height: "80px",
    color: "white",
    textAlign: "center",
  };
  let imgsrc = {
    width: "100%",
    height: "621px",
  };
  return (
    <>
      <div style={Maindiv}>
        <div style={Upperdiv}>
          <h1>About Us</h1>
          <p>
            This About Us page for Madebyband takes a bit of a different
            approach, but still manages to instantly communicate the brand’s
            personality via some hand crafted type and a dispersal of simple
            accompanying images. The use of handwritten type adds a unique
            personal touch to the page design, and the clean, simple imagery and
            presence of white space helps to balance everything out.
          </p>
        </div>
        <div style={Middiv}>
          <img
            style={imgsrc}
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/"
          />
        </div>

        <div style={Footer}>
          <p>
            Using color to add meaning only provides a visual indication, which
            will not be conveyed to users of assistive technologies – such as
            screen readers. Ensure that information denoted by the color is
            either obvious from the content itself (e.g. the visible text), or
            is included through alternative means, such as additional text
            hidden with the .visually-hidden class.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
