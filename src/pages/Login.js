import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login, logout } from "../stores/auth";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  const [item, setItems] = useState([]);
  const dispatch = useDispatch();

  const loginHandle = (e) => {
    e.preventDefault();
    let formEmail = e.target.email.value;
    var data = JSON.stringify({
      email: formEmail,
    });
 
    var config = {
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        dispatch(
          login({
            response: response.data.payload,
            session: true,
          })
        );
        
        console.log(response.data)
        localStorage.setItem(
          "authToken",
          JSON.stringify(response.data.payload)
        );
        const items = JSON.parse(localStorage.getItem("authToken"));
        setItems(items);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logoutHandle = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <div>
      <div className="wrapper-login">
        <div className="wrapper-login-inner">
          <h1>Login Form</h1>
          <form onSubmit={loginHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>

            <Button
              variant="danger"
              type="button"
              onClick={() => logoutHandle()}
            >
              Logout
            </Button>
          </form>{" "}
          <br />
          <br />
          {item.email && (
            <>
              Login var <br />
              {item.email + " "}
              <Navigate to="/" replace={true} />
            </>
          )}
          {!item.email && (
            <>
              Login yok <br />
              {item.email + " "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
