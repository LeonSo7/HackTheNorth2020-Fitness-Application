import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Confirmation extends Component {

  render() {
    return (
      <div className="mainContainer">
        <div>Would you like to send your video for evaluation?</div>
        <Row>
          <Col style={{ justifyContent: 'center' }} > <div>Confirm</div></Col>
          <Col style={{ justifyContent: 'center' }} > <div>Cancel</div></Col>
        </Row>
      </div>
    );
  }
}

export default Confirmation;
