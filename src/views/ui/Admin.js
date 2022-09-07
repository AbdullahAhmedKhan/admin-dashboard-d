import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Col, Table } from "reactstrap";
const Admin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("https://boiling-caverns-52703.herokuapp.com/admin")
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
            <Table borderless hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Position</th>
                  <th>Social Link</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr className="bg-light">
                    <th scope="row" className="p-3">
                      {index + 1}
                    </th>
                    <td className="p-3">{admin.name}</td>
                    <td className="p-3">{admin.email}</td>
                    <td className="p-3">{admin.position}</td>
                    <td className="p-3">
                      <a href="https://www.facebook.com/" target="_blank">
                        <i class="bi bi-facebook p-1"></i>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i class="bi bi-instagram p-1"></i>
                      </a>
                      <a href="https://www.linkedin.com/feed/" target="_blank">
                        <i class="bi bi-linkedin p-1"></i>
                      </a>
                    </td>
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
