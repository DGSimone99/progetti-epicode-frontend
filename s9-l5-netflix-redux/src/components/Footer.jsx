import { Container, Row, Col, Button } from "react-bootstrap";
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube, BiX } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xs-12 col-md-6">
            <Row>
              <Col className="mb-2">
                <BiLogoFacebook className="footer-icon me-2" size={24} />
                <BiLogoInstagram className="footer-icon me-2" size={24} />
                <BiX className="footer-icon me-2" size={24} />
                <BiLogoYoutube className="footer-icon" size={24} />
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Contact us
                  </a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Legal Notices
                  </a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button variant="dark" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 text-center text-muted">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
