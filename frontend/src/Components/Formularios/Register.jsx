import React, { useState, useEffect } from 'react';
import { conexionApi } from '../Modules/conexionApi';
import '../Formularios/Formulario.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
        name: '',
        lastName: '',
        phone: '',
        rol: 'Usuario',
        tyc: false
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [showMessage, setShowMessage] = useState(false); // Para controlar la visibilidad del mensaje

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.password2) {
            setMessage('Las contraseñas no coinciden');
            setMessageType('error');
            setShowMessage(true);
            return;
        }

        try {
            const respuesta = await conexionApi.registro(formData);
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
                <form className='Formulario' onSubmit={handleSubmit}>
                    <h1>REGISTER</h1>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Ej: example@example.com" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <label htmlFor="password2">Repeat Password</label>
                    <input id="password2" name="password2" type="password" placeholder="Repeat Password" value={formData.password2} onChange={handleChange} required />
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="number" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                    <div className='checkbox'>
                        <input type="checkbox" name="tyc" id="tyc" checked={formData.tyc} onChange={handleChange} required />
                        <label htmlFor="tyc"> I accept terms and conditions</label>
                    </div>
                    <p style={{ color: 'white' }}>All fields are required</p>
                    <button type="submit">Register</button>
                    {showMessage && <p className={`mensaje ${messageType}`}>{message}</p>}
                </form>
            </section>
        </div>
    );
};

export default Register;
