import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@chakra-ui/react";

function Search({ products, filter }) {
  const [timer, setTimer] = useState(null);

  const handleFilter = (event) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      const filteredProducts = products.filter((product) => {
        const { brand, model } = product;
        const lowerCaseValue = event.target.value.toLowerCase();
        return (
          brand.toLowerCase().includes(lowerCaseValue) ||
          model.toLowerCase().includes(lowerCaseValue)
        );
      });
      filter(filteredProducts);
    }, 700);
    setTimer(newTimer);
  };
  return (
    <Input placeholder="Search" onChange={handleFilter} rounded={"full"} />
  );
}

Search.propTypes = {
  products: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
};

export default Search;
