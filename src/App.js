import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

//<ItemListContainer greeting="Bienvenidos a Pichono's" />
function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
    </>
  );
}

export default App;
