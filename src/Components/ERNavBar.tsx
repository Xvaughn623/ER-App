import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from '../Images/logo.png';
const ERNavBar = () => {
return(
    <div>
        <Navbar bg="light" variant="dark">My Navbar</Navbar>
        <Navbar.Brand>{logo}</Navbar.Brand>
    </div>
)

}

export default ERNavBar;
