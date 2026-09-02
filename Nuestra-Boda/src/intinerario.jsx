import Carousel from "./componentes-encabezado/carrusel";
import Portada from "./componentes-encabezado/portada";
import Contador from "./componentes-encabezado/Contador";
import Celebracion from "./componentes-encabezado/Ubicacion";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import Musica from "./componentes-encabezado/musica";
import Familia from "./componentes-encabezado/Familia";
import Itinerario from "./componentes-encabezado/Itinerario";

export default function Intinerario() {
  return (
    <div>

      <Musica/>

      <Portada />

      <Contador />

      <Celebracion />

      <Familia/>

      <Itinerario/>

      <Carousel />

      <Regalos />

      <Confirmacion />
    </div>
  );
}