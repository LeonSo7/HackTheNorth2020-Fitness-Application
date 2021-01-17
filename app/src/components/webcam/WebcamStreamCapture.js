import Webcam from "react-webcam";
import React from "react";
import ReactPlayer from "react-player";
import "../../styles/WebcamStreamCapture.css";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Countdown from "react-countdown";

const WebcamStreamCapture = () => {
  const webcamRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [playState, setPlayState] = React.useState(false);
  const [duration, setDuration] = React.useState(null);

  const handleStartCaptureClick = React.useCallback(() => {
    // console.log(playerRef);
    setDuration(playerRef.current.getDuration()*1000);
    setCapturing(true);
    setPlayState(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, setPlayState, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    console.log(mediaRecorderRef.current);
    mediaRecorderRef.current.stop();
    // setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleUpload = () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });

      var bodyFormData = new FormData();

      bodyFormData.append("exercise", "pushup");
      bodyFormData.append("file", blob);

      axios({
        method: "post",
        url:
          "https://cors-anywhere.herokuapp.com/http://35.229.83.24:5000/calculate",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

      setRecordedChunks([]);
    }
  };

  return (
    <div>
      <div className="mediaPlayer">
        <ReactPlayer
          playing={playState}
          ref={playerRef}
          width="60vw"
          height="60vh"
          url={
            "https://www.youtube.com/watch?v=rUWxSEwctFU&ab_channel=IanRushton"
          }
          onEnded={handleStopCaptureClick}
        />
      </div>
      <div className="exerciseBtnDiv">
        <Row>
          <Col className="buttonCol">
            <div onClick={() => {}} className="workoutQuitBtn">
              Quit
            </div>
          </Col>
          <Col className="countDownCol">
            {/* {console.log(playerRef.getDuration())} */}
            {duration && (
              <Countdown date={Date.now() + duration} />
            )}
          </Col>
          <Col className="buttonCol">
            {!capturing && (
              <div
                onClick={handleStartCaptureClick}
                className="workoutStartBtn"
              >
                Start
              </div>
            )}
            {capturing && recordedChunks.length == 0 && (
              <div className="fillerDiv"></div>
            )}
            {recordedChunks.length > 0 && (
              <div onClick={handleUpload} className="workoutUploadBtn">
                Upload
              </div>
            )}
          </Col>
          <Col>
            <div className="webcamDiv">
              <Webcam
                style={{ height: "23vh" }}
                audio={false}
                ref={webcamRef}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WebcamStreamCapture;
