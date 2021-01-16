import "../../styles/Header.css";
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <div>
        <Row>
          <Col xs lg="2"><div className="topButtons">Select Exercise</div></Col>
          <Col xs lg="2"><div className="topButtons">View History</div></Col>
          <Col xs lg="2"><div className="topButtons">Leaderboard</div></Col>
          <Col><div className="welcome" style={{ textAlign: 'right', padding: '15px' }}> Welcome, Sharon </div></Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
