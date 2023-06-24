import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Cabecalho = () => {
  return (
    <div>
      <Navbar
        variant="dark"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#9400d3" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src="https://cdn.discordapp.com/attachments/954503804676603998/1102345050098253844/image-removebg-preview.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <NavDropdown title="Filmes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/filmes/populares">
                  Populares
                </NavDropdown.Item>
                <NavDropdown.Item href="/filmes/melhores">
                  Melhores
                </NavDropdown.Item>
                <NavDropdown.Item href="/filmes/cartaz">
                  Em Cartaz
                </NavDropdown.Item>
                <NavDropdown.Item href="/filmes/em_breve">
                  Em breve
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Series" id="basic-nav-dropdown">
                <NavDropdown.Item href="/series/populares">
                  Populares
                </NavDropdown.Item>
                <NavDropdown.Item href="/series/melhores">
                  Melhores
                </NavDropdown.Item>
                <NavDropdown.Item href="/series/em_breve">
                  Em breve
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cabecalho;
