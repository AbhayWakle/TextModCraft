// import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#445069";
    } else if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextModCraft"

        Mode={Mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Textform heading="Enter the text below" Mode={Mode}
        />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
