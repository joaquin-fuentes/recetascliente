import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Articulo from "./Articulo";
import { useEffect, useState } from 'react';
import { obtenerArticulos } from "../../helpers/queries";


const ArticulosInicio = ({categoriaBuscada}) => {
    const [articulos, setArticulos] = useState([])

    // const navegacion = useNavigate()

    useEffect(() => {
        obtenerArticulos().then((respuesta) => {
            if (respuesta != null) {
                setArticulos(respuesta)
            } else {
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
                // navegacion("/error404")
            }
        })
    }, [])
    return (
        <CardGroup className="d-flex justify-content-center">
            <Row className="w-100">
                {
                    articulos.map((articulo) => {
                        if(categoriaBuscada === articulo.categoria || categoriaBuscada === ""){
                            return <Col sm={6} lg={4} key={articulo._id} >
                                       <Articulo articulo={articulo}></Articulo>
                                   </Col>
                        }
                        
                    })
                }
            </Row>
        </CardGroup>
    );
};

export default ArticulosInicio;