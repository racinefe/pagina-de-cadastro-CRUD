import React from "react";
import { Table } from "react-bootstrap";

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [
        { id: 1, nome: "Item-01", link: "www.item-01.com" },
        { id: 2, nome: "Item-02", link: "www.item-02.com" },
        { id: 3, nome: "Item-03", link: "www.item-03.com" },
        { id: 4, nome: "Item-04", link: "www.item-04.com" },
      ],
    };
  }
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Link</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>

          {
            this.state.produtos.map((produtos) => 

                <tr key={produtos.toString()}>

                    <td>{produtos.nome}</td>
                    <td>{produtos.link}</td>
                    <td>Atualizae Excluir</td>

                </tr>
            )
          }

        </tbody>
      </Table>
    );
  }
}
export default Cadastro;
