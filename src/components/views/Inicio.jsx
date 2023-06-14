import React from 'react';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import ArticulosInicio from './Articulos/ArticulosInicio';

const Inicio = () => {
    return (
        <Container className='main bg-menu text-center my-4 p-3'>
            <h1 className='letraBlanca'>¡Bienvenidos a Delicias en la Mesa!</h1>
            <h5 className='letraBlanca my-2'>Aquí encontrarás las mejores recetas para tu cocina</h5>
            <Form className='d-flex justify-content-center my-4'>
                <InputGroup className='w-50'>
                    <Form.Select aria-label="Default select example">
                        <option value="">Buscar por categoria</option>
                        <option value="1">opcion 1</option>
                        <option value="2">opcion 2</option>
                        <option value="3">opcion 3</option>
                    </Form.Select>
                </InputGroup>
            </Form>
            <ArticulosInicio></ArticulosInicio>
        </Container>
    );
};

export default Inicio;