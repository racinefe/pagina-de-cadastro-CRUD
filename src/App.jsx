import Sobre from "./componentes/sobre";
import Home from "./componentes/paginas";
import Cadastro from "./componentes/cadastro";
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <h1>Olá Mundo!</h1>
        <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link}to="/">Página Inicial</Nav.Link>
          <Nav.Link as={Link}to="/cadastro">Cadastro</Nav.Link>
          <Nav.Link as={Link}to="/sobre">Sobre</Nav.Link>
        </Nav>
         
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
          </Routes>
        </BrowserRouter>
       
      </div>
    </>
  );
}

export default App;
