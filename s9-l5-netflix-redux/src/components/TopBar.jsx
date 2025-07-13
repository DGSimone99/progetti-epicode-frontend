import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { BiBell, BiSearch, BiUserCircle } from "react-icons/bi";
import { BsFillQuestionCircleFill, BsGear } from "react-icons/bs";

const TopBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navBar">
      <Container fluid className=" px-5">
        <Navbar.Brand href="#">
          <img src="assets/logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0 ">
            <Nav.Link href="#" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <Button variant="dark" className="text-white bg-transparent border-0">
              <BiSearch size={24} />
            </Button>
            <a href="#" className="text-decoration-none">
              <span className="fw-bold text-light">KIDS</span>
            </a>
            <Dropdown align="end">
              <Dropdown.Toggle variant="dark" className="text-white bg-transparent border-0">
                <BiBell size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-black">
                <Dropdown.Item className="text-center text-white" disabled>
                  Nessuna Notifica
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="dark"
                className="d-flex align-items-center text-white p-1 bg-transparent border-0"
              >
                <div className="user rounded-circle overflow-hidden">
                  <img src="../../assets/user.jpg" className="d-block w-100" alt="Avatar" />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="px-4 py-3 bg-black">
                <Dropdown.Item href="./user.html" className="text-white">
                  <BiUserCircle className="me-3" size={24} />
                  Account
                </Dropdown.Item>
                <Dropdown.Item href="./settings.html" className="text-white py-3">
                  <BsGear className="me-3" size={24} />
                  Impostazioni
                </Dropdown.Item>
                <Dropdown.Item href="https://help.netflix.com/it" target="_blank" className="text-white">
                  <BsFillQuestionCircleFill className="me-3" size={24} />
                  Centro Assistenza
                </Dropdown.Item>
                <hr className="text-white" />
                <Dropdown.Item href="#" className="text-white text-center">
                  Esci
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
