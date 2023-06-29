import {useState} from "react";
import CadastroForm from "./componentes/cadastro/CadastroForm";
import CreateTable from "./componentes/Create/CreateTable";

const App = () => {
  const [alunos, setAlunos] = useState([]);

  const handleAddAluno = (aluno) => {
    setAlunos([...alunos, aluno]);
  };

  return (
    <div>
      <h1>Matrícula de Alunos</h1>
      <CadastroForm onSubmit={handleAddAluno} />
      <CreateTable alunos={alunos} />
    </div>
  );
};
export default App;