import { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Modal from 'react-modal';
import Boton from '../Boton/Boton';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../Home/Home.css';

Modal.setAppElement('#root');

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Home() {
    const mapRef = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const navigate = useNavigate();

    const handleNavigateToStylist = () => {
        navigate('/barbershop');
    };

    const handleScrollToMap = () => {
        if (mapRef.current) {
            mapRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to scroll to the top of the page
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add a smooth scrolling effect
        });
    };

    const markers = [
        {
            position: [-33.12233329038794, -64.35634635208058],
            text: 'Barberqueen Stylist',
            imageUrl: '/peluquero1.webp',
            buttonText: 'See Barbershop'
        },
        {
            position: [-33.12224343572072, -64.34857867524579],
            text: 'Pervieux Stylist',
            imageUrl: 'peluquero2.webp',
            buttonText: 'See Barbershop'
        },
        {
            position: [-33.121031896531846, -64.35848360992675],
            text: 'Barbercoffe Stylist',
            imageUrl: 'peluquero3.webp',
            buttonText: 'See Barbershop'
        },
    ];

    const openModal = (marker) => {
        setModalContent(marker);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='home'>
            <div className='banner-container'>
                <div className='contenido'>
                    <h1 className='parrafo1'>WE ARE HERE</h1>
                    <h1 className='parrafo2'>CUT & STYLE</h1>
                    <h1 className='parrafo3'>YOU</h1>
                    <p className='parrafo4'>
                        At Cut & Style, we are dedicated to providing exceptional grooming and styling services tailored to your unique preferences. Let’s go!
                    </p>

                    <div className="contenedor-izquierda">
                        <Boton texto="Barber Map" onClick={handleScrollToMap} className="boton" />
                    </div>
                </div>
            </div>

            <h1 className='titulomap' ref={mapRef}>FIND YOUR BARBERSHOP</h1>
            <p className='descripcionmapa'>Find your favorite barbershop on the map</p>

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

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <h2 className='titleStylist'>{modalContent.text}</h2>
                <div className='modalsin'>
                    <div className='infoStylist'>
                        <p>We provide hair cuts, hairstyles, coloring, straightening,
                            hair and scalp care treatments,
                            in addition to personalized advice for each type of hair,
                            with professional products that improve hair style and health.</p>
                    </div>
                    <img src={modalContent.imageUrl} alt={modalContent.text} />
                </div>

                <p className='infoPeluca'>Visit us from:</p>

                <div className='horarioDireccion'>
                    <p>🕑 Monday - Friday: 9 AM - 6 PM</p>
                    <p>📍 Fake Street 123, City, Country</p>
                </div>

                <Boton texto={modalContent.buttonText} onClick={() => {
                    handleNavigateToStylist();
                    handleScrollToTop(); // Scroll to top after navigation
                }} className="boton" />
            </Modal>
        </div>
    );
}
