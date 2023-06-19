import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Articulo = ({articulo}) => {
    return (
        <Card className='m-1 opacidadCard' bg='dark' text='light'>
            <Card.Img variant="top" src={articulo.imagen} className='imagenArticuloInicio' />
            <Card.Body className=''>
                <Card.Title>{articulo.nombreArticulo}</Card.Title>
                <Card.Text>
                    {articulo.descripcion}
                </Card.Text>
                <NavLink to={`./detalleArticulo/${articulo.id}`} className="btn btn-outline-secondary" >Ver detalle</NavLink>
            </Card.Body>
        </Card>
    );
};

export default Articulo;