import "../../styles/Home.css";
import { Button, Card, CardDeck, Col } from "react-bootstrap";
import pushupThumbnail from "../../assets/pushup_thumbnail.jpg";
import lungesThumbnail from "../../assets/lunges_thumbnail.jpg";
import situpsThumbnail from "../../assets/situps_thumbnail.JPG";
import squatsThumbnail from "../../assets/squats_thumbnail.jpg";
import Header from "../ui/Header";

function Home() {
  return (
    <div>
      <Header />
      {/* Exercise Cards */}
      <Col>
        <CardDeck>
          <Card className="bg-dark text-white">
            <Card.Img
              variant="top"
              src={pushupThumbnail}
              alt="Pushup Thumbnail"
            />
            <Card.ImgOverlay>
              <Card.Title>PUSH UPS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img src={squatsThumbnail} alt="Squats Thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>SQUATS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card className="bg-dark text-white">
            <Card.Img src={situpsThumbnail} alt="Sit Ups Thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>SIT UPS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img src={lungesThumbnail} alt="Squats Thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>PLANKS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </CardDeck>
       </Col>

      <div>
        <Button variant="primary">Start</Button>
      </div>
    </div>
  );
}

export default Home;
