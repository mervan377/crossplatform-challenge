import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { allTaskList } from "../../stores/alltasks";
import { NavLink } from "react-router-dom";
import {
  assignedDepartment,
  userFind,
  tasksStatusFinder,
} from "../../components/finder";


function AllTasks() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const userJwtToken = JSON.parse(localStorage.getItem("authToken")).jwtToken

  const accessToken = userJwtToken;
  const url = "http://localhost:5000/api/task";
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
        let alltask = res.data.payload;
        dispatch(
          allTaskList({
            alltask: alltask,
          })
        );
        setData(alltask);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <h1>All Tasks</h1>
      <Table striped bordered hover variant="light" className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Created by</th>
            <th>Created Department by</th>
            <th>Assigned Department</th>
            <th>Title</th>
            <th>Description</th>
            <th>Task Status</th>
            <th>See Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, key) => {
            return (
              <tr key={key}>
                <td> {key + 1} </td>
                <td> {data.user.name} </td>
                <td> {userFind(data.user.id)} </td>
                <td> {assignedDepartment(data.assignedDepartment)}</td>
                <td> {data.title}</td>
                <td> {data.description}</td>
                <td> {tasksStatusFinder(data.status)}</td>
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
    </div>
  );
}

export default AllTasks;
