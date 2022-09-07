import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Table } from "reactstrap";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://boiling-caverns-52703.herokuapp.com/user/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        window.location.reload(false);
      }
    });
  };
  useEffect(() => {
    fetch("https://boiling-caverns-52703.herokuapp.com/users")
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
                    <td>
                      <Button
                        onClick={() => handleDelete(user._id)}
                        color="danger"
                        outline
                      >
                        delete
                      </Button>
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

export default Users;
