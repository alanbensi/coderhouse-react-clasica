import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Aca esta el greeting del item list container"} />
      <ItemCount initial={1} stock={5} onAdd={(cantidad)=>console.log(`${cantidad} unidad/es agregada/s al pedido`)}/>
    </div>
  );
}

export default App;