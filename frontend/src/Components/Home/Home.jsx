import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../Home/Home.css';

// Establece el elemento de la aplicación para el modal
Modal.setAppElement('#root');

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

  // Estado para el modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Función para deslizar hasta el mapa
  const handleScrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define las posiciones de los marcadores (latitud, longitud)
  const markers = [
    {
      position: [-33.12233329038794, -64.35634635208058],
      text: 'Barberqueen Peluqueria',
      imageUrl: 'https://uiparadox.co.uk/templates/trimStyle/v2/assets/media/team/card-img-3.png',
      buttonText: 'See Stylist'
    },
    {
      position: [-33.12224343572072, -64.34857867524579],
      text: 'Pervieux Estilistas',
      imageUrl: 'https://uiparadox.co.uk/templates/trimStyle/v2/assets/media/team/card-img-1.png',
      buttonText: 'See Stylist'
    },
    {
      position: [-33.121031896531846, -64.35848360992675],
      text: 'Barbercoffe',
      imageUrl: 'https://uiparadox.co.uk/templates/trimStyle/v2/assets/media/team/card-img-4.png',
      buttonText: 'See Stylist'
    },
  ];

  // Función para abrir el modal
  const openModal = (marker) => {
    setModalContent(marker);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

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
            <Marker
              key={index}
              position={marker.position}
              eventHandlers={{
                click: () => openModal(marker)
              }}
            />
          ))}
        </MapContainer>
      </div>

      // Modal
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className='titleStylist'>{modalContent.text}</h2>
        {modalContent.imageUrl && <img src={modalContent.imageUrl} alt={modalContent.text} />}
        <p>Information about {modalContent.text}... </p>
        <Link to="/Stylist" className="modal-link">
          {modalContent.buttonText}
        </Link>
      </Modal>

    </div>
  );
}
