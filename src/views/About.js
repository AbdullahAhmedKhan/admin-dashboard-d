import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About Admin Dashboard
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">React Admin Dashboard</h2>
                <h5 className=" mb-4">
                  Technology Used: React Js, ReactStrap, Express Js, MongoDB, Bi
                  Bi icons, Sweet Alert, Netlify, Heroku, Firebase,
                  react-apexcharts etc.
                </h5>
                <img
                  src="https://www.wrappixel.com/wp-content/uploads/edd/2020/04/xtreme-react-admin-template-y.jpg"
                  alt="my"
                  className="img-fluid"
                />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
                  target="_blank"
                >
                  <a
                    className="text-white text-decoration-none"
                    target="_blank"
                    href="https://github.com/AbdullahAhmedKhan/admin-dashboard-d"
                  >
                    Check out on Github
                  </a>
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
