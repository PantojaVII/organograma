import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [Teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#57c278',
    },
    {
      name: 'Front-end',
      color: '#8fcffa',
    },

  ])

  /* Esta linha utiliza o hook useState para criar um estado chamado colaboradores. O estado inicial [] é um array vazio. colaboradores é uma variável que conterá o valor atual desse estado, e setColaboradores é uma função que permite atualizar esse estado. */
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    /*  Isso atualiza o estado colaboradores. Ele cria uma nova matriz (um novo array) que é uma cópia do array anterior colaboradores e adiciona o novo colaborador ao final da matriz. Isso é feito usando o operador spread [...colaboradores] para criar uma cópia do array existente e, em seguida, acrescentando colaborador ao final. */
    setColaboradores([...colaboradores, colaborador])

  }

  function deleteColaborator() {
    console.log('delentando colaborador');
  }

  function upgradeColor(color, teamName) { 
    setTeams(Teams.map(
      Team => {
        if (Team.name === teamName) {
          Team.color = color;
        }
        return Team
      }
    ))
  }


  return (
    <div className='app'>
      <Banner></Banner>
      <Form
        Teams={Teams.map(Teams => Teams.name)}
        enviandoComoProps={teste => aoNovoColaboradorCadastrado(teste)}
      />

      {Teams.map((team, indice) => {
        return (
          <Team
            upgradeColor={upgradeColor}
      color={team.color}
            key={indice}
            nameTeam={team.name}
            aoDeletar={deleteColaborator}
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
