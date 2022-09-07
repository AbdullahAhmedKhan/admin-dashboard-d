import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Forms = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const states = {
      earning: e.target.earning.value,
      refund: e.target.refund.value,
      project: e.target.project.value,
      sales: e.target.sales.value,
    };
    console.log(states);
    e.target.reset();
  };
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-arrow-repeat"> </i>
            Update Dashboard States
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleUpdate}>
              <FormGroup>
                <Label for="exampleEmail">Yearly Earning</Label>
                <Input
                  id="exampleEmail"
                  name="earning"
                  placeholder="Enter yearly earning"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Refund Given</Label>
                <Input
                  id="examplePassword"
                  name="refund"
                  placeholder="Enter refund"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Yearly Project</Label>
                <Input
                  id="examplePassword"
                  name="project"
                  placeholder="Enter yearly project"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Weekly Sales</Label>
                <Input
                  id="examplePassword"
                  name="sales"
                  placeholder="Enter sales"
                  type="number"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
