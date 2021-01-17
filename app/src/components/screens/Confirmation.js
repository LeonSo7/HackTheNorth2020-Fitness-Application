import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/Confirmation.css";

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: props.location.exercise
    }
  }

  render() {
    return (
      <div className="mainContainer" >
        <div style={{ fontWeight: 'bold', color: 'white' }}>Please Confirm Your Selection</div>
        <div style={{ color: 'white' }}>You have the following workout: {this.state.exercise}</div>
        <div style={{ color: 'white' }}>By pressing "Continue", you are consenting to having your video recorded.</div>
        <Row style={{
          position: 'absolute',
          bottom: '0',
          width: '100%'
        }} >
          <Col className="back" style={{ marginLeft: '5%' }}> <div>Go Back</div></Col>
          <Col > <div></div></Col>
          <Col className="continue" style={{ alignItems: 'right', marginRight: '5%' }}> <div>Continue</div></Col>
        </Row>
      </div>
    );
  }
}

export default Confirmation;
