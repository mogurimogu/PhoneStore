import Search from "./Search/Search";
import Item from "./Item/Item";
function ListView(props) {
  //TODO Hacer callback que devuelva el item seleccionado a APP
  //TODO Recibir filtrado de la búsqueda
  return (
    <div>
      <Search/>
      <hr/>
      {/* TODO Mapeo de todos los items de la API */}
      <Item/>
    </div>
  );
}

export default ListView;
