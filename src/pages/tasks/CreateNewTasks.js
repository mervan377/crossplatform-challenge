import React from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { taskCreate } from "../../stores/createTask";

function CreateNewTasks() {
  const dispatch = useDispatch();

  const createTaskHandle = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let desc = e.target.desc.value;
    const userJwtToken = JSON.parse(localStorage.getItem("authToken")).jwtToken;
    let assignedDepartment = parseInt(e.target.assignedDepartment.value);
    if (assignedDepartment === parseInt(assignedDepartment)) {
      var data = JSON.stringify({
        title: title,
        description: desc,
        assignedDepartment: assignedDepartment,
      });
      var config = {
        method: "post",
        url: "http://localhost:5000/api/task",
        headers: {
          Authorization: `Bearer ${userJwtToken}`,
          "Content-Type": "application/json",
        },
        data: data,
      };
      dispatch(
        taskCreate({
          title: title,
          description: desc,
          assignedDepartment: assignedDepartment,
        })
      );
    }
    axios(config)
      .then(function (response) {
        e.target.title.value = "";
        e.target.desc.value = "";
        e.target.assignedDepartment.value = "default";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>CreateNewTasks</h1>
      <Row className="mt-4">
        <Col xs={6}>
          <form onSubmit={createTaskHandle}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" name="title" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="desc"
                placeholder="Description"
              />
            </Form.Group>

            <Form.Select
              name="assignedDepartment"
              aria-label="Default select example"
            >
              <option value="default">
                --------- Assigned Department ---------
              </option>
              <option value="1">Human Resources Managament</option>
              <option value="2">Sales Department</option>
              <option value="3">Advertisement Department</option>
            </Form.Select>

            <Button type="submit" variant="success" className="mt-3">
              Send
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default CreateNewTasks;
