import "../../styles/Header.css";
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: this.props.exercise,
      history: this.props.history,
      leaderBoard: this.props.leaderBoard
    };
  }

  render() {
    return (
      <div>
        <div>
          <Row>
            <>
              {
                (this.state.exercise) ? (
                  <>
                    <Col style={{ paddingRight: 0, paddingLeft: '1%', marginLeft: '3%' }} > <div className="currentPageButton">Select Exercise</div></Col>
                    <Col style={{ paddingRight: 0, paddingLeft: '1%' }} > <div className="topButtons">View History</div></Col>
                    <Col style={{ paddingRight: 0, paddingLeft: '1%' }}><div className="topButtons">Leaderboard</div></Col>
                    <Col xs lg="8"><div className="welcome" style={{ textAlign: 'right', padding: '15px' }}> Welcome, Sharon </div></Col>
                  </>
                )
                  :
                  (this.state.history) ? (
                    <>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%', marginLeft: '3%' }} > <div className="currentPageButton">Select Exercise</div></Col>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%' }} > <div className="currentPageButton">View History</div></Col>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%' }}><div className="topButtons">Leaderboard</div></Col>
                      <Col xs lg="8"><div className="welcome" style={{ textAlign: 'right', padding: '15px' }}> Welcome, Sharon </div></Col>
                    </>
                  )
                    :
                    <>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%', marginLeft: '3%' }} > <div className="topButtons">Select Exercise</div></Col>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%' }} > <div className="topButtons">View History</div></Col>
                      <Col style={{ paddingRight: 0, paddingLeft: '1%' }}><div className="currentPageButton">Leaderboard</div></Col>
                      <Col xs lg="8"><div className="welcome" style={{ textAlign: 'right', padding: '15px' }}> Welcome, Sharon </div></Col>
                    </>
              }

            </>

          </Row>
        </div>
      </div >
    );
  }
}

export default Header;
