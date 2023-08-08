import axios from "axios";
export default async function getProducts(product) {
  const apiURL = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product/";
  try {
    return product
      ? await axios.get(apiURL + product)
      : await axios.get(apiURL);
  } catch (error) {
    throw new Error(error.message);
  }
}
