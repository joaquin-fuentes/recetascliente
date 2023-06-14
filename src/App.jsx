import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap";
import Menu from './components/common/Menu';
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";

const App = () => {


  return (

    <BrowserRouter>
      <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer>
    </BrowserRouter>

  );
};

export default App;