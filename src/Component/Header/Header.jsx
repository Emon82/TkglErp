import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo1 from '../../asserts/khoz1.png'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <img style={{height:"75px",width:"160px",marginLeft:"40px"}} src={logo1} alt="" />
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="https://www.techknowgram.com/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
