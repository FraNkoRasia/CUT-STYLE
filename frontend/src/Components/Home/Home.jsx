import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Home/Home.css';

// Configuración del icono para evitar errores con los marcadores
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Home() {
  // Define una referencia para el mapa
  const mapRef = useRef(null);

  // Función para deslizar hasta el mapa
  const handleScrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define las posiciones de los marcadores (latitud, longitud)
  const markers = [
    { position: [-33.12233329038794, -64.35634635208058], text: 'Barberqueen Peluqueria' },
    { position: [-33.12224343572072, -64.34857867524579], text: 'Pervieux Estilistas' },
    { position: [-33.121031896531846, -64.35848360992675], text: 'Barbercoffe' },
  ];

  return (
    <div className='home'>
      <div className='parrafo'>
        <div className='contenido'>
          <h1 className='parrafo1'>WE ARE HERE</h1>
          <h1 className='parrafo2'>CUT & STYLE</h1>
          <h1 className='parrafo3'>YOU</h1>
          <p className='parrafo4'>
            At Trim & Style, we are dedicated to providing exceptional grooming and styling services tailored to your unique preferences. Let’s go!
          </p>

          <button className='botonhome' onClick={handleScrollToMap}>Barber Map</button>
        </div>
      </div>

      {/* Referencia del mapa */}
      <h1 className='titulomap' ref={mapRef}>BARBER SHOP MAP</h1>
      <p className='descripcionmapa'>Search for your favorite hair salon from the map</p>

      <div className="map-container">
        <MapContainer
          center={[-33.123833068771, -64.34905509561183]}
          zoom={14}
          scrollWheelZoom={false}
          className="leaflet-map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>{marker.text}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
