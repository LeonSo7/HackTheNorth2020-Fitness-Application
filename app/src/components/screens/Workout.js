import "../../styles/Workout.css";
import WebcamStreamCapture from "../webcam/WebcamStreamCapture";
import React, { Component } from "react";

class Workout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exercise: props.location.exerciseProps.exerciseSelected,
    };
  }

  render() {
    return (
      <div className="mainContainer">
        <WebcamStreamCapture exerciseSelect={this.state.exercise}/>
      </div>
    );
  }
}

export default Workout;
