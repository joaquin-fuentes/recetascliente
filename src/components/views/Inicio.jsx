import { useState } from 'react';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import ArticulosInicio from './Articulos/ArticulosInicio';


const Inicio = () => {
    const [categoriaBuscada, setCategoriaBuscada] = useState("")

    return (
        <Container className='main bg-menu text-center my-4 p-3'>
            <h1 className='letraBlanca'>¡Bienvenidos a Delicias en la Mesa!</h1>
            <h5 className='letraBlanca my-2'>Aquí encontrarás las mejores recetas para tu cocina</h5>
            <Form className='d-flex justify-content-center my-4'>
                <Form.Group as={Row} className=" p-5 w-50">
                        <Form.Select aria-label="Default select example" className='w-100'
                            onChange={(e) => setCategoriaBuscada(e.target.value)}
                            value={categoriaBuscada} >
                        <option value="">Todas las categorias</option>
                        <option value="Plato de entrada">Plato de entrada</option>
                        <option value="Plato principal">Plato principal</option>
                        <option value="Postre">Postre</option>
                        </Form.Select>
                </Form.Group>
            </Form>

            <ArticulosInicio categoriaBuscada={categoriaBuscada}></ArticulosInicio>
        </Container>
    );
};

export default Inicio;