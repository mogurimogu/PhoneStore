import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Search from "./Search/Search";
import Item from "./Item/Item";
import getProducts from "../../util/getProducts";

function ListView({ productSelected }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState("");
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
    <div className="container rounded-2xl shadow-xl mx-auto my-5 overflow-hidden p-3 bg-white bg-opacity-5 backdrop-blur-sm">
      <Search filter={(products) => setFilter(products)} products={products} />

      <ul className="grid grid-cols-4 gap-10 p-10">
        {products.length
          ? (filter.length ? filter : products).map((product) => (
              <li key={product.id} onClick={() => productSelected(product.id)}>
                <Item product={product} />
              </li>
            ))
          : error
          ? error
          : "Cargando..."}
      </ul>
    </div>
  );
}

ListView.propTypes = {
  productSelected: PropTypes.func.isRequired,
};

export default ListView;
