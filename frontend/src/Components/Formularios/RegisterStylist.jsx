import React, { useState, useEffect } from 'react';
import { conexionApi } from '../Modules/conexionApi';
import Boton from '../Boton/Boton';
import '../Formularios/Formulario.css';

export default function RegisterStylist() {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        coordinates: '',
        image: null,  // Para almacenar el archivo de imagen
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' o 'error'
    const [showMessage, setShowMessage] = useState(false); // Para controlar la visibilidad del mensaje

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value  // Si es archivo, guarda el archivo; de lo contrario, el valor.
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear un objeto FormData para manejar la imagen y los otros datos
        const data = new FormData();
        data.append('name', formData.name);
        data.append('location', formData.location);
        data.append('coordinates', formData.coordinates);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const respuesta = await conexionApi.registro(data);  // Envío con FormData
            if (respuesta) {
                setMessage('Registro exitoso');
                setMessageType('success');
                setShowMessage(true);
                setTimeout(() => {
                    window.location.href = '/login';
                }, 5000); // Redirige después de 5 segundos para permitir que el mensaje se vea
            }
        } catch (error) {
            setMessage(`Error al registrar: ${error.message}`);
            setMessageType('error');
            setShowMessage(true);
        }
    };

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    return (
        <div className="form-container">
            <section className='section-formulario'>
                <form className='Formulario' onSubmit={handleSubmit} encType="multipart/form-data">
                    <h1>REGISTER STYLIST</h1>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="location">Address</label>
                    <input id="location" name="location" type="text" placeholder="Address" value={formData.location} onChange={handleChange} required />

                    <label htmlFor="coordinates">Coordinates</label>
                    <input id="coordinates" name="coordinates" type="text" placeholder="Coordinates (e.g., 40.7128, -74.0060)" value={formData.coordinates} onChange={handleChange} required />

                    <label htmlFor="image">Image</label>
                    <input id="image" name="image" type="file" accept="image/*" onChange={handleChange} required />

                    <p style={{ color: 'white' }}>All fields are required</p>

                    <Boton texto="Barber Register" className="boton" />

                    {showMessage && <p className={`mensaje ${messageType}`}>{message}</p>}
                </form>
            </section>
        </div>
    );
};
