import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Articulo = () => {
    return (
        <Card className='m-1 opacidadCard' bg='dark' text='light'>
            <Card.Img variant="top" src="https://haycosasmuynuestras.com/wp-content/uploads/2017/10/Huevos-rotos-MEDIANA.jpg" />
            <Card.Body className=''>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="outline-secondary">Ver más</Button>
            </Card.Body>
        </Card>
    );
};

export default Articulo;