import { useEffect, useState } from "react";
import { Table, Button, Modal, Card, Form } from "react-bootstrap";
import firebase from "../firebase";

import "./ReadTable.css";

const ReadTable = () => {
  const [alunos, setAlunos] = useState([]);
  const [selectedAluno, setSelectedAluno] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormValues, setUpdateFormValues] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedAluno, setUpdatedAluno] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteConfirmationAluno, setDeleteConfirmationAluno] = useState(null);

  useEffect(() => {
    const dbRef = firebase.ref("alunos");

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

  
  const handleShowDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
    setDeleteConfirmationAluno(selectedAluno);
  };

  const handleDeleteConfirmation = () => {
    const dbRef = firebase.ref(`alunos/${deleteConfirmationAluno.id}`);
    dbRef
      .remove()
      .then(() => {
        console.log("Matrícula excluída com sucesso!");
        setShowDeleteConfirmation(false);
      })
      .catch((error) => {
        console.error("Erro ao excluir a matrícula:", error);
        setShowDeleteConfirmation(false);
      });
  };

  const handleUpdateAluno = (aluno) => {
    setSelectedAluno(aluno);
    setUpdateFormValues(aluno);
    setShowUpdateForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsUpdating(true);

    const dbRef = firebase.ref(`alunos/${selectedAluno.id}`);
    dbRef
      .update(updateFormValues)
      .then(() => {
        console.log("Dados do aluno atualizados com sucesso!");
        setShowUpdateForm(false);
        setIsUpdating(false);
        setUpdatedAluno(updateFormValues);
      })
      .catch((error) => {
        console.error("Erro ao atualizar os dados do aluno:", error);
        setIsUpdating(false);
        setUpdatedAluno(selectedAluno);
      });
  };

  return (
    <div className="container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>Exibir</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.curso}</td>
              <td>
                <Button onClick={() => handleShowAluno(aluno)}>
                  Detalhes da Matrícula
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        show={selectedAluno !== null && !isUpdating}
        onHide={handleCloseAluno}
      >
        <Modal.Header closeButton>
          <Modal.Title>{updatedAluno?.nome || selectedAluno?.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.entries(updatedAluno || selectedAluno || {}).map(
            ([campo, valor]) => {
              if (campo === "id") return null;
              return (
                <Card.Text key={campo}>
                  {campo.charAt(0).toUpperCase() + campo.slice(1)}: {valor}
                </Card.Text>
              );
            }
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleShowDeleteConfirmation}>
            Excluir
          </Button>
          <Button
            variant="primary"
            onClick={() => handleUpdateAluno(selectedAluno)}
          >
            Atualizar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateForm} onHide={() => setShowUpdateForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Atualizar Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {Object.entries(updateFormValues || {}).map(([campo, valor]) => {
              if (campo === "id") return null; // Exclui o campo de ID
              return (
                <Form.Group controlId={`form${campo}`} key={campo}>
                  <Form.Label>
                    {campo.charAt(0).toUpperCase() + campo.slice(1)}:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={campo}
                    value={valor}
                    onChange={handleChange}
                  />
                </Form.Group>
              );
            })}
            <Button variant="primary" type="submit">
              Atualizar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão ⚠</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        🚨 ATENÇÃO!!! Esta ação irá excluir a matrícula de{" "}
          {deleteConfirmationAluno?.nome} {" "}
          do banco de dados. Tem certeza que
          deseja continuar?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirmation(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmation}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReadTable;
