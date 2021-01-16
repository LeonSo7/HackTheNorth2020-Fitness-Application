import "../../styles/Home.css";
import { Button, Card, Row, Col } from 'react-bootstrap'
import pushupThumbnail from "../../assets/pushup_thumbnail.jpg";
import plankThumbnail from "../../assets/plank_thumbnail.jpg";
import situpsThumbnail from "../../assets/situps_thumbnail.JPG";
import squatsThumbnail from "../../assets/squats_thumbnail.jpg";

function Home() {
  return (
    <div>
      <div>
        <Button variant="primary">Select Exercise</Button>
        <Button variant="primary">View History</Button>
        <Button variant="primary">Leaderboard</Button>
      </div>
      <div className="TitleDiv">
        <h className="TitleText">Test page</h>
      </div>

      <Row>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={pushupThumbnail} alt="Pushup Thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>PUSH UPS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={squatsThumbnail} alt="Squats Thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>SQUATS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={situpsThumbnail} alt="Sit Ups Thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>SIT UPS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={plankThumbnail} alt="Squats Thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>PLANKS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      <div>
        <Button variant="primary">Start</Button>
      </div>
    </div>
  );
}

export default Home;
