import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap";
import Menu from './components/common/Menu';
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleArticulo from "./components/views/DetalleArticulo";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Login from "./components/views/Login";
import CrearArticulo from "./components/views/Articulos/CrearArticulo";

const App = () => {


  return (

    <BrowserRouter>
      <Menu></Menu>
      <Inicio></Inicio>
      <DetalleArticulo></DetalleArticulo>
      <Administrador></Administrador>
      <Error404></Error404> 
      <Login></Login>
      <CrearArticulo></CrearArticulo>
      <DetalleArticulo></DetalleArticulo>
      <Footer></Footer>
    </BrowserRouter>

  );
};

export default App;