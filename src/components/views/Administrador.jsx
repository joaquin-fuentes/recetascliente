import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemArticulo from "./Articulos/ItemArticulo";
import { obtenerArticulos } from '../helpers/queries';
import Swal from "sweetalert2"
import { useEffect, useState } from 'react';



const Administrador = () => {
    const [articulos, setArticulos] = useState([])

    // const navegacion = useNavigate()

    useEffect(()=>{
        obtenerArticulos().then((respuesta)=>{
            if (respuesta != null){
                setArticulos(respuesta)
            } else{
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
                // navegacion("/error404")
            }
        })
    },[])

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
                    {
                        articulos.map((articulo)=>{
                            return <ItemArticulo articulo={articulo} setArticulos={setArticulos} key={articulo._id}></ItemArticulo>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;