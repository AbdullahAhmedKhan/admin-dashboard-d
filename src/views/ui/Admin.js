import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Col, Table } from "reactstrap";
const Admin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-center">Our Honorable Admins</h2>
      </div>
      <Col lg="12">
        <Card className="my-3 rounded shadow-lg">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Admins Table
          </CardTitle>
          <CardBody className="">
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>{admin.position}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Admin;
