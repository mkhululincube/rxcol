import React from "react";

//Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <footer>
      <div>
        <br />
        <Navbar bg="light" variant="light" sticky="bottom">
          <Navbar />
          <Nav className="mr-auto">
            <Nav.Link href="#">
              © Copyright 2019 Leadermold Private Limited
            </Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </footer>
  );
};

export default Footer;
