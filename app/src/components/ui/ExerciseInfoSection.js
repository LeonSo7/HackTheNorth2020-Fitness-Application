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
        <div className="titleText" style={{ marginBottom: '0.5%' }}>{this.state.title}</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Container className="whiteBackground" style={{ padding: '2%', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            {
              (this.state.title == "Leaderboard") ? (
                <>
                  <Row>

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
                  </Row>
                  <Container className="greyBackground" style={{ padding: '2%', justifyContent: 'center', alignItems: 'center', height: '50vh' }} >
                    <Row style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', textDecoration: 'underline', marginTop: '2%' }}>
                      <Col>Name</Col>
                      <Col>Score</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Alexandr</Col>
                      <Col>9999</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Joyex Xiaog</Col>
                      <Col>450</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Sharon</Col>
                      <Col>100</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Leon Sob</Col>
                      <Col>1</Col>
                    </Row>
                  </Container>
                </>
              ) : (
                  <>
                    {/*Generate graphs for history*/}
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
                  </>
                )
            }
          </Container>
        </div>
      </div >
    );
  }
}

export default ExerciseInfoSection;
