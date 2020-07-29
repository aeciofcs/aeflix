import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value){
      setValues({
        ...values,
        [key]: value,
      })
    }

    function handleChange(event){
      const { getAttribute, value } = event
      setValue(
        getAttribute('name'),
        value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastrar Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(event){
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ])

          setValues(valoresIniciais)
        }}>
          <div>
            <label>
              Nome da Categoria:
              <input 
                type="text"
                value={values.nome}
                name="nome"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>            
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Cor:
              <input 
                type="color"
                value={values.cor}
                name="cor"
                onChange={handleChange}
              />
            </label>
          </div>

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map( (categoria, indice)=>{
            return (
              <li key={`${categoria}${indice}`}>
                { `${categoria.nome}; 
                   ${categoria.descricao};
                   ${categoria.cor}.` }
              </li>
            )
          } )}
        </ul>
    
        
        <Link to="/">
          Ir para a home
        </Link>
      </PageDefault>
    );
  }

export default CadastroCategoria;