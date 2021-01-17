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
        <div className="flex-container">
            <div className="container">
                <div className="text-container">
                    <h1>Please Confirm Your Selection</h1>
                    <p>
                      You have the following workout: {exercises[this.state.exercise]}
                    </p>
                    <p>By pressing "Continue", you are consenting to having your video recorded.</p>
                </div>
            </div>
        </div>

        
        <Row
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
        >
          <div style={{ paddingBottom: "10vh", paddingLeft: "10vw" }}>
            <Link to="/home" style={{ textDecoration: "none" }}>
                <Col className="back">
                  <div>Go Back</div>
                </Col>
            </Link>
          </div>

          <Col></Col>

          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/workout",
              exerciseProps: {
                exerciseSelected: this.state.exercise,
              },
            }}
          >
            <div style={{ paddingBottom: "10vh", paddingRight: "10vw" }}>
              <Link
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/workout",
                  exerciseProps: {
                    exerciseSelected: this.state.exercise,
                  },
                }}
              >
                  <Col className="continue">
                    <div>Continue</div>
                  </Col>
              </Link>
            </div>
          </Link>
        </Row>
      </div>
    );
  }
}

export default Confirmation;
