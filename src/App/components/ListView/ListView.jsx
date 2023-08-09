import { useMemo, useState } from "react";
import Search from "./Search/Search";
import Item from "./Item/Item";
import getProducts from "../../util/getProducts";
function ListView() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  //TODO Hacer callback que devuelva el item seleccionado a APP
  // const { productSelected } = props;

  //TODO Recibir filtrado de la búsqueda
  useMemo(async () => {
    const cacheValidation = () => {
      const cacheDate = JSON.parse(localStorage.getItem("cacheCreationDate"));
      const cacheCreationDate = new Date(cacheDate).getTime();
      const actualDate = new Date().getTime();
      const checkDiff =
        Math.abs(cacheCreationDate - actualDate) / (1000 * 60 * 60);
      return checkDiff >= 1 && localStorage.getItem("productsCache")
        ? true
        : false;
    };
    if (!cacheValidation()) {
      setProducts(JSON.parse(localStorage.getItem("productsCache")));
      console.log("Caché cargada");
    } else {
      try {
        const receivedProducts = await getProducts();
        setProducts(receivedProducts);
        localStorage.setItem("productsCache", JSON.stringify(receivedProducts));
        localStorage.setItem("cacheCreationDate", JSON.stringify(new Date()));
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }
  }, []);

  return (
    <div className="container rounded-2xl shadow-xl mx-auto my-5 overflow-hidden p-3">
      <Search />
      {/* TODO Mapeo de todos los items de la API */}
      <div className="grid grid-cols-4 gap-10 p-10">
        {products.length
          ? products.map((product, index) => (
              <Item key={index} product={product} />
            ))
          : "cargando"}
      </div>
      {error}
    </div>
  );
}

export default ListView;
