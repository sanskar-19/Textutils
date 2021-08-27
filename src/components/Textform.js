import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Textform(props) {
  const Handleupclick = () => {
    setText(text.toUpperCase());
    // console.log(text);

    if (text.length < 1) {
      // console.log(text.length);
      props.showAlert("Please enter a word", "warning");
    } else {
      props.showAlert("Converted to Uppercase", "success");
    }
  };

  const Handledownclick = () => {
    setText(text.toLowerCase());
    // console.log(text);
    if (text.length < 1) {
      // console.log(text.length);
      props.showAlert("Please enter a word", "warning");
    } else {
      props.showAlert("Converted to Lowercase", "success");
    }
  };

  const Handlecopyclick = () => {
    // setText(text.toLowerCase());
    navigator.clipboard.writeText(text);
    setbutText("Copied!");

    props.showAlert("Copied to clipboard!", "success");

    setTimeout(() => {
      setbutText("Copy to Clipboard");
    }, 2000);
    // this.value = "Copied";
    // console.log(text);
  };

  const Handleonchange = (event) => {
    setText(event.target.value);
  };

  const Handleclearclick = (event) => {
    props.showAlert("Cleared!", "success");

    setText("");
    // event.target.value = "";
  };

  const [text, setText] = useState(""); //We used use state hook
  const [buttontext, setbutText] = useState("Copy to Clipboard"); //We used use state hook
  // text = "New text" // Wrong way to chsange
  // setText("new Text") //correct way

  return (
    <>
      <div
        className="container mb-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>{props.heading}</h2>

        <textarea
          placeholder="Enter your text here....."
          value={text}
          onChange={Handleonchange}
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "white" : "black",
          }}
        ></textarea>
        <button className="btn btn-primary my-1 mx-1" onClick={Handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={Handledownclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={Handlecopyclick}>
          {buttontext}
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={Handleclearclick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2 className="my-2">Your text summary</h2>
        <p>
          Your text has {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
      </div>
    </>
  );
}
