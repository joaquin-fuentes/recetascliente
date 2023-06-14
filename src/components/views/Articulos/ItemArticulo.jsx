import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const ItemArticulo = () => {

   

    return (
        <tr>
            <td>20251</td>
            <td>Milanesa con puré</td>
            <td>Plato principal</td>
            <td>1:30 hs</td>
            <td className='text-center'>
                <Link to={""} className={"btn btn-outline-light m-1"} >Editar</Link>
                <Button className='m-1' variant="outline-danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemArticulo;