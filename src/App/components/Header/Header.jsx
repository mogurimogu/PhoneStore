import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

function Header({ productName, goBack, productsInCart }) {
  return (
    <header className="bg-slate-700 container mx-auto rounded-2xl bg-opacity-90 text-white flex justify-between items-center shadow-xl sticky top-3 z-10 backdrop-blur">
      <button
        className="font-logo text-2xl pb-3 pt-2 px-4 text-amber-400 hover:text-amber-300 transition"
        onClick={goBack}
      >
        LogoPhone
      </button>
      <span className="flex items-center">
        <button
          onClick={goBack}
          className="mr-1 flex items-center hover:text-amber-300 transition"
        >
          <AiFillHome className="inline-block mr-1" /> Inicio
        </button>
        {productName ? (
          <>
            /<span className="text-amber-400 ml-1">{productName}</span>
          </>
        ) : (
          ""
        )}
      </span>
      <button className="px-4 flex items-center hover:text-amber-300 transition">
        <span>{productsInCart ? productsInCart : "0"} </span>
        <FaCartShopping className="inline-block ml-1" />
      </button>
    </header>
  );
}

Header.propTypes = {
  goBack: PropTypes.func.isRequired,
  productName: PropTypes.string,
  productsInCart: PropTypes.number,
};

export default Header;
