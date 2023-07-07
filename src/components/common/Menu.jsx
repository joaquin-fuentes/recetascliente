
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Swal from "sweetalert2";

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(false);
  };

  const handleNavLinkClick = () => {
    if (expand) {
      setExpand(false);
    }
  };
  
  const navegacion = useNavigate()

  const logout = () => {
      Swal.fire({
          title: 'Estas seguro?',
          text: "Seguro que desea cerrar su sesion?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
      }).then((result) => {
          if (result.isConfirmed) {
            // CONSULTAR COMO HACER PARA QUE AL CERRAR LA SESION LA RUTA ME LLEVE AL INCIO, CON ESTE CODIGO LO INTENTO PERO ME LLEVA AL ERROR 404
              //borrar del sessionstorage
              navegacion("/")
              sessionStorage.removeItem("usuarioLogueado")
              setUsuarioLogueado({})
              Swal.fire(
                  'Listo!',
                  'Sesion cerrada!',
                  'success'
              )
          }
      })

  }

  return (
    <Navbar  expand="md" className="mb-3 bg-menu">
      <Container fluid>
        <Navbar.Brand as={Link} to={""} className="text-light">Delicias en la Mesa</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleExpand}  className="menuHamburguesa"/>
        <Navbar.Collapse id="navbar-nav" className={expand ? "show" : ""}>
          <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Inicio</NavLink>
                  {
                       usuarioLogueado.email ?
                      <>
                        <NavLink end to={"/administrador"} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Administrador</NavLink>
                        <NavLink variant="dark" className=" nav-item nav-link text-light p-2" onClick={logout}>Salir</NavLink>
                     </>
                        :
                       <NavLink end to={"/login"} className={"nav-item nav-link text-light"}>Admin</NavLink>
                  }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;