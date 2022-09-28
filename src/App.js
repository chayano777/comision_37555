import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

//<ItemListContainer greeting="Bienvenidos a Pichono's" />
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Pichono's" />}
        />
        <Route path="/category/:categoryN" element={<ItemListContainer greeting="Bienvenidos a Pichono's" />}
        />
        <Route path="/category/:id" element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
