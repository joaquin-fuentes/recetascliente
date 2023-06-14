import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap";
import Menu from './components/common/Menu';
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleArticulo from "./components/views/DetalleArticulo";
import Administrador from "./components/views/Administrador";

const App = () => {


  return (

    <BrowserRouter>
      <Menu></Menu>
      <Inicio></Inicio>
      <DetalleArticulo></DetalleArticulo>
      <Administrador></Administrador>
      <Footer></Footer>
    </BrowserRouter>

  );
};

export default App;