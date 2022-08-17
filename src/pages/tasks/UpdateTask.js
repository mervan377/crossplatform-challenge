import React, { useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateTask() {
  const { upTaskID } = useParams();
  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);
  const navigate = useNavigate();
  const userJwtToken = JSON.parse(localStorage.getItem("authToken")).jwtToken

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:5000/api/task/${upTaskID}`,
      headers: {
        Authorization: `Bearer ${userJwtToken}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.payload);
        setTitle(response.data.payload.title);
        setDesc(response.data.payload.description);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const updateTaskHandle = (e) => {
    e.preventDefault();

    let title = e.target.title.value;
    let desc = e.target.desc.value;

    var data = JSON.stringify({
      title: title,
      description: desc,
    });

    var config = {
      method: "put",
      url: `http://localhost:5000/api/task/${upTaskID}`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDEsImdpdmVuTmFtZSI6Ik1hcnkgR2xlbm4iLCJkZXBhcnRtZW50IjoxLCJpYXQiOjE2MjI3MDgzMDEsImV4cCI6MTcwOTEwODMwMX0.XA4vCrnlf_NIp_0s9uuGc295z6iy0xseLYk60Xjpiow",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("../my-tasks", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={updateTaskHandle}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="desc"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="success" className="mt-3">
          Send
        </Button>
      </form>
    </div>
  );
}

export default UpdateTask;
