import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import {consultaBorrarArticulo, obtenerArticulos} from "../../helpers/queries"

const ItemArticulo = ({ articulo, setArticulos }) => {

    const borrarArticulo = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas borrar el articulo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {

                // aqui tengo que hacer la peticion DELETE 
                consultaBorrarArticulo(articulo.id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `El articulo ${articulo.nombreProducto} fue eliminado`,
                            'success'
                        )
                        //actualizar el sate producto del componente administrador
                        obtenerArticulos().then((respuesta)=>{setArticulos(respuesta)})
                        
                    } else {
                        Swal.fire("Se produjo un error", "Error, intentelo mas tarde ", "error")
                    }
                })
            }
        })
    }

    return (
        <tr>
            <td>{articulo.id}</td>
            <td>{articulo.nombreArticulo}</td>
            <td>{articulo.categoria}</td>
            <td>{`${articulo.minutos} minutos`}</td>
            <td className='text-center'>
                <Link to={`/administrador/editar/${articulo.id}`} className={"btn btn-outline-light m-1"} >Editar</Link>
                <Button className='m-1' variant="outline-danger" onClick={borrarArticulo}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemArticulo;