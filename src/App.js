import Banner from './components/Banner';
import InputText from './components/InputText';

function App() {
  return (
    <div className='app'>
      <Banner></Banner>
      <InputText label='nome' placeholder='Digite seu nome' />
      <InputText label='Cargo'  placeholder='Digite seu cargo' />
      <InputText label='Imagem'  placeholder='Envie sua imagem' />
    </div>
  );
}

export default App;
