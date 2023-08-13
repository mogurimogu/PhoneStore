import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

function Header({ productName, goBack, cart }) {
  return (
    <header className="bg-slate-700 container mx-auto rounded-2xl bg-opacity-90 text-white grid grid-cols-2 md:grid-cols-3 items-center shadow-xl sticky top-3 z-10 backdrop-blur flex-wrap">
      <button
        className="font-logo text-2xl pb-3 pt-2 px-4 text-amber-400 hover:text-amber-300 transition text-left"
        onClick={goBack}
      >
        <span className="whitespace-nowrap">Logo</span>
        <span className="whitespace-nowrap">Phone</span>
      </button>
      <span className="flex items-center order-3 col-span-2 md:col-span-1 md:order-none w-full md:w-auto  justify-center pb-3 md:pb-0">
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
      <button className="px-4 flex items-center hover:text-amber-300 transition justify-end">
        <span>{cart ? cart.length : 0 } </span>
        <FaCartShopping className="inline-block ml-1" />
      </button>
    </header>
  );
}

Header.propTypes = {
  goBack: PropTypes.func.isRequired,
  productName: PropTypes.string,
  cart: PropTypes.array,
};

export default Header;
