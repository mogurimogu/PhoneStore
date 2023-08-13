import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ListView from "./components/ListView/ListView";
import DetailsView from "./components/DetailsView/DetailsView";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductName, setselectedProductName] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useMemo(() => setCart(JSON.parse(localStorage.getItem("cart"))), []);
  const goBack = () => {
    setSelectedProduct(null);
    setselectedProductName(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="backgroundAPP min-h-screen p-3">
      <div className="overlay"></div>
      <div className="overlay-2"></div>
      <Header productName={selectedProductName} goBack={goBack} cart={cart}/>
      {!selectedProduct ? (
        <ListView productSelected={(product) => setSelectedProduct(product)} />
      ) : (
        <DetailsView
          productID={selectedProduct}
          productSelected={(product) => setselectedProductName(product)}
          goBack={goBack}
          toCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
