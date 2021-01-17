import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/Confirmation.css";
import { Link } from "react-router-dom";

const exercises = {
  pushup: "Push Ups",
  situp: "Sit Ups",
  squat: "Squats",
  plank: "Planks",
};

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: props.location.exerciseProps.exerciseSelected,
    };
  }

  render() {
    return (
      <div className="mainContainer">
        <div style={{ fontWeight: "bold", color: "white" }}>
          Please Confirm Your Selection
        </div>
        <div style={{ color: "white" }}>
          You have the following workout: {exercises[this.state.exercise]}
        </div>
        <div style={{ color: "white" }}>
          By pressing "Continue", you are consenting to having your video
          recorded.
        </div>
        <Row
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Col className="back" style={{ marginLeft: "5%" }}>
              <div>Go Back</div>
            </Col>
          </Link>
          <Col>
            {" "}
            <div></div>
          </Col>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/workout",
              exerciseProps: {
                exerciseSelected: this.state.exercise,
              },
            }}
          >
            <Col
              className="continue"
              style={{ alignItems: "right", marginRight: "5%" }}
            >
              {" "}
              <div>Continue</div>
            </Col>
          </Link>
        </Row>
      </div>
    );
  }
}

export default Confirmation;
