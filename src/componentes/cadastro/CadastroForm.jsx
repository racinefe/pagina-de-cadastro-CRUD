import {useState} from "react";

const CadastroForm = ({onSubmit}) => {
    const [nome,setNome] = useState("");
    const [idade, setIdade] = useState("");
    const[curso, setCurso] = useState("");
    const[endereco, setEndereco] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({nome, idade, curso, endereco});
        setNome("");
        setIdade("");
        setCurso("");
        setEndereco("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input 
                type="text"
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
            <button type="submit">Matricular</button>
        </form>
    );
};
export default CadastroForm;