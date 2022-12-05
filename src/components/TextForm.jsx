import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  let handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  let handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  let handleSpClick = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  let handleClClick = () => {
    let newText = text.toLowerCase();
    setText("");
  };

  let handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  let myStyle = {
    color: `${props.textareadivclr}`,
    backgroundColor: `${props.textareadiv}`,
    padding: "5px",
  };

  return (
    <>
      <div>
        <div className="container my-3">
          <div style={myStyle}>
            <div className="mb-3">
              <h1>{props.uppertext}</h1>
              <textarea
                className="form-control"
                onChange={handleOnChange}
                value={text}
                id="myBox"
                rows="10"
                style={{
                  color: `${props.textareatext}`,
                  backgroundColor: `${props.textareabg}`,
                }}
              ></textarea>
            </div>
            <button
              className={`btn btn-${props.btncolor} mx-1`}
              onClick={handleOnClick}
            >
              UpperCase
            </button>
            <button
              className={`btn btn-${props.btncolor} mx-1`}
              onClick={handleLoClick}
            >
              LowerCase
            </button>
            <button
              className={`btn btn-${props.btncolor} mx-1`}
              onClick={handleSpClick}
            >
              Speak
            </button>
            <button
              className={`btn btn-${props.btncolor} mx-1`}
              onClick={handleClClick}
            >
              Clear
            </button>
          </div>

          <div className="container my-3">
            <h1 style={{ color: `${props.textcolor}` }}>Your Text Summary</h1>
            <p style={{ color: `${props.textcolor}` }}>
              {text.split(" ").length} Words & {text.length} Characters{" "}
            </p>
            <h2
              style={{
                color: props.textcolor === "white" ? "white" : "black",
              }}
            >
              Check Tarnary Operator === Working
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  uppertext: PropTypes.string,
};

TextForm.defaultProps = {
  uppertext: "Welcome to the TextUtils App",
};
