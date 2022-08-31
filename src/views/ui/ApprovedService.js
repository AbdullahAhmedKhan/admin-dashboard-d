import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Table,
} from "reactstrap";
const ApprovedService = () => {
  const status = "done";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/servicerequest?status=${status}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div>
      <Card>
        <CardBody>
          <div className="text-center">
            <CardTitle tag="h2" className="text-success">Approved Services</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h5">
              All approved services
            </CardSubtitle>
          </div>
          <hr />

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>

                <th>Service</th>
                <th>Purchase Date</th>
                <th>Paid</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{user.name}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-muted">{user.email}</span>
                  </td>
                  <td>{user.service}</td>
                  <td>{user.date}</td>
                  <td>{user.paid}</td>
                  <td>
                    {user.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : user.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};
export default ApprovedService;
