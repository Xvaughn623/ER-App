import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import logo from '../Images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import './ERNavBar.css';
import { UserProfileProps } from '../Data/data';

const ERNavBar = (props: UserProfileProps) => {
  const navigate = useNavigate();
  return (
    <div className="ERNav">
      <Navbar className="NavBackground" variant="dark">
        <Navbar.Brand>
          <img src={logo} className="NavLogo" alt="our-logo" onClick={() => navigate('/Home')} />{' '}
        </Navbar.Brand>
        <Navbar.Text onClick={() => navigate('/userprofile')} className="User-Name">
          {props.Name}
        </Navbar.Text>
      </Navbar>
      <br />
    </div>
  );
};

export default ERNavBar;
