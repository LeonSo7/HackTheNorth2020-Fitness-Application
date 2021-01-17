import "../../styles/Home.css";
import React, { Component } from "react";
import { Card, CardDeck, Col } from "react-bootstrap";
import pushupThumbnail from "../../assets/pushup_thumbnail.jpg";
import lungesThumbnail from "../../assets/lunges_thumbnail.jpg";
import situpsThumbnail from "../../assets/situps_thumbnail.JPG";
import squatsThumbnail from "../../assets/squats_thumbnail.jpg";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: true,
      history: false,
      leaderBoard: false,
    };
  }

  render() {
    return (
      <div className="mainContainer">
        <Header leaderBoard={this.state.leaderBoard} exercise={this.state.exercise} history={this.state.history} />
        <div class="titleText">Select an Exercise</div>
        {/* Exercise Cards */}
        <div className="imgContainer">
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
                  {/* <Card.Text>A classic upper body exercise. Avoid letting your elbows flare out to the side and keep your body in a straight line.</Card.Text> */}
                  {/* <Card.Text>Last updated 10 mins ago</Card.Text> */}
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
                    Mastering the bodyweight squat is essential for good results in almost any workout program. If it’s challenging, practice with a chair first.
                  </Card.Text> */}
                  {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
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
                  Instead of pulling up on your neck, focus on squeezing your abs to flex your upper body.
                  </Card.Text> */}
                  {/* <Card.Text>Last updated 10 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
              <Card className="bg-dark text-white card">
                <Card.Img
                  src={lungesThumbnail}
                  alt="Squats Thumbnail"
                  className="cardImg"
                />
                <Card.ImgOverlay>
                  <Card.Title className="cardTxt">LUNGES</Card.Title>
                  {/* <Card.Text>
                    Start slowly and find your balance. Remember that your goal
                    is to use the front leg to push yourself back up!
                  </Card.Text> */}
                  {/* <Card.Text>Last updated 10 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </CardDeck>
          </Col>
        </div>
        <div className="startBtnDiv">
          <div className="startBtn">
            <Link className="startBtnTxt" to="/confirmation" style={{ color: 'black' }}>Start</Link>
          </div>
        </div>
      </div >
    );
  }
}

export default Home;
