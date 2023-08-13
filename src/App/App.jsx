import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ListView from "./components/ListView/ListView";
import DetailsView from "./components/DetailsView/DetailsView";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductName, setselectedProductName] = useState(null);
  return (
    <div className="backgroundAPP min-h-screen p-3">
      <div className="overlay"></div>
      <div className="overlay-2"></div>
      <Header
        productName={selectedProductName}
        goBack={() => {
          setSelectedProduct(null);
          setselectedProductName(null);
        }}
      />
      {!selectedProduct ? (
        <ListView productSelected={(product) => setSelectedProduct(product)} />
      ) : (
        <DetailsView
          productID={selectedProduct}
          productSelected={(product) => setselectedProductName(product)}
        />
      )}
    </div>
  );
}

export default App;
