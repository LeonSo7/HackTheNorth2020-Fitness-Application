import "../../styles/ExerciseInfoSection.css";
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class ExerciseInfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      pu: this.props.pu,
      squat: this.props.squat,
      su: this.props.su,
      plank: this.props.plank
    };
  }

  render() {
    return (
      <div>
        <div className="titleText">{this.state.title}</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Container className="whiteBackground" style={{ padding: '2%', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <Row>
              <>
                {
                  (this.state.pu) ? (
                    <>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Push Ups</div></Col>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                    </>
                  )
                    :
                    (this.state.squats) ? (
                      <>
                        <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                        <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Squats</div></Col>
                        <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                        <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                      </>
                    )
                      :
                      (this.state.su) ? (
                        <>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Sit Ups</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                        </>
                      )
                        :
                        <>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="currentPageButton">Planks</div></Col>
                        </>
                }

              </>
            </Row>
          </Container>
        </div>
      </div >
    );
  }
}

export default ExerciseInfoSection;
