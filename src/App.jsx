import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/common/Menu';

const App = () => {


  return (

    <BrowserRouter>
      <Menu></Menu>
    </BrowserRouter>

  );
};

export default App;