import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CadastroForm.css";

const CadastroForm = ({ onSubmit }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [curso, setCurso] = useState("");
  const [endereco, setEndereco] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [contato, setContato] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !idade || !curso || !endereco || !responsavel || !contato) {
      alert("⚠ Atenção!!! Todos os campos da Matrícula são obrigatórios.");
      return;
    }

    onSubmit({ nome, idade, curso, endereco, responsavel, contato });
    setNome("");
    setIdade("");
    setCurso("");
    setEndereco("");
    setResponsavel("");
    setContato("");
    setError("");
  };

  return (
    <div className="container-cadastroForm" >
      <Form onSubmit={handleSubmit} className="form">
        {error && <p>{error}</p>}

        <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            floating
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Idade" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            floating
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Curso" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            floating
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Endereço"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            floating
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Responsável"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Responsável"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            floating
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Tel - Contato"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="Tel - Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            floating
          />
        </FloatingLabel>

        <Button className="button" type="submit">
          Matricular
        </Button>
      </Form>
    </div>
  );
};

export default CadastroForm;
