import Carousel from "./componentes-encabezado/carrusel";
import Portada from "./componentes-encabezado/portada";
import Contador from "./componentes-encabezado/Contador";
import Celebracion from "./componentes-encabezado/Ubicacion";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import Musica from "./componentes-encabezado/musica";
import Familia from "./componentes-encabezado/Familia";
import Itinerario from "./componentes-encabezado/Itinerario";
import FraseSeparador from "./componentes-encabezado/frase";
import FraseCapitulo from "./componentes-encabezado/Fraseprimera";

export default function Intinerario() {
  return (
    <div>

      <Musica/>

      <Portada />

      <Contador />

      <FraseCapitulo/>

      <Celebracion />

      <Familia/>

      <Itinerario/>

      <Carousel />

      <Regalos />

      <FraseSeparador/>

      <Confirmacion />
    </div>
  );
}