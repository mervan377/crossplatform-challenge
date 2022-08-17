import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function Navbarr() {
  const storageUser = JSON.parse(localStorage.getItem("authToken")) ?? [];
  const navigate = useNavigate();
  const logoutHandle = (e) => {
    localStorage.removeItem("authToken");
    navigate("../Login", {replace: true});
  };
  return (
    <div>
      {storageUser.length === 0 ? <Navigate to="/Login" replace={true} /> : ""}

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              React-Bootstrap
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={"nav-link"}>
                Home
              </NavLink>
              <NavLink to="all-tasks" className={"nav-link"}>
                All Taks
              </NavLink>
              <NavLink to="my-tasks" className={"nav-link"}>
                My Tasks
              </NavLink>
              <NavLink to="pending-tasks" className={"nav-link"}>
                Pending Tasks
                {/* 
                    Departmanına gelen tasklar görüntülenebilecek 
                    Confirm or Reject
                  */}
              </NavLink>
              <NavLink to="create-task" className={"nav-link"}>
                Create New Task
              </NavLink>
              <Button
                variant="danger"
                type="button"
                onClick={() => logoutHandle()}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
