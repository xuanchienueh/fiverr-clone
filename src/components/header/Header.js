import { logoSvg } from "images/imageSvg";
import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import ListJob from "./listJob/ListJob";

function Header() {
  return (
    <div className={` ${styles.header}`}>
      <Navbar bg="light" expand="xl" variant="light">
        <Navbar.Brand href="/">{logoSvg}</Navbar.Brand>

        <Nav className="search d-none d-md-block">
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="What service are you looking today?"
              aria-label="What service are you looking today?"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <span role="button" className="input-group-text" id="basic-addon2">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto align-items-lg-center font-weight-bold">
            <Nav.Link href="#">Fiverr Business</Nav.Link>
            <Nav.Link href="#">Explore</Nav.Link>
            <Nav.Link href="#">English</Nav.Link>
            <Nav.Link href="#">$ USD</Nav.Link>
            <Nav.Link href="#">Become a Seller</Nav.Link>
            <Nav.Link href="#">Sign in</Nav.Link>
            <Nav.Link href="#">
              <Button variant="outline-success">John</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <ListJob />
      </div>
    </div>
  );
}

export default Header;
