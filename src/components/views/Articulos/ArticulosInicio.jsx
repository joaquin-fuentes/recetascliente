import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Articulo from "./Articulo";

const ArticulosInicio = () => {
    return (
        <CardGroup>
            <Row>
                <Col sm={6} lg={4} >
                    <Articulo></Articulo>
                </Col>
                <Col sm={6} lg={4} >
                    <Articulo></Articulo>
                </Col>
                <Col sm={6} lg={4} >
                    <Articulo></Articulo>
                </Col>
                <Col sm={6} lg={4} >
                    <Articulo></Articulo>
                </Col>
                <Col sm={6} lg={4} >
                    <Articulo></Articulo>
                </Col>
                <Col sm={6} lg={4} >
                    <Articulo></Articulo>
                </Col>
                <Col sm={6} lg={4} >
                    <Articulo></Articulo>
                </Col>
            </Row>
        </CardGroup>
    );
};

export default ArticulosInicio;