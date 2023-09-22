import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const Teams = [
    {
      name: 'Programação',
      colorPrimary: '#d9f7e9',
      colorSecundary: '#57c278',
    },
    {
      name: 'Front-end',
      colorPrimary: '#e8f8ff',
      colorSecundary: '#8fcffa',
    },

  ]

  /* Esta linha utiliza o hook useState para criar um estado chamado colaboradores. O estado inicial [] é um array vazio. colaboradores é uma variável que conterá o valor atual desse estado, e setColaboradores é uma função que permite atualizar esse estado. */
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    /*  Isso atualiza o estado colaboradores. Ele cria uma nova matriz (um novo array) que é uma cópia do array anterior colaboradores e adiciona o novo colaborador ao final da matriz. Isso é feito usando o operador spread [...colaboradores] para criar uma cópia do array existente e, em seguida, acrescentando colaborador ao final. */
    setColaboradores([...colaboradores, colaborador])

  }


  return (
    <div className='app'>
      <Banner></Banner>
      <Form
        Teams={Teams.map(Teams => Teams.name)}
        enviandoComoProps={teste => aoNovoColaboradorCadastrado(teste)}
      />

      {Teams.map(team => {
        return (
          <Team
            colorPrimary={team.colorPrimary}
            colorSecundary={team.colorSecundary}
            key={team.name}
            nameTeam={team.name}
            colaborators={colaboradores.filter(colaborator => (colaborator.team === team.name))}
          >
          </Team>
        )
      }
      )}
    </div>
  );
}

export default App;
