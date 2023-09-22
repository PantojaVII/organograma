import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import InputText from './components/InputText';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])

  }


  return (
    <div className='app'>
      <Banner></Banner>
      <Form enviandoComoProps={teste => aoNovoColaboradorCadastrado(teste)} />
    </div>
  );
}

export default App;
