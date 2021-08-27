// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="My App"
          mode={mode}
          change={setmode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About heading="About Us" />
            </Route>

            <Route exact path="/">
              <Textform
                heading="Enter the Text to Analyse"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>

        {/* <div className="container my-3">This is another div</div> */}
      </Router>
    </>
  );
}

export default App;
