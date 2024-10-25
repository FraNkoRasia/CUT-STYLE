import React, { useState, useEffect } from "react";
import { conexionApi } from "../Modules/conexionApi";
import Boton from "../Boton/Boton";
import "../Formularios/Formulario.css";

export default function RegisterBarbershop() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    latitude: "",
    longitude: "",
    image: null, // Para almacenar el archivo de imagen
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' o 'error'
  const [showMessage, setShowMessage] = useState(false); // Para controlar la visibilidad del mensaje

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value, // Si es archivo, guarda el archivo; de lo contrario, el valor.
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para manejar la imagen y los otros datos
    const data = new FormData();
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("phone", formData.phone);
    data.append("latitude", formData.latitude);
    data.append("longitude", formData.longitude);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const respuesta = await conexionApi.registro(data); // Envío con FormData
      if (respuesta) {
        setMessage("Registro exitoso");
        setMessageType("success");
        setShowMessage(true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 5000); // Redirige después de 5 segundos para permitir que el mensaje se vea
      }
    } catch (error) {
      setMessage(`Error al registrar: ${error.message}`);
      setMessageType("error");
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
      <section className="section-formulario">
        <form
          className="Formulario"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1>REGISTER BARBERSHOP</h1>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="latitude">Latitude</label>
          <input
            id="latitude"
            name="latitude"
            type="number"
            placeholder="Latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
          />

          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            name="longitude"
            type="number"
            placeholder="Longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
          />

          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
          />

          <p style={{ color: "white" }}>All fields are required</p>

          <Boton texto="Register Barbershop" className="boton " />

          {showMessage && <p className={`mensaje ${messageType}`}>{message}</p>}
        </form>
      </section>
    </div>
  );
}
