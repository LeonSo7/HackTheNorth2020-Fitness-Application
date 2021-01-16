import "../../styles/Home.css";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import pushupThumbnail from "../../assets/pushup_thumbnail.jpg";

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
      <Card className="bg-dark text-white">
        <Card.Img src={pushupThumbnail} alt="Pushup Thumbnail" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;
