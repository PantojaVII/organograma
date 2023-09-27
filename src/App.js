import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [Teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Front-end',
      color: '#8fcffa',
    },

  ])

  /* Esta linha utiliza o hook useState para criar um estado chamado colaboradores. O estado inicial [] é um array vazio. colaboradores é uma variável que conterá o valor atual desse estado, e setColaboradores é uma função que permite atualizar esse estado. */
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {

    /*  Isso atualiza o estado colaboradores. Ele cria uma nova matriz (um novo array) que é uma cópia do array anterior colaboradores e adiciona o novo colaborador ao final da matriz. Isso é feito usando o operador spread [...colaboradores] para criar uma cópia do array existente e, em seguida, acrescentando colaborador ao final. */
    setColaboradores([...colaboradores, colaborador])

  }
  const updateTeams = (Team) => {

    setTeams([...Teams, Team])

  }

  function deleteColaborator(id) {
    console.log(id);
    console.log(colaboradores);
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function upgradeColor(color, id) {
    setTeams(Teams.map(
      Team => {
        if (Team.id === id) {
          Team.color = color;
        }
        return Team
      }
    ))
  }

  function changeFavorite(idColaborator) {
    if (idColaborator) {
      setColaboradores(colaboradores.map(colaborator => {
        if (colaborator.id === idColaborator)
          colaborator.favorite = !colaborator.favorite
        return colaborator
      }
      )
      )
    } else {
      return false
    }
  }


  return (
    <div className='app'>
      <Banner></Banner>
      <Form
        Teams={Teams.map(Teams => Teams.name)}
        enviandoComoProps={teste => aoNovoColaboradorCadastrado(teste)}
        updateTeam={newTeam => updateTeams(newTeam)}

      />

      {Teams.map((team) => {
        return (
          <Team
            upgradeColor={upgradeColor}
            color={team.color}
            id={team.id}
            nameTeam={team.name}
            aoDeletar={deleteColaborator}
            colaborators={colaboradores.filter(colaborator => (colaborator.team === team.name))}
            functionFavorite={changeFavorite}
          >
          </Team>
        )
      }
      )}
    </div>
  );
}

export default App;
