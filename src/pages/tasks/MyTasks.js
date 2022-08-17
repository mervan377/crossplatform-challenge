import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getMyTasks } from "../../stores/alltasks";
import deleteTasks from "../../components/deleteTasks";
import { NavLink } from "react-router-dom";
import {
  assignedDepartment,
  userFind,
  tasksStatusFinder,
} from "../../components/finder";

function MyTasks() {
  const dispatch = useDispatch();
  const [mytasks, setMyTasks] = useState([]);
  const userJwtToken = JSON.parse(localStorage.getItem("authToken")).jwtToken

  const accessToken = userJwtToken;
  const url = "http://localhost:5000/api/task/my-tasks";
  const authAxios = axios.create({
    method: "get",
    url: url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  try {
    authAxios.get(`${url}`).then((res) => {
      let allTasks = res.data.payload;
      setMyTasks(allTasks);
      dispatch(
        getMyTasks({
          getMyTasks: allTasks,
        })
      );
    });
  } catch (err) {
    console.log(err);
  }

  const deleteTask = (taskID) => {
    deleteTasks(taskID);
  };

  return (
    <>
      <h1>
        Created tasks by{" "}
        <strong>{JSON.parse(localStorage.getItem("authToken")).name}</strong>
      </h1>
      <Table striped bordered hover variant="light" className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Created Department by</th>
            <th>Assigned Department</th>
            <th>Title</th>
            <th>Description</th>
            <th>Task Status</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {mytasks.map((data, key) => {
            return (
              <tr key={key}>
                <td> {key + 1} </td>
                <td> {userFind(data.user.id)} </td>
                <td>{assignedDepartment(data.assignedDepartment)}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{tasksStatusFinder(data.status)}</td>
                <td>
                  <NavLink
                    to={`/update-tasks/${data.id}`}
                    className={"nav-link see-detail"}
                  >
                    Update
                  </NavLink>
                </td>
                <td>
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() =>
                      deleteTask({ id: data.id, status: data.status })
                    }
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <NavLink
                    to={`/detail-tasks/${data.id}`}
                    className={"nav-link see-detail"}
                  >
                    See Detail
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default MyTasks;
