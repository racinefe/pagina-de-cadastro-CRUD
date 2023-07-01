import { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import CadastroForm from "./componentes/cadastro/CadastroForm";
import ReadTable from "./componentes/Read/ReadTable";

import firebase from "./componentes/firebase";


import "./App.css";

const App = () => {
  const [alunos, setAlunos] = useState([]);

  const handleAddAluno = (aluno) => {
    const dbRef = firebase.ref("alunos");
    dbRef
      .push(aluno)
      .then(() => {
        setAlunos([...alunos, aluno]);
      })
      .catch((error) => {
        console.error("Erro ao adicionar aluno:", error);
      });
  };

  return (
    <Container className="container">
      <h1 className="mt-4">Sistema de Matrícula </h1>
      <div className="titulo-guia">
        <Tabs justify>
        <Tab.Tab eventKey="cadastro" title="Cadastro">
          <h2 >Cadastro de Aluno</h2>
          <CadastroForm onSubmit={handleAddAluno} />
        </Tab.Tab>
        <Tab.Tab eventKey="lista" title="Lista">
          <h2>Alunos Matriculados</h2>
          <ReadTable />
        </Tab.Tab>
        
      </Tabs>
      </div>
      
    </Container>
  );
};

export default App;
