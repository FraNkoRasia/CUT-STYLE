import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { conexionApi } from '../Modules/conexionApi';
import auth from '../Modules/auth';
import Boton from '../Boton/Boton';
import '../Formularios/Formulario.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser(decodedToken);
            } catch (error) {
                console.error('Error al decodificar el token:', error);
                sessionStorage.removeItem('token');
            }
        }
    }, []);

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await conexionApi.login({
                email: formData.email,
                password: formData.password
            });

            if (respuesta && respuesta.token) {
                const decodedToken = jwtDecode(respuesta.token);
                const userRole = decodedToken.rol;

                sessionStorage.setItem('token', respuesta.token);
                sessionStorage.setItem('rol', userRole);
                auth.login(respuesta.token, userRole);
                setUser(decodedToken);
                // Redirigir a /home solo si el inicio de sesión es exitoso
                window.location.href = '/home';
            }
        } catch (error) {
            setMessage(`Error al iniciar sesión: ${error.message}`);
            setMessageType('error');
            setShowMessage(true);
        }
    };

    return (
        <div className='form-container'>
            <section className='section-formulario'>
                <form className='Formulario' onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" name="password" type="password" placeholder="Ingrese su contraseña" value={formData.password} onChange={handleChange} required />
                    <Boton texto="Login" className="boton" />
                    <Link to="/forgot-password" className='olvidaste'>¿Olvidaste tu contraseña?</Link>
                    {showMessage && <p className={`mensaje ${messageType}`}>{message}</p>}
                </form>
            </section>
        </div>

    );
};

export default Login;
