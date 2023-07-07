import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerArticulo } from "../helpers/queries";

const DetalleArticulo = () => {
    const { id } = useParams()
    const [articulo, setArticulo] = useState({})

    useEffect(() => {
        obtenerArticulo(id).then((respuesta) => {
            setArticulo(respuesta)
        })

    }, [])



    return (
        <Container className="main bg-menu text-center my-4 p-3 letraBlanca" >
            <Row className="m-4">
                <Col xs={12} md={6} className="text-center " >
                    <img src={articulo.imagen} alt="imagen de producto" className="w-100" />
                </Col>
                <Col xs={12} md={6} >
                    <article className="p-2">
                        <h3>{articulo.receta}</h3>
                        <hr />
                        <p className="text-white ">Categoria: <span className="text-white"> {articulo.categoria}</span></p>
                        <p className="text-white ">Descripcion: <span className="text-white"> {articulo.descripcion}</span></p>
                        <div className="text-white">Ingredientes:
                            <ul className="text-white p-0" >
                                {Array.isArray(articulo.ingredientes) &&
                                    articulo.ingredientes.map((ingrediente, index) => (
                                        <li key={index} className="liIngredientes">{ingrediente}</li>
                                    ))}
                            </ul>
                        </div>
                        <div className="text-white">Procedimiento:
                            <ol className="text-white p-0">
                                {Array.isArray(articulo.procedimiento) &&
                                    articulo.procedimiento.map((ingrediente, index) => (
                                        <li key={index} className="liProcedimiento">{ingrediente}</li>
                                    ))}
                            </ol>
                        </div>                    
                         <p className="text-white">Tiempo de preparacion: <span className="text-white">{articulo.minutos} minutos</span></p>


                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default DetalleArticulo;