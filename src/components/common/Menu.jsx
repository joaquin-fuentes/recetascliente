
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"
import { useState } from 'react';

const Menu = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(false);
  };

  const handleNavLinkClick = () => {
    if (expand) {
      setExpand(false);
    }
  };

  return (
    <Navbar bg="success" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand as={Link} to={""} className="text-light">MenuMax</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleExpand} />
        <Navbar.Collapse id="navbar-nav" className={expand ? "show" : ""}>
          <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Ventas</NavLink>
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Compras</NavLink>
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Productos</NavLink>
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Resumen</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;