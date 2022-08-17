import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

function TaskDetail() {
  const [alldata, setAllData] = useState([]);
  const [allUserData, setallUserData] = useState([]);
  const [allLogData, setallLogData] = useState([]);
  const { taskID } = useParams();

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:5000/api/task/${taskID}`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDEsImdpdmVuTmFtZSI6Ik1hcnkgR2xlbm4iLCJkZXBhcnRtZW50IjoxLCJpYXQiOjE2MjI3MDgzMDEsImV4cCI6MTcwOTEwODMwMX0.XA4vCrnlf_NIp_0s9uuGc295z6iy0xseLYk60Xjpiow",
      },
    };

    axios(config)
      .then(function (response) {
        setAllData(response.data.payload);
        setallUserData(response.data.payload.user);
        setallLogData(response.data.payload.logs[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 

  console.log(allLogData)


  return (
    <div>
      <h1>Task Detail</h1>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">Created by: { allLogData.userName } </Card.Title>
          <Card.Subtitle className="mb-2 text-muted mb-4">
            Title: {alldata.title}
          </Card.Subtitle>
          <Card.Text> <span className="taskDetailDesc">Description:</span> {alldata.description}</Card.Text>
          <Card.Text> <span className="taskDetailDate">Date:</span> {allLogData.date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TaskDetail;
