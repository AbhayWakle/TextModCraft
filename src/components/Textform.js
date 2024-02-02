import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLwClick = () => {
    // console.log("Uppercase" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCapitalize = () => {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(' ').map(capitalize).join(' ');
    setText(upper)
  }

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
  }


  const [text, setText] = useState("");

  return (
    <>
      <div className="container " style={{ color: props.Mode === `dark` ? `white` : `black` }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.Mode === `dark` ? `#393646` : `white`,
              color: props.Mode === `dark` ? `white` : `black`
            }}
            id="myText"
            rows="10"

          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick} >
          Convert To UPPERCASE
        </button>
        <button className="btn btn-success mx-2" onClick={handleLwClick}>
          Convert To lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleCapitalize}>
          Capitalize
        </button>
        <button className="btn btn-success" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.Mode === `dark` ? `white` : `black` }}>
        <h4>Text Summary</h4>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>
          Avearage time for reading {(0.0042 * text.split(" ").length)} minutes.
        </p>
        <h3>Summary of text</h3>
        <h4>{text.length > 0 ? text : "Write something above to preview it here : "}</h4>
      </div>
    </>
  );
}
