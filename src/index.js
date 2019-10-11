import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

//Components
import Home from "./components/home";
import AcademicOverview from "./components/academic-overview";
import WhoWeAre from "./components/who-we-are";
import OurCampuses from "./components/our-campuses";
import Application from "./components/application";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Navbar bg="light" variant="light" fixed="top">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="./images/leadermold_logo.jpg"
                  width="140"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Link to="/academic-overview">Academic overview</Link>
                  <Link to="/who-we-are">Who we are</Link>
                  <Link to="/our-campuses">Our Campuses</Link>
                </Nav>
              </Navbar.Collapse>
              <Form inline>
                <Button to="/application" variant="outline-dark">
                  APPLY ONLINE
                </Button>
              </Form>
            </Navbar>
            <br />
            <br />
            <br />
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/academic-overview" component={AcademicOverview} />
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/our-campuses" component={OurCampuses} />
          <Route path="/application" component={Application} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
