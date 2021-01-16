import "../../styles/Header.css";
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <div>
        <Button className="topButtons" variant="primary" size="sm">Select Exercise</Button>
        <Button variant="primary">View History</Button>
        <Button variant="primary">Leaderboard</Button>
      </div>
    </div>
  );
}

export default Header;
