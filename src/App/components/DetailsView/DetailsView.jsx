import PropTypes from "prop-types";
import Description from "./Description/Description";
import Actions from "./Actions/Actions";
import { useMemo, useState } from "react";
import getProducts from "../../util/getProducts";
import { Image } from "@chakra-ui/react";

function DetailsView({ productID, productSelected }) {
  const [productDetails, setProductDetails] = useState({});
  const [error, setError] = useState();

  useMemo(async () => {
    try {
      console.log("Cargando detalles del producto");
      const receivedDetails = await getProducts(productID);
      setProductDetails(receivedDetails);
      productSelected(`${receivedDetails.brand} ${receivedDetails.model}`);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, [productID, productSelected]);
  return (
    <div className="container rounded-2xl shadow-xl mx-auto my-5 overflow-hidden p-3 bg-white bg-opacity-80 backdrop-blur-sm">
      {error ? (
        <div className="text-center bg-red-500 rounded-xl text-white font-semibold uppercase">
          error
        </div>
      ) : (
        <div className="md:grid grid-cols-2 gap-3">
          <div className="flex justify-center py-10 bg-white rounded-xl">
            <Image src={productDetails.imgUrl} />
          </div>
          <div>
            <Description productDetails={productDetails} />
            <Actions />
          </div>
        </div>
      )}
    </div>
  );
}

DetailsView.propTypes = {
  productID: PropTypes.string.isRequired,
  productSelected: PropTypes.func.isRequired,
};
export default DetailsView;
