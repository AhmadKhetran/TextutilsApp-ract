import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [btntext, setBtnText] = useState("Dark Mode");
  const [btncolor, setBtnColor] = useState("primary");
  const [textcolor, setTextColor] = useState("black");
  const [textareatext, setTextAreaText] = useState("black");
  const [textareabg, setTextAreaBg] = useState("White");
  const [textareadiv, setTextAreaDiv] = useState("#559ce3");
  const [textareadivclr, setTextAreaDivClr] = useState("white");
  const [aboutpage, setAboutpage] = useState("gold");

  let Dmode = () => {
    if (btntext == "Dark Mode") {
      setDarkMode("dark");
      setBtnText("Light Mode");
      setBtnColor("secondary");
      setTextColor("white");
      setTextAreaBg("gray");
      setTextAreaText("White");
      setTextAreaDiv("#343a40");
      setTextAreaDivClr("gray");
      setAboutpage("#002244");
      document.body.style.backgroundColor = "#002244";
    } else {
      setDarkMode("light");
      setBtnText("Dark Mode");
      setBtnColor("primary");
      setTextColor("black");
      setTextAreaBg("white");
      setTextAreaText("black");
      setTextAreaDiv("#559ce3");
      setTextAreaDivClr("white");
      setAboutpage("gold");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        first="HOME"
        second="ABOUT"
        mode={mode}
        btntext={btntext}
        dmfun={Dmode}
        btncolor={btncolor}
      />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              uppertext="Enter You Text Below To Analyze"
              btncolor={btncolor}
              textcolor={textcolor}
              textareatext={textareatext}
              textareabg={textareabg}
              textareadiv={textareadiv}
              textareadivclr={textareadivclr}
            />
          }
        ></Route>
        <Route path="/About" element={<About aboutpage={aboutpage} />}></Route>
      </Routes>
    </>
  );
}

export default App;
