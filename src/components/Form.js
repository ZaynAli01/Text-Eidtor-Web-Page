import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");

  const convertUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      alert("Copied");
    }, 50);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/ [ ] +/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-3">
      <h1>Enter Text Here</h1>
      <div className="form-floating">
        <textarea
          className="form-control shadow-none border"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          value={text}
          onChange={handleOnChange}
          style={{ height: "100px" }}
        ></textarea>
      </div>
      <button className="btn btn-secondary my-3" onClick={convertUpper}>
        CAPITAL TEXT
      </button>
      <button className="btn btn-secondary my-3 ms-3" onClick={convertLower}>
        Lower text
      </button>
      <button className="btn btn-secondary my-3 mx-3" onClick={clearText}>
        Clear text
      </button>
      <button className="btn btn-secondary my-3" onClick={copyText}>
        Copy text
      </button>
      <button
        className="btn btn-secondary my-3 mx-3"
        onClick={removeExtraSpaces}
      >
        Remove extra spaces
      </button>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
    </div>
  );
}
