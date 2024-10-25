import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Boton from "../Boton/Boton";
import "../Formularios/Formulario.css";

const Login = () => {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      sessionStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.name);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("role", response.data.user.role.name);


      toast.success("Usuario Logueado con exito!");

      window.location.replace('/');

    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(`Error al iniciar sesión: ${error.response.data.message}`);
      } else {
        toast.error("Error al iniciar sesión. Por favor, intenta nuevamente.");
      }
    }
  };

  return (
    <div className="form-container">
      <section className="section-formulario">
        <form className="Formulario" onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Boton texto="Login" className="boton" />
          <Link to="/forgot-password" className="olvidaste">
            ¿Olvidaste tu contraseña?
          </Link>
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

export default Login;
