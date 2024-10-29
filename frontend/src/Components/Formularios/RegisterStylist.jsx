import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Boton from "../Boton/Boton";
import "../Formularios/Formulario.css";


const RegisterBarbershop = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: "",
        name: "",
        lastName: "",
        phone: "",
        roleId: 3,
        tyc: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/v1/register`,
                {
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                    lastname: formData.lastName,
                    phone: formData.phone,
                    roleId: formData.roleId,
                }
            );

            console.log(response);

            toast.success("Barbero registrado con exito!");
            setTimeout(() => {
                window.location.replace('/login');
            }, 2000);
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
                    <h1>BARBER REGISTER</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ej: example@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password2">Repeat Password</label>
                    <input
                        id="password2"
                        name="password2"
                        type="password"
                        placeholder="Repeat Password"
                        value={formData.password2}
                        onChange={handleChange}
                        required
                    />
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
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            name="tyc"
                            id="tyc"
                            checked={formData.tyc}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="tyc"> I accept terms and conditions</label>
                    </div>
                    <p style={{ color: "white" }}>All fields are required</p>
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
export default RegisterBarbershop;