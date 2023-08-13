import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";

function Actions({ productDetails, goBack, toCart }) {
  const { colors, internalMemory } = productDetails;

  const [selectedModel, setSelectedModel] = useState({
    id: "",
    color: "",
    internalMemory: "",
  });
  const [validation, setValidation] = useState({
    color: true,
    internalMemory: true,
  });
  const [isValid, setIsValid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    colors && colors.length < 2
      ? setSelectedModel((prevModel) => ({
          ...prevModel,
          color: colors[0],
        }))
      : "";
    internalMemory && internalMemory.length < 2
      ? setSelectedModel((prevModel) => ({
          ...prevModel,
          internalMemory: internalMemory[0],
        }))
      : "";

    setSelectedModel((prevModel) => ({
      ...prevModel,
      id: productDetails.id,
    }));

    setIsValid(validation.internalMemory && validation.color ? true : false);
  }, [colors, internalMemory, validation]);

  const handleChange = (event) => {
    console.log(productDetails);
    const { name, value } = event.target;
    setSelectedModel((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValidation(() => ({
      internalMemory: selectedModel.internalMemory ? true : false,
      color: selectedModel.color ? true : false,
    }));

    toCart(selectedModel);

    setIsOpen(true);
  };

  const onClose = () => setIsOpen(false);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {colors && (
          <>
            <label
              className={`text-white text-lg font-medium ${
                validation.color ? "" : "text-red-400"
              }`}
            >
              Colores*
            </label>
            <Select onChange={handleChange} name="color" background={"white"}>
              {colors.length > 1 ? (
                <option value={""}>Seleccione un color</option>
              ) : (
                ""
              )}
              {colors.map((color, index) => (
                <option value={color} key={index}>
                  {color}
                </option>
              ))}
            </Select>
          </>
        )}
        {internalMemory && (
          <>
            <label
              className={`text-white text-lg font-medium ${
                validation.internalMemory ? "" : "text-red-400"
              }`}
            >
              Memoria*
            </label>
            <Select
              onChange={handleChange}
              name="internalMemory"
              background={"white"}
            >
              {internalMemory.length > 1 ? (
                <option value={""}>Seleccione capacidad</option>
              ) : (
                ""
              )}
              {internalMemory.map((memory, index) => (
                <option value={memory} key={index}>
                  {memory}
                </option>
              ))}
            </Select>
          </>
        )}
        <input
          type="submit"
          value={"Añadir al carrito"}
          className="bg-amber-500 hover:bg-amber-300 transition w-full mt-3 p-3 rounded-xl font-medium cursor-pointer"
        />
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            textAlign={"center"}
            mt={"3"}
            fontWeight={"medium"}
            fontSize={"xl"}
          >
            {isValid ? "Producto añadido al carrito" : "Comprueba los datos"}
          </ModalBody>

          <ModalFooter>
            {isValid ? (
              <>
                <Button
                  colorScheme="yellow"
                  mr={3}
                  onClick={() => alert("no implementado")}
                >
                  Ir al carrito
                </Button>
                <Button variant="ghost" onClick={goBack}>
                  Volver al listado
                </Button>
              </>
            ) : (
              <Button variant="ghost" onClick={onClose} mx={"auto"}>
                cerrar
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

Actions.propTypes = {
  productDetails: PropTypes.object.isRequired,
  toCart: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Actions;
