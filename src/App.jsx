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
        alert.error("Erro ao adicionar aluno:", error);
      });
  };

  return (
    <>
    <head className="head">
       <h1 className="mt-4">Sistema de Matrícula </h1>
    </head>
      <Container className="container">
       
        <div className="titulo-guia">
          <Tabs justify>
            <Tab.Tab key="cadastro" eventKey="cadastro" title="Matrícula">
              <h2>Cadastro de Aluno</h2>
              <CadastroForm onSubmit={handleAddAluno} />
            </Tab.Tab>
            <Tab.Tab key="lista" eventKey="lista" title="Lista de Alunos">
              <h2>Alunos Matriculados</h2>
              <ReadTable />
            </Tab.Tab>
          </Tabs>
        </div>
      </Container>
      <footer className="footer">
        <div className="texto-footer">
        <p>
            GuitHub: <a href="https://github.com/racinefe">@racinefell</a>
          </p>
          <p> Coded by: Racine Fellipe </p>
          <p>
            Linkedin: <a href="linkedin.com/in/racinefellipe">Racine Fellipe</a>
          </p>
         
        </div>
        
      </footer>
    </>
  );
};

export default App;
