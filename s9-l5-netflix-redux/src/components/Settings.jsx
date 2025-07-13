import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { BsPaypal } from "react-icons/bs";

const Settings = (props) => {
  return (
    <Container fluid className="bg-white pb-4">
      <Container className="mt-4 settings">
        <h2 className="border-bottom py-4">Account</h2>

        <Row className="border-bottom pb-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">MEMBERSHIP & BILLING</h5>
            <Button className="mb-2 w-100 bg-body-secondary text-black border-0">Cancel Membership</Button>
          </Col>
          <Row className="col-9 border-bottom my-2">
            <Col className="col-3">
              <p className="m-0 ">student@strive.school</p>
              <p className="m-0 text-secondary">Password: ********</p>
              <p className="text-secondary">Phone: 321 044 1279</p>
            </Col>
            <Col className="col-6 text-end ms-auto pe-0 d-flex flex-column">
              <a href="#" className="text-decoration-none ">
                Change account email
              </a>
              <a href="#" className="text-decoration-none ">
                Change password
              </a>
              <a href="#" className="text-decoration-none ">
                Change phone number
              </a>
            </Col>
          </Row>

          <Row className="col-9 offset-3 border-bottom  my-2">
            <Col className="col-6 ps-0">
              <p className="fw-bold">
                <BsPaypal></BsPaypal> PayPal - admin@strive.school
              </p>
            </Col>

            <Col className="col-4 text-end ms-auto d-flex flex-column">
              <a href="#" className="text-decoration-none ">
                Update payment info
              </a>
              <a href="#" className="text-decoration-none ">
                Billing details
              </a>
            </Col>
          </Row>
          <Row className="col-9 offset-3 my-2">
            <Col className="col-6 offset-6 ps-0 text-end">
              <div>
                <a href="#" className="text-decoration-none ">
                  Redeem gift card or promo code
                </a>
              </div>
              <div>
                <a href="#" className="text-decoration-none ">
                  Where to buy gift cards
                </a>
              </div>
            </Col>
          </Row>
        </Row>

        <Row className="border-bottom pb-2 mt-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">PLAN DETAILS</h5>
          </Col>
          <Row className="col-9 my-2">
            <Col className="col-6 ps-0">
              <p className="m-0 fw-bold">
                Premium <span className="border px-1 border-black py-0 ms-2">ULTRA HD</span>
              </p>
            </Col>
            <Col className="col-6 px-0 text-end">
              <a href="#" className="text-decoration-none">
                Change plan
              </a>
            </Col>
          </Row>
        </Row>

        <Row className="border-bottom pb-2 mt-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">SETTINGS</h5>
          </Col>
          <Col className="d-flex flex-column ps-0">
            <a href="#" className="text-decoration-none ">
              Parental controls
            </a>
            <a href="#" className="text-decoration-none py-1">
              Test participation
            </a>
            <a href="#" className="text-decoration-none">
              Manage download devices
            </a>
            <a href="#" className="text-decoration-none py-1">
              Activate a device
            </a>
            <a href="#" className="text-decoration-none">
              Recent device streaming activity
            </a>
            <a href="#" className="text-decoration-none py-1">
              Sign out of all devices
            </a>
          </Col>
        </Row>

        <Row className="border-bottom py-2">
          <Col className="col-3">
            <h5 className="text-secondary mt-2">MY PROFILE</h5>{" "}
          </Col>
          <Row className="col-9 my-2 ps-0">
            <Col className="col-3 d-flex align-items-center">
              <div className="me-2 ">
                <Image src={props.img} alt="Avatar" fluid className="rounded-2 settingsImg" />
              </div>
              <p className="fw-bold m-0">{props.name}</p>
            </Col>
            <Col className="col text-end ms-auto pe-0 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Manage profiles
              </a>
              <a href="#" className="text-decoration-none">
                Add profile email
              </a>
            </Col>
          </Row>
          <Row className="mt-3 offset-3 pt-2 ps-0">
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Language
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Playback settings
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Subtitle appearance
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Viewing activity
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column">
              <a href="#" className="text-decoration-none">
                Ratings
              </a>
            </Col>
            <Col className="col-5 d-flex flex-column"></Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default Settings;
