import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Boton from "../Boton/Boton";
import "../Formularios/Formulario.css";

const Hairdresser = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    latitude: 0.0,
    longitude: 0.0,
    img: "",
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : name === "latitude" || name === "longitude"
          ? value !== ""
            ? parseFloat(value)
            : "" // Solo parsear si no está vacío
          : value,
    }));
  };

  // Envía los datos del formulario al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token"); // Obtiene el token del almacenamiento
    if (
      !formData.latitude ||
      isNaN(formData.latitude) ||
      !formData.longitude ||
      isNaN(formData.longitude)
    ) {
      toast.error(
        "Por favor ingresa coordenadas válidas para latitud y longitud."
      );
      return;
    }
    if (!token) {
      toast.error("No se encontró el token de autenticación.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/barbershops`,
        {
          name: formData.name,
          address: formData.address,
          phone: formData.phone,
          latitude: formData.latitude,
          longitude: formData.longitude,
          img: formData.img,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
          },
        }
      );

      console.log(response);
      toast.success("Peluquería registrada con éxito");
      setTimeout(() => {
        window.location.replace("/"); // Redirigir después de 2 segundos
      }, 2000);
    } catch (error) {
      // Verifica si hay un mensaje específico de error y lo muestra
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(`Error al registrarte: ${error.response.data.message}`);
      } else {
        toast.error("Error al registrarte. Por favor, intenta nuevamente.");
      }
    }
  };

  return (
    <div className="form-container">
      <section className="section-formulario">
        <form className="Formulario" onSubmit={handleSubmit}>
          <h1>HAIRDRESSER REGISTER</h1>
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
            type="text" // Cambiado a "text" para evitar validaciones de número en el teléfono
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="latitude">Latitude</label>
          <input
            id="latitude"
            name="latitude"
            type="number"
            step="any"
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
            step="any"
            placeholder="Longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
          <label htmlFor="img">Image URL</label>
          <input
            id="img"
            name="img"
            type="text"
            placeholder="Image URL"
            value={formData.img}
            onChange={handleChange}
            required
          />
          <Boton texto="Register" className="boton" />
        </form>
        <Toaster
          reverseOrder={false}
          position="top-center"
          containerStyle={{ marginTop: "90px" }}
        />
      </section>
    </div>
  );
};

export default Hairdresser;
