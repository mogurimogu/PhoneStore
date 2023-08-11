import PropTypes from "prop-types";
import Photo from "./Photo/Photo";
import Description from "./Description/Description";
import Actions from "./Actions/Actions";

function DetailsView({ product }) {
  return (
    <>
      {product}
      <Photo />
      <Description />
      <Actions />
    </>
  );
}

DetailsView.propTypes = {
  product: PropTypes.func.isRequired,
};
export default DetailsView;
