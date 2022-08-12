
import './App.scss';
import CardPessoa from './componentes/CardPessoa';

function App() {
  return (
    <div className="App" >
    <header>
      <h1>Estudando ReactJS | Componentes</h1>
    </header>
    <div className='corpo'>
        <CardPessoa estilo='box-Row'secao='Seção 01'           a='./images/ppp.png' />
        <CardPessoa estilo='box-Row-Reverse'secao='Seção 02'   a='./images/ppp.png' />
        <CardPessoa estilo='box-Column'secao='Seção 03'        a='./images/ppp.png'/>
    </div>
  </div>

        
  );
}

export default App;
