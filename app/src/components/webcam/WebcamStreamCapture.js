import Webcam from "react-webcam";
import React from "react";
import ReactPlayer from "react-player";

const WebcamStreamCapture = () => {
  const webcamRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [playState, setPlayState] = React.useState(false);

  const handleStartCaptureClick = React.useCallback(() => {
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
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <div>
      {/* <ReactPlayer ref={playerRef}>
        <source src={videoSource} />
        <ControlBar autoHide={true} />
      </ReactPlayer> */}
      <div>Test</div>
      <ReactPlayer
        playing={playState}
        ref={playerRef}
        url={'https://www.youtube.com/watch?v=rUWxSEwctFU&ab_channel=IanRushton'}
        onEnded={handleStopCaptureClick}
      />
      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
          // <button onClick={() => {handleStartCaptureClick, props.playingFunc(true)}}>Start Capture</button>
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
    </div>
  );
};

export default WebcamStreamCapture;
