import { Offcanvas } from "bootstrap";
import React from "react";
import {
  Navbar,
  Container,
  NavbarBrand,
  Nav,
  NavDropdown,
  Button,
  // Offcanvas,
} from "react-bootstrap";

export default function Header() {
  return (
    <div>
      {" "}
      <Navbar variant="light" fixed="top" expand="md" className="top">
        <Container>
          <NavbarBrand href="#">
            <img src={require("../../src/logo-header.png")} alt="" />
          </NavbarBrand>
          {/* <Navbar.Toggle aria-controls="navbarToggleExternalContent"> */}
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* <Navbar.Collapse id="navbarToggleExternalContent"> */}
              {/* <Navbar.Offcanvas */}
                {/* // id="navbarToggleExternalContent" */}
                {/* // aria-labelledby="navbarToggleExternalContent" */}
                {/* // placement="end */}
                {/* // " */}
              {/* // > */}
                {/* <button */}
                  {/* // type="button" */}
                  {/* // className="btn-close text-reset" */}
                  {/* // data-bs-dismiss="offcanvas" */}
                  {/* // aria-label="Close" */}
                {/* // ></button> */}
                <Nav className="me-auto">
                  <NavDropdown className="mr-3" title="Product">
                    <NavDropdown.Item href="#">Overview</NavDropdown.Item>
                    <NavDropdown.Item href="#">Feautures</NavDropdown.Item>
                    <NavDropdown.Item href="#">Plans</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className="mr-3" title="Resources">
                    <NavDropdown.Item href="#">Solutions</NavDropdown.Item>
                    <NavDropdown.Item href="#">NewsRoom</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className="mr-3" title="Company">
                    <NavDropdown.Item href="#">About</NavDropdown.Item>
                    <NavDropdown.Item href="#">Team</NavDropdown.Item>
                    <NavDropdown.Item href="#">Careers</NavDropdown.Item>
                    <NavDropdown.Item href="#">Advertise</NavDropdown.Item>
                    <NavDropdown.Item href="#">Contact us</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <a href="#" className="hov">
                  Log in
                </a>
                <Button className="started">Get started</Button>
                {/* </Navbar.Body> */}
              {/* </Navbar.Offcanvas> */}
            {/* </Navbar.Collapse> */}
          {/* </Navbar.Toggle> */}
        </Container>
      </Navbar>
    </div>
  );
}
