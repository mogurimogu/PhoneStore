import { useMemo, useState } from "react";
import Search from "./Search/Search";
import Item from "./Item/Item";
import getProducts from "../../util/getProducts";
function ListView(props) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  //TODO Hacer callback que devuelva el item seleccionado a APP
  const { productSelected } = props;

  //TODO Recibir filtrado de la búsqueda
  useMemo(async () => {
    try {
      const receivedProducts = await getProducts();
      setProducts(receivedProducts);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, []);

  return (
    <div>
      <Search />
      <hr />
      {/* TODO Mapeo de todos los items de la API */}
      {products.length
        ? products.map((product, index) => (
            <Item key={index} product={product} />
          ))
        : ""}
      {error}
    </div>
  );
}

export default ListView;
