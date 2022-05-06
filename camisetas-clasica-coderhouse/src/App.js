import './App.css';
import NavBar from './components/Nabvar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Aca esta el greeting del item list container"} />
    </div>
  );
}

export default App;
