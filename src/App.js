import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a Pichono's" />}
          />
          <Route
            path="/category/:categoryN"
            element={<ItemListContainer greeting="Bienvenidos a Pichono's" />}
          />
          <Route
            path="/category/:categoryN/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/:orderid" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
