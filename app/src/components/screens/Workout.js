import "../../styles/Workout.css";
import WebcamStreamCapture from "../webcam/WebcamStreamCapture";
import React, { Component } from "react";
// import Webcam from "react-webcam";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Workout extends Component {
  //   const WebcamComponent = () => <Webcam />;
  // constructor(props) {
  //   super(props);
  //   this.webcamRef = React.createRef();
  //   this.capturing = false;
  //   this.mediaRecorderRef = React.createRef();
  //   this.state = {
  //     playing: false,
  //     capturing: false,
  //     recordedChunks: [],
  //   };
  //   this.handleDataAvailable = this.handleDataAvailable.bind(this);
  //   this.handleStartCaptureClick = this.handleStartCaptureClick.bind(this);
  //   this.handleStopCaptureClick = this.handleStopCaptureClick.bind(this);
  //   this.handleDownload = this.handleDownload.bind(this);
  // }

  // componentDidUpdate() {
    
  // }

  // handleDataAvailable = (data) => {
  //   if (data.size > 0) {
  //     this.setState({ recordedChunks: this.recordedChunks.concat(data) });
  //   }
  // };

  // handleStartCaptureClick = () => {
  //   this.setState({ capturing: true });
  //   this.mediaRecorderRef.current = new MediaRecorder(
  //     this.webcamRef.current.stream,
  //     {
  //       mimeType: "video/webm",
  //     }
  //   );
  //   this.mediaRecorderRef.current.addEventListener(
  //     "dataavailable",
  //     this.handleDataAvailable
  //   );
  //   this.mediaRecorderRef.current.start();
  // };

  // handleStopCaptureClick = () => {
  //   this.mediaRecorderRef.current.stop();
  //   this.setState({ capturing: false });
  // };

  // // setPlayingState = (newState) => {
  // //   this.setState(playing, newState);
  // //   console.log( this.state)
  // // };
  // handleDownload = () => {
  //   if (this.state.recordedChunks.length) {
  //     const blob = new Blob(this.state.recordedChunks, {
  //       type: "video/webm",
  //     });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";
  //     a.href = url;
  //     a.download = "react-webcam-stream-capture.webm";
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     this.setState({recordedChunks: []});
  //   }
  // };

  render() {
    return (
      <div className="mainContainer">
        {/* <WebcamStreamCapture playingFunc={this.setPlayingState}/> */}
        <WebcamStreamCapture/>
        {/* <Webcam audio={false} ref={this.webcamRef} /> */}
        {/* {this.state.capturing ? (
          <button onClick={this.handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={this.handleStartCaptureClick}>Start Capture</button>
        )}
        {this.state.recordedChunks.length > 0 && (
          <button onClick={this.handleDownload}>Download</button>
        )} */}
      </div>
    );
  }
}

export default Workout;
