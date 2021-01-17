import "../../styles/Workout.css";
import WebcamStreamCapture from "../webcam/WebcamStreamCapture";
import React, { Component } from "react";

class Workout extends Component {

  render() {
    return (
      <div className="mainContainer">
        <WebcamStreamCapture/>
      </div>
    );
  }
}

export default Workout;
