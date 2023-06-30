import {useState} from "react";
import CadastroForm from "./componentes/cadastro/CadastroForm";
import CreateTable from "./componentes/Create/CreateTable";
import ReadTable from "./componentes/Read/ReadTable";
import firebase from "./firebase";

const App = () => {
  const [alunos, setAlunos] = useState([]);

  const handleAddAluno = (aluno) => {
    const dbRef = firebase.ref("alunos");
    dbRef.push(aluno)
      .then(() => {
        setAlunos([...alunos, aluno]);
      })
      .catch((error) => {
        console.error("Erro ao adicionar aluno:", error);
      });
  };

  return (
    <div>
      <h1>Matrícula de Alunos</h1>
      <CadastroForm onSubmit={handleAddAluno} />
      <CreateTable alunos={alunos} />
      <h2>Lista de Alunos</h2>
      <ReadTable />
    </div>
  );
};
export default App;