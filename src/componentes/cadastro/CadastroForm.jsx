import {useState} from "react";

const CadastroForm = ({onSubmit}) => {
    const [nome,setNome] = useState("");
    const [idade, setIdade] = useState("");
    const[curso, setCurso] = useState("");
    const[endereco, setEndereco] = useState("");
    const[responsavel, setResponsavel] = useState("");
    const[contato, setContato] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nome || !idade || !curso || !endereco || !responsavel|| !contato ) {
            setError("Todos os campos são obrigatórios");
            return;
          }

        onSubmit({nome, idade, curso, endereco, responsavel,contato});
        setNome("");
        setIdade("");
        setCurso("");
        setEndereco("");
        setResponsavel("");
        setContato("");
        setError("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input 
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input 
                type="number"
                placeholder="Idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
             <input 
                type="text"
                placeholder="Curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Responsável"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
            />
            <input 
                type="number"
                placeholder="Tel - Contato"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
            />
            <button type="submit">Matricular</button>
        </form>
    );
};
export default CadastroForm;