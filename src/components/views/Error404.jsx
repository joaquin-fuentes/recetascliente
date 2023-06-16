import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

const Error404 = () => {
    return (
        <Container className='main bg-menu text-center my-4 p-3 letraBlanca'>
            <Row className='text-center mb-3'>
                <Col xs={12} className='p-2'>
                    <img src="https://previews.123rf.com/images/stolenpencil/stolenpencil1603/stolenpencil160300015/55884978-error-de-404-p%C3%A1ginas-con-una-pizza-la-plantilla-de-vector-ilustrada.jpg" alt="imagen de error 404" className="imagenError404" />
                </Col>
                <Col xs={12}>
                    <p className='text-light fs-2 fw-bold'>PAGINA NO ENCONTRADA</p>
                <NavLink end to={"/"} className={"btn btn-primary"} >Volver a inicio</NavLink>
                </Col>
            </Row>
        </Container>
    );web
};

export default Error404;