import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
 
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null
    //preguntar si usuario NO esta logueado
    if(!usuarioLogueado){
        return <Navigate to={"/error404"}></Navigate>
    } else{
        return children
    }

};

export default RutasProtegidas;