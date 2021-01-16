import "../../styles/Header.css";
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <div>
        <Row>
          <Col style={{ paddingRight: 0, paddingLeft: '1%', marginLeft: '3%' }} > <div className="topButtons">Select Exercise</div></Col>
          <Col style={{ paddingRight: 0, paddingLeft: '1%' }} > <div className="topButtons">View History</div></Col>
          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}><div className="topButtons">Leaderboard</div></Col>
          <Col xs lg="8"><div className="welcome" style={{ textAlign: 'right', padding: '15px' }}> Welcome, Sharon </div></Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
