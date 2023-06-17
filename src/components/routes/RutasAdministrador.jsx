import { Routes, Route } from "react-router-dom"
import Administrador from "../views/Administrador";
import CrearArticulo from "../views/Articulos/CrearArticulo";
import EditarArticulo from "../views/Articulos/EditarArticulo";



const RutasAdministrador = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Administrador></Administrador>} ></Route>
                <Route exact path="/crear" element={<CrearArticulo></CrearArticulo>} ></Route>
                <Route exact path="/editar" element={<EditarArticulo></EditarArticulo>} ></Route>
            </Routes>
        </>
    );
};

export default RutasAdministrador;