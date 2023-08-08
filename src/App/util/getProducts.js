import axios from "axios";
export default async function getProducts(product) {
  const apiURL = "https://itx-frontend-test.onrender.com/api/product/";
  try {
    return product
      ? (await axios.get(apiURL + product)).data
      : (await axios.get(apiURL)).data;
  } catch (error) {
    throw new Error(error.message);
  }
}
