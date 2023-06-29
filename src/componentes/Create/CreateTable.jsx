const CreateTable = ({ alunos}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Curso</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map((aluno, index)=>(
                    <tr key={index}>
                        <td>{aluno.nome}</td>
                        <td>{aluno.idade}</td>
                        <td>{aluno.curso}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
export default CreateTable;