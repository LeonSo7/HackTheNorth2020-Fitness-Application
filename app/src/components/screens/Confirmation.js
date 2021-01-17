import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: "",
    }
  }

  render() {
    return (
      <div className="mainContainer">
        <div style={{ fontWeight: 'bold', color: 'white' }}>Please Confirm Your Selection</div>
        <div style={{ color: 'white' }}>You have the following workout: {this.state.exercise}</div>
        <div style={{ color: 'white' }}>By pressing "Continue", you are consenting to having your video recorded.</div>
        <Row>
          <Col style={{ justifyContent: 'center' }} > <div>Continue</div></Col>
          <Col style={{ justifyContent: 'center' }} > <div>Cancel</div></Col>
        </Row>
      </div>
    );
  }
}

export default Confirmation;
