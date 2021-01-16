import "../../styles/Home.css";
import React, { Component } from 'react';
import { Card, CardDeck, Col } from "react-bootstrap";
import pushupThumbnail from "../../assets/pushup_thumbnail.jpg";
import lungesThumbnail from "../../assets/lunges_thumbnail.jpg";
import situpsThumbnail from "../../assets/situps_thumbnail.JPG";
import squatsThumbnail from "../../assets/squats_thumbnail.jpg";
import Header from "../ui/Header";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: true,
      history: false,
      leaderBoard: false
    }
  }

  render() {
    return (
      <div className="mainContainer" >
        <Header exercise={this.state.exercise} />
        {/* Exercise Cards */}
        <div className="imgContainer" >
          <Col className="imgCol">
            <CardDeck>
              <Card className="bg-dark text-white card">
                <Card.Img
                  src={pushupThumbnail}
                  alt="Pushup Thumbnail"
                  className="cardImg"
                />
                <Card.ImgOverlay>
                  <Card.Title className="cardTxt">PUSH UPS</Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
              <Card className="bg-dark text-white card">
                <Card.Img
                  src={squatsThumbnail}
                  alt="Squats Thumbnail"
                  className="cardImg"
                />
                <Card.ImgOverlay>
                  <Card.Title className="cardTxt">SQUATS</Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card className="bg-dark text-white card">
                <Card.Img
                  src={situpsThumbnail}
                  alt="Sit Ups Thumbnail"
                  className="cardImg"
                />
                <Card.ImgOverlay>
                  <Card.Title className="cardTxt">SIT UPS</Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
              <Card className="bg-dark text-white card">
                <Card.Img
                  src={lungesThumbnail}
                  alt="Squats Thumbnail"
                  className="cardImg"
                />
                <Card.ImgOverlay>
                  <Card.Title className="cardTxt">PLANKS</Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </CardDeck>
          </Col>
        </div>
        <div className="startBtnDiv">
          <div className="startBtn">
            <p className="startBtnTxt">Start</p>
          </div>
        </div>
      </div >
    );
  }
}

export default Home;
