import "../../styles/Workout.css";
import WebcamStreamCapture from "../webcam/WebcamStreamCapture";
import React, { Component } from 'react';
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Workout extends Component {
  //   const WebcamComponent = () => <Webcam />;
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
  }

  // setPlayingState = (newState) => {
  //   this.setState(playing, newState);
  //   console.log( this.state)
  // };

  render() {
    return (
      <div className="mainContainer">
        {/* <WebcamStreamCapture playingFunc={this.setPlayingState}/> */}
        <WebcamStreamCapture/>
      </div>
    );
  }
}

export default Workout;
