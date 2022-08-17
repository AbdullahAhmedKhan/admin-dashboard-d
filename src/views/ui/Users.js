import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Col, Table } from "reactstrap";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-center">Our Respectful Customers</h2>
      </div>
      <Col lg="12">
        <Card className="my-3 rounded shadow-lg">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Users Table
          </CardTitle>
          <CardBody className="">
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
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

export default Users;
