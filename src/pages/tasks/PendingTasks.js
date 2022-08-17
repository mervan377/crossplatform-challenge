import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { assignedDepartment, userFind } from "../../components/finder";
import {
  completeTask,
  rejectTask,
} from "../../components/taskStatusChanger.js";

function PendingTasks() {
  const navigate = useNavigate();
  const [mytasks, setMyTasks] = useState([]);
  const userJwtToken = JSON.parse(localStorage.getItem("authToken")).jwtToken;
  const accessToken = userJwtToken;
  const url = "http://localhost:5000/api/task/pendings";
  const authAxios = axios.create({
    method: "get",
    url: url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  useEffect(() => {
    try {
      authAxios.get(`${url}`).then((res) => {
        let allTasks = res.data.payload;
        setMyTasks(allTasks);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const changeTaskStatusHandle = (e) => {
    let selectValue = e.target.value;
    let selectDataId = e.target.name;
    if (parseInt(selectValue) === 1) {
      completeTask(selectDataId);
      navigate(0);
    } else if (parseInt(selectValue) === 2) {
      rejectTask(selectDataId);
      navigate(0);
    }
  };

  return (
    <>
      <h1>
        Pending Tasks for{" "}
        <strong>
          {assignedDepartment(
            JSON.parse(localStorage.getItem("authToken")).department
          )}
        </strong>
      </h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Created by</th>
            <th>Created Department by</th>
            <th>Assigned Department</th>
            <th>Title</th>
            <th>Description</th>
            <th>See Detail</th>
            <th>Task Status</th>
          </tr>
        </thead>
        <tbody>
          {mytasks.map((data, key) => {
            return (
              <tr key={key}>
                <td> {key + 1} </td>
                <td> {data.user.name} </td>
                <td> {userFind(data.user.id)} </td>
                <td>{assignedDepartment(data.assignedDepartment)}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>
                  <NavLink
                    to={`/detail-tasks/${data.id}`}
                    className={"nav-link see-detail"}
                  >
                    See Detail
                  </NavLink>
                </td>
                <td>
                  <Form.Select
                    onChange={changeTaskStatusHandle}
                    name={data.id}
                    aria-label="Default select example"
                  >
                    <option value="0" name={data.id}>
                      Pending
                    </option>
                    <option value="1">Complete</option>
                    <option value="2">Reject</option>
                  </Form.Select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default PendingTasks;
