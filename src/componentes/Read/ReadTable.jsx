import { useEffect, useState } from "react";
import firebase from "./firebase";
import { Table, Button, Card } from "react-bootstrap";

const ReadTable = () => {
  const [alunos, setAlunos] = useState([]);
  const [selectedAluno, setSelectedAluno] = useState(null);

  useEffect(() => {
    const dbRef = firebase.ref("alunos");

    // Ouvir alterações no banco de dados
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const alunosArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setAlunos(alunosArray);
      } else {
        setAlunos([]);
      }
    });

    // Remover o ouvinte ao desmontar o componente
    return () => {
      dbRef.off();
    };
  }, []);

  const handleShowAluno = (aluno) => {
    setSelectedAluno(aluno);
  };

  const handleCloseAluno = () => {
    setSelectedAluno(null);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Curso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.idade}</td>
              <td>{aluno.curso}</td>
              <td>
                <Button onClick={() => handleShowAluno(aluno)}>Exibir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedAluno && (
        <Card>
          <Card.Body>
            <Card.Title>{selectedAluno.nome}</Card.Title>
            <Card.Text>Idade: {selectedAluno.idade}</Card.Text>
            <Card.Text>Curso: {selectedAluno.curso}</Card.Text>
            {/* Adicione os outros campos do cadastro aqui */}
            <Button onClick={handleCloseAluno}>Fechar</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ReadTable;
