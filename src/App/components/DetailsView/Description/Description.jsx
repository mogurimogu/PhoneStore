import PropTypes from "prop-types";

function Description({ productDetails }) {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayType,
    displayResolution,
    displaySize,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = productDetails;

  const listTitleClasses = "font-semibold";
  const SubListClasses = "list-disc list-inside pl-5";

  return (
    <>
      <div className="flex justify-between bg-slate-700 items-center p-3 rounded-2xl">
        <h1 className="text-2xl font-semibold text-white">
          {brand} {model}
        </h1>
        <span className="text-5xl font-semibold text-amber-500">{price}€</span>
      </div>
      <ul className="p-3">
        {cpu && (
          <li>
            <span className={listTitleClasses}>CPU: </span>
            {cpu}
          </li>
        )}
        {ram && (
          <li>
            <span className={listTitleClasses}>RAM: </span>
            {ram}
          </li>
        )}
        {os && (
          <li>
            <span className={listTitleClasses}>Sistema Operativo: </span>
            {os}
          </li>
        )}
        {(displayResolution || displaySize || displayType) && (
          <li>
            <span className={listTitleClasses}>Pantalla:</span>
            <ul className={SubListClasses}>
              {displayType && <li>{displayType}</li>}
              {displayResolution && <li>{displayResolution}</li>}
              {displaySize && <li>{displaySize}</li>}
            </ul>
          </li>
        )}
        {battery && (
          <li>
            <span className={listTitleClasses}>Betería:</span> {battery}
          </li>
        )}
        {(primaryCamera || secondaryCmera) && (
          <li>
            <span className={listTitleClasses}>Cámaras:</span>
            <ul className={SubListClasses}>
              {primaryCamera && (
                <li>
                  <span className={listTitleClasses}>Principal:</span>{" "}
                  {primaryCamera}
                </li>
              )}
              {secondaryCmera && (
                <li>
                  <span className={listTitleClasses}>Secundaria:</span>{" "}
                  {secondaryCmera}
                </li>
              )}
            </ul>
          </li>
        )}
        {dimentions && (
          <li>
            <span className={listTitleClasses}>Dimensiones: </span>
            {dimentions}
          </li>
        )}
        {weight && (
          <li>
            <span className={listTitleClasses}>Peso: </span>
            {weight}g
          </li>
        )}
      </ul>
    </>
  );
}

Description.propTypes = {
  productDetails: PropTypes.object.isRequired,
};

export default Description;
