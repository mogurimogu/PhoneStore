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
      const cacheDate = localStorage.getItem("cacheCreationDate");
      const cacheCreationDate = new Date(cacheDate);
      const actualDate = new Date();
      const checkDiff =
        Math.abs(cacheCreationDate.getTime() - actualDate.getTime()) /
        (1000 * 60 * 60);
      return checkDiff >= 1 && localStorage.getItem("productsCache")
        ? true
        : false;
    };

    if (cacheValidation) {
      setProducts(JSON.parse(localStorage.getItem("productsCache")));
      console.log("Productos cargados desde la caché");
    } else {
      try {
        console.log("Cargando Productos");
        const receivedProducts = await getProducts();
        setProducts(receivedProducts);
        console.log("Productos Cargados");
        console.log("Guardando productos en la caché");
        localStorage.setItem("productsCache", JSON.stringify(receivedProducts));
        localStorage.setItem("cacheCreationDate", JSON.stringify(new Date()));
        console.log("Productos guardados en caché");
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }
  }, []);

  return (
    <div>
      <Search />
      <hr />
      {/* TODO Mapeo de todos los items de la API */}
      <div className="grid grid-cols-4 gap-10 p-10">
        {products.length
          ? products.map((product, index) => (
              <Item key={index} product={product} />
            ))
          : ""}
      </div>
      {error}
    </div>
  );
}

export default ListView;
