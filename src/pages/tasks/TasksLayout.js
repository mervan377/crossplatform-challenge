import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import StyledNavbar from "../Navbar";

class SharedLayout extends Component {
  render() {
    return (
      <div>
        <StyledNavbar />
        <Container className="mt-5 pt-5">
          <Outlet />
        </Container>
      </div>
    );
  }
}

export default SharedLayout;
