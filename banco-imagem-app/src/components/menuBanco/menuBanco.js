import './menuBanco.css';

function ListarBanco(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <div key={number.toString()} onClick={(e) => click(number.toString(), e)} className="Botao">
        {number}
    </div>
  );

  function click(id, e) {
    e.preventDefault();
    console.log('Click...', id);
  }

  return (
    <div className="Tabela">
      {listItems}
      <CriarBanco />
    </div>
  )
}

function CriarBanco() {
  
  return (
    <div className="Botao_Adicionar">
      +
    </div>
  )
}

const numbers = [1, 2, 3, 4, 5];
const text = ['texto 1', 'texto 2', 'texto 3'];

function Banco() {

  return (
    <div className="Banco">
      <ListarBanco className="Banco" numbers={numbers} />
      
    </div>
  );

}

export default Banco;