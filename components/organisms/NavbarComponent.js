import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import LoginButton from "../atoms/LoginButton";
import RegisterButton from "../atoms/RegisterButton";
import UserButton from "../atoms/UserButton";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" id="navbar-bg">
      <Container fluid>
        <Navbar.Brand href="#home" id="nav-btn">
          <p style={{ letterSpacing: "1px", fontStyle: "italic", margin: "0" }}>
            Sneakerhead
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id="nav-btn">
              Home
            </Nav.Link>
            <Nav.Link href="#home" id="nav-btn">
              Product
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <LoginButton />
            <RegisterButton />
            <UserButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
