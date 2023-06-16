import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemArticulo from "./Articulos/ItemArticulo";

const Administrador = () => {
    return (
        <Container className='main bg-menu text-center my-4 p-3 letraBlanca'>
            <div className='d-flex justify-content-between '>
                <h3>Administrador de recetas</h3>
                <Link to={"/administrador/crear"} className={"btn btn-outline-light m-1"} >Agregar</Link>
            </div>
            <hr />
            <Table striped responsive bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Receta</th>
                        <th>Categoria</th>
                        <th>Tiempo preparacion</th>
                        <th className='text-center'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemArticulo></ItemArticulo>
                    <ItemArticulo></ItemArticulo>
                    <ItemArticulo></ItemArticulo>
                    <ItemArticulo></ItemArticulo>
                    <ItemArticulo></ItemArticulo>
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;