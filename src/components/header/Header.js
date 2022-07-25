import { logoSvg } from "images/imageSvg";
import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import SearchHeader from "./searchHeader/SearchHeader";
import TypeJobs from "./typeJobs/TypeJobs";

function Header() {
  return (
    <div className={` ${styles.header}`}>
      <Navbar bg="light" expand="xl" variant="light">
        <LinkContainer to="/">
          <Navbar.Brand>{logoSvg}</Navbar.Brand>
        </LinkContainer>
        <Nav className="search d-none d-md-block">
          <SearchHeader />
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
        <TypeJobs />
      </div>
    </div>
  );
}

export default Header;
