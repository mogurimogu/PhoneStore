import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ListView from "./components/ListView/ListView";
import DetailsView from "./components/DetailsView/DetailsView";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(false);
  //TODO Recibir el producto seleccionado
  return (
    <div className="backgroundAPP">
      <Header />
      {!selectedProduct ? (
        <ListView productSelected={(product) => setSelectedProduct(product)} />
      ) : (
        <DetailsView product={selectedProduct} />
      )}
    </div>
  );
}

export default App;
